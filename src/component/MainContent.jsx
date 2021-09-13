import React from "react";
import { Component } from "react";
import "../App.css";

class MainContent extends Component {
  state = { recipes: [] };

  getRecipes() {
    const recipes = this.props.data;
    this.setState({ recipes: recipes });
  }

  componentDidMount() {
    this.getRecipes();
  }

  render() {
    const { recipes } = this.state;
    return (
      <>
        <div className="maincontent">
          <div className="container">
            {recipes.recipes &&
              recipes.recipes.map((recipes, index) => (
                <div key={index}>
                  <div className="team-player-box" id={`tp-box-${index}`}>
                    <h1>{recipes.title}</h1>
                    <img src={recipes.image} alt="example" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </>
    );
  }
}

export default MainContent;
