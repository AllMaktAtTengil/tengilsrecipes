import React, { Component } from "react";
import "../App.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

class Slider extends Component {
    render() {
        let recipes = this.props.data;
        console.log(recipes);
        return (
            <div>
                <Splide
                    options={{
                        rewind: true,
                        width: "100%",
                        gap: "1rem",
                        perPage: 3,
                        breakpoints: {
                            750: {
                                perPage: 1,
                            },
                            1400: {
                                perPage: 2,
                            },
                        },
                    }}
                >
                    {recipes.recipes &&
                        recipes.recipes.slice(6, 12).map((recipe, index) => (
                            <SplideSlide key={index}>
                                <div key={index}>
                                    <div className="rand-recipes" id={`recipe-box-${index}`}>
                                        <h1>{recipe.title}</h1>
                                        <img src={recipe.image} alt="example" />
                                        <div className="dish-info">
                                            <p>{recipe.readyInMinutes}Min</p>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                </Splide>
            </div>
        );
    }
}

export default Slider;
