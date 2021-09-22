import React from "react";
import { Component } from "react";
import "../App.css";
import { AiFillLike } from "react-icons/ai";
import { GiWheat } from "react-icons/gi";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import Subscribe from "./Subscribe";
import JokeContainer from "./JokeContainer";

class MainContent extends Component {
  state = { recipes: [] };

  getRecipes() {
    const recipes = this.props.data;
    this.setState({ recipes: recipes });
  }

  componentDidMount() {
    this.getRecipes();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({ recipes: this.props.data });
    }
  }

  render() {
    const { recipes } = this.state;
    return (
      <>
        <div className="maincontent">
          <div className="container">
            <div className="joke-container">
              <JokeContainer />
            </div>
            <div className="main-grid">
              {!recipes.results
                ? recipes.recipes &&
                  recipes.recipes.slice(0, 6).map((recipes, index) => (
                    <div key={index}>
                      <div className={`rand-recipes`}>
                        <Link to={`/recipe-information/${recipes.id}`}>
                          <h1>{recipes.title}</h1>
                          {recipes.image === undefined ? (
                            <img
                              src="https://www.corepixel.se/pub_images/original/No-image-available.jpg"
                              alt="example"
                              style={{ width: "230px", height: "230px" }}
                            />
                          ) : (
                            <img src={recipes.image} alt="example" />
                          )}
                        </Link>
                        <div className="dish-info">
                          <p>{recipes.readyInMinutes}Min</p>
                          <h4>
                            Likes : {recipes.aggregateLikes}
                            <AiFillLike />
                          </h4>
                        </div>
                        <br />
                        <br />
                        <hr />
                      </div>
                    </div>
                  ))
                : recipes.results &&
                  recipes.results.map((recipe, index) => (
                    <div key={index}>
                      <div className={`rand-recipes`}>
                        <Link to={`/recipe-information/${recipe.id}`}>
                          <div className="rand-recipes-title">
                            <h1>{recipe.title}</h1>
                            {recipe.glutenFree === true ? (
                              <GiWheat
                                style={{
                                  color: "black",
                                  marginLeft: "10px",
                                }}
                              />
                            ) : (
                              <p></p>
                            )}
                          </div>

                          <img src={recipe.image} alt="example" />
                        </Link>
                        <div className="dish-info">
                          <p>{recipe.readyInMinutes}Min</p>
                          <h4>
                            Likes : {recipe.aggregateLikes}
                            <AiFillLike />
                          </h4>
                        </div>
                        <br />
                        <br />
                        <hr />
                      </div>
                    </div>
                  ))}
            </div>
            <div id="subscribe-div">
              <Subscribe />
            </div>
            <div className="slider">
              {this.state.recipes && <Slider data={this.state.recipes} />}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainContent;
