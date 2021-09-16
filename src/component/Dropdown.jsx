import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Dropdown extends Component {
  container = React.createRef();
  state = { open: false };

  handleButtonClick = () => {
    this.setState((state) => {
      return {
        open: !state.open,
      };
    });
  };

  handleClickOutside = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        open: false,
      });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    return (
      <>
        <div className="dropdown-container" ref={this.container}>
          <button
            type="button"
            className="dropdown-btn"
            onMouseOver={this.handleButtonClick}
          >
            Recipes
          </button>
          {this.state.open && (
            <div className="dropdown">
              <ul>
                <li>
                  <Link to="/best-rating">
                    <a href="#bestRating">Best rating</a>
                  </Link>
                </li>
                <li>
                  <a href="#Popular">Popular</a>
                </li>
                <li>
                  <a href="#Dw">DW's Favorites</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </>
    );
  }
}
export default Dropdown;
