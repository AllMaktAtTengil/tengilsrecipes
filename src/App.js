import React, { Component } from "react";
import "./App.css";
import Header from "./component/Header.jsx";
import MainContent from "./component/MainContent.jsx";
import Footer from "./component/Footer.jsx";
import RecipeService from "./service/RecipeService";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RecipeInformation from "./component/RecipeInformation";

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

  getCustomRecipe = async (recipe) => {
    const recipes = await RecipeService.getRecipeByPopularity(recipe);
    this.setState({
      recipes: recipes,
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header parentFetch={this.searchRecipe} />

          <Switch >
            <Route path="/recipe-information/:1" component={RecipeInformation}></Route>
            <Route path="/"> {this.state.recipes && <MainContent data={this.state.recipes} />} </Route>
          </Switch>
          <Footer />

        </div>
      </Router>
    );
  }
}
