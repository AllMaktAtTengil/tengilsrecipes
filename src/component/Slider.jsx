import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

class Slider extends Component {
  render() {
    let recipes = this.props.data;
    return (
      <div className="slider-container">
        <Splide
          options={{
            type: "loop",
            rewind: true,
            width: "100%",
            pagination: false,
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
          {!recipes.results
            ? recipes.recipes &&
              recipes.recipes.slice(6, 12).map((recipe, index) => (
                <SplideSlide key={index}>
                  <div>
                    <div className={`rand-recipes`}>
                      <Link to={`/recipe-information/${recipe.id}`}>
                        <h1>{recipe.title}</h1>
                        {recipe.image === undefined ? (
                          <img
                            src="https://www.corepixel.se/pub_images/original/No-image-available.jpg"
                            alt="example"
                            style={{ width: "230px", height: "230px" }}
                          />
                        ) : (
                          <img src={recipe.image} alt="example" />
                        )}
                      </Link>
                      <div className="dish-info">
                        <p>{recipe.readyInMinutes}Min</p>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              ))
            : recipes.results &&
              recipes.results.slice(0, 10).map((recipe, index) => (
                <SplideSlide key={index}>
                  <div>
                    <div className={`rand-recipes`}>
                      <Link to={`/recipe-information/${recipe.id}`}>
                        <h1>{recipe.title}</h1>
                        {recipe.image === undefined ? (
                          <img
                            src="https://www.corepixel.se/pub_images/original/No-image-available.jpg"
                            alt="example"
                            style={{ width: "230px", height: "230px" }}
                          />
                        ) : (
                          <img src={recipe.image} alt="example" />
                        )}
                      </Link>
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
