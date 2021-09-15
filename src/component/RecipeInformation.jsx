import React, { Component } from "react";
import RecipeService from "../service/RecipeService";

class RecipeInformation extends Component {
  state = { singleRecipe: [] };

  async componentDidMount() {
    this.searchRecipe();
  }

  searchRecipe = async () => {
    let urlElement = window.location.pathname.split("/");
    urlElement = urlElement[2];
    const recipe = await RecipeService.getRecipeById(urlElement);
    this.setState({
      singleRecipe: recipe,
    });
  };

  render() {
    return (
      <div className="single-container">
        <div className="single-recipe">
          <div>
            <img src={this.state.singleRecipe.image} alt="not found" />
          </div>
          <div className="single-recipe-container">
            <h1>{this.state.singleRecipe.title}</h1>
            <div className="single-recipe-info-container">
              <div className="single-recipe-info">
                <p>Vegan: {!this.state.singleRecipe.vegan ? "No" : "Yes"}</p>
                <p>
                  Vegetarian:{" "}
                  {!this.state.singleRecipe.vegetarian ? "No" : "Yes"}
                </p>
                <p>
                  Gluten-free:{" "}
                  {!this.state.singleRecipe.glutenFree ? "No" : "Yes"}
                </p>
              </div>
              <div className="single-recipe-info">
                <p>Likes: {this.state.singleRecipe.aggregateLikes}</p>
                <p>Minutes: {this.state.singleRecipe.readyInMinutes}</p>
              </div>
            </div>
            <div className="single-recipe-link">
              <a href={this.state.singleRecipe.sourceUrl} alt="_blanc">
                See full recipe!
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RecipeInformation;
