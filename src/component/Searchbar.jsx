import React, { Component } from "react";
import RecipeService from "../service/RecipeService";

class Searchbar extends Component {
  state = { value: "", recipes: undefined };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const recipes = await RecipeService.getRecipeByIndex(this.state.value);
    this.setState({ recipes: recipes });
    e.preventDefault();

    //this.props.multiParentFetch(this.state.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="search-field"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Search recipe"
        ></input>
      </form>
    );
  }
}
export default Searchbar;
