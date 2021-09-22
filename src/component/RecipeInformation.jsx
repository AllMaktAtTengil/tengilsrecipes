import React, { Component } from "react";
import RecipeService from "../service/RecipeService";

class RecipeInformation extends Component {
    state = { singleRecipe: [], instructions: [], ingrediens: [] };

    async componentDidMount() {
        this.searchRecipe();
    }

    /**
     * @param takes the ID from current viewed object
     * recives instructions and ingredients
     */

    searchRecipe = async () => {
        let urlElement = window.location.pathname.split("/");
        urlElement = urlElement[2];
        const recipe = await RecipeService.getRecipeById(urlElement);

        if (recipe.analyzedInstructions[0] !== undefined) {
            const instruct = recipe.analyzedInstructions[0].steps;
            this.setState({ instructions: instruct });
        } else {
        }

        const ingredient = recipe.extendedIngredients;
        this.setState({
            singleRecipe: recipe,
            ingrediens: ingredient,
        });
    };

    render() {
        return (
            <div className="single-container">
                <div className="single-recipe">
                    <div className="single-recipe-img">
                        {this.state.singleRecipe.image === undefined ? <img src="https://www.corepixel.se/pub_images/original/No-image-available.jpg" alt="example" style={{ width: "350px", height: "300px" }} /> : <img src={this.state.singleRecipe.image} alt="not found" />}
                    </div>
                    <div className="single-recipe-container">
                        <h1>{this.state.singleRecipe.title}</h1>
                        <div className="single-recipe-info-container">
                            <div className="single-recipe-info">
                                <p>Vegan: {!this.state.singleRecipe.vegan ? "No" : "Yes"}</p>
                                <p>Vegetarian: {!this.state.singleRecipe.vegetarian ? "No" : "Yes"}</p>
                                <p>Gluten-free: {!this.state.singleRecipe.glutenFree ? "No" : "Yes"}</p>
                            </div>
                            <div className="single-recipe-info">
                                <p>Likes: {this.state.singleRecipe.aggregateLikes}</p>
                                <p>Minutes: {this.state.singleRecipe.readyInMinutes}</p>
                            </div>
                        </div>
                        <div className="single-recipe-link">
                            <a href={this.state.singleRecipe.sourceUrl} target="_blanc">
                                See full recipe!
                            </a>
                        </div>
                    </div>
                </div>
                <div className="single-info-box">
                    <div>
                        <h2>Ingredients</h2>
                        {this.state.ingrediens &&
                            this.state.ingrediens.map((ingredient, index) => (
                                <div className="single-ingredient" key={index}>
                                    <ul>
                                        <li>{ingredient.original}</li>
                                    </ul>
                                </div>
                            ))}
                    </div>
                    <div className="single-instruction">
                        {this.state.instructions.length === 0 ? (
                            <div>
                                <h2>No instructions found</h2>
                            </div>
                        ) : (
                            <div>
                                <h2>Instructions</h2>
                            </div>
                        )}
                        {this.state.instructions.length !== 0 ? (
                            this.state.instructions &&
                            this.state.instructions.map((instruction, index) => (
                                <div className="single-step" key={index}>
                                    <p id="number">{index + 1}</p>
                                    <p>: {instruction.step}</p>
                                </div>
                            ))
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
export default RecipeInformation;
