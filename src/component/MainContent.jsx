import React from "react";
import { Component } from "react";
import "../App.css";
import { AiFillLike } from "react-icons/ai";

class MainContent extends Component {
    state = { recipes: [] };

    getRecipes() {
        const recipes = this.props.data;
        this.setState({ recipes: recipes });
        console.log(recipes);
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
                        <div className="main-grid">
                            {recipes.recipes &&
                                recipes.recipes.map((recipes, index) => (
                                    <div key={index}>
                                        <div className="rand-recipes" id={`recipe-box-${index}`}>
                                            <h1>{recipes.title}</h1>
                                            <img src={recipes.image} alt="example" />
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
                    </div>
                </div>
            </>
        );
    }
}

export default MainContent;
