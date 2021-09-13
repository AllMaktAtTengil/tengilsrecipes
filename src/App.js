import { Component } from "react";
import "./App.css";
import Header from "./component/Header.jsx";
import MainContent from "./component/MainContent.jsx";
import Footer from "./component/Footer.jsx";
import RecipeService from "./service/RecipeService";

export default class App extends Component {
    state = { recipes: undefined };

    async componentDidMount() {
        const recipes = await RecipeService.getAll();
        this.setState({
            recipes: recipes,
        });
    }

    searchRecipe = async (recipe) => {
        const recipes = await RecipeService.getRecipeByIndex(recipe);
        this.setState({
            recipes: recipes,
        });
    };

    render() {
        return (
            <>
                <div className="App">
                    <Header parentFetch={this.searchRecipe} />
                    {this.state.recipes && <MainContent data={this.state.recipes} />}
                    <Footer />
                </div>
            </>
        );
    }
}
