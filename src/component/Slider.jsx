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
                <div class="splide">
                    <div class="splide__track">
                        <ul class="slide__list">
                            <li class="splide__slide"></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slider;
