import React, { Component } from "react";
import RecipeService from "../service/RecipeService";

class JokeContainer extends Component {
    state = { randomJoke: undefined };

    async componentDidMount() {
        this.getJoke();
    }

    getJoke = async () => {
        const joke = await RecipeService.getRandomJoke();
        console.log(joke);
        this.setState({
            randomJoke: joke,
        });
    };

    render() {
        console.log(this.state.randomJoke);
        return (
            <div className="joke-container">
                <h1>Let's Start off with a joke</h1>
                <h2>"{this.state.randomJoke && this.state.randomJoke.text}"</h2>
            </div>
        );
    }
}

export default JokeContainer;
