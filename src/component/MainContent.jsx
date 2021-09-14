import React from "react";
import { Component } from "react";
import "../App.css";
import { FaFacebook } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLike,
} from "react-icons/ai";
import Slider from "./Slider";
import { BrowserRouter as Router, Link } from "react-router-dom";

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
            <div className="main-grid">
              {!recipes.results
                ? recipes.recipes &&
                  recipes.recipes.map((recipes, index) => (
                    <div key={index}>
                      <div className="rand-recipes" id={`recipe-box-${index}`}>
                        <Router>
                          <Link to="/recipe-information">
                            <h1>{recipes.title}</h1>
                            <img src={recipes.image} alt="Jpg not found!" />
                          </Link>
                        </Router>
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
                  recipes.results.map((recipes, index) => (
                    <div key={index}>
                      <div className="rand-recipes" id={`recipe-box-${index}`}>
                        <Router>
                          <Link to="/recipe-information">
                            <h1>{recipes.title}</h1>
                            <img src={recipes.image} alt="Jpg not found!" />
                          </Link>
                        </Router>
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
                  ))}
            </div>
            <div className="Subscribe-divider">
              <div>
                <h1>Follow us</h1>{" "}
                <a href="#instagram" className="diver-icons">
                  <FaFacebook />
                </a>
                <a href="#instagram" className="diver-icons">
                  <AiOutlineInstagram />
                </a>
                <a href="#instagram" className="diver-icons">
                  <AiFillTwitterCircle />
                </a>
                <a href="#instagram" className="diver-icons">
                  <AiFillGithub />
                </a>
              </div>
              <div>
                <h1>DO SOMETHING HERE!</h1>
              </div>
              <div className="slider">
                {this.state.recipes && <Slider data={this.state.recipes} />}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainContent;
