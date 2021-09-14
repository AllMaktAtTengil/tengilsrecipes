import React, { Component } from "react";
import "../App.css";

class Slider extends Component {
  state = { recipes: [] };

  getRecipes() {
    const recipes = this.props.data;
    this.setState({ recipes: recipes });
  }

  componentDidMount() {
    this.getRecipes();
  }

  render() {
    return (
      <div>
        <div className="splide">
          <div className="splide__track">
            <ul className="slide__list">
              <li className="splide__slide"></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
