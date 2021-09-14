import React, { Component } from "react";
import "../App.css";

class Searchbar extends Component {
  state = { value: "" };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    this.props.multiParentFetch(this.state.value);
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="search-field"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Search"
        ></input>
      </form>
    );
  }
}
export default Searchbar;
