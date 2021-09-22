import React, { Component } from "react";
import RecipeService from "../service/RecipeService";
import { AiFillLike } from "react-icons/ai";
import { GiWheat } from "react-icons/gi";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import Subscribe from "./Subscribe";

class metaScore extends Component {
    state = { recipes: undefined, url: "" };

    async componentDidMount() {
        this.getCustomRecipe();
    }

    componentDidUpdate() {
        let urlElement = window.location.pathname.split("/");
        urlElement = urlElement[2];
        if (urlElement !== this.state.url) {
            this.getCustomRecipe();
            window.scrollTo(0, 0);
        }
    }

    /**
     * takes the 3rd string from the url and assignes to let urlElement
     * @param : see above
     * recives list of object(most popular or best rated)
     *
     */

    getCustomRecipe = async () => {
        let urlElement = window.location.pathname.split("/");
        urlElement = urlElement[2];
        const recipes = await RecipeService.getRecipeByCustom(urlElement);
        this.setState({
            recipes: recipes,
            url: urlElement,
        });
    };

    render() {
        const { recipes } = this.state;
        return (
            <>
                <div className="maincontent">
                    <div className="container">
                        <div className="main-grid">
                            {recipes &&
                                recipes.results.map((recipe, index) => (
                                    <div key={index}>
                                        <div className="rand-recipes" id={`recipe-box-${index}`}>
                                            <Link to={`/recipe-information/${recipe.id}`}>
                                                <div className="rand-recipes-title">
                                                    <h1>{recipe.title}</h1>
                                                    {recipe.glutenFree === true ? <GiWheat style={{ color: "black", marginLeft: "10px" }} /> : <p></p>}
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
                        <div className="slider">{this.state.recipes && <Slider data={this.state.recipes} />}</div>
                    </div>
                </div>
            </>
        );
    }
}
export default metaScore;
