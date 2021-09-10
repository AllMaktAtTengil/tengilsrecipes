import React from "react";
import { Component } from "react";
import "../App.css";
import Searchbar from "../component/Searchbar";

class Header extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="top-logo">
            <h2>Tengil's</h2>
            <h1>Recipes</h1>
          </div>
          <div className="menu-wrapper">
            <nav className="menu-nav">
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#recipes">Recipes</a>
                </li>
                <li>
                  <a href="#guides">Guides</a>
                </li>
                <li>
                  <a href="#subscribe">Subscribe</a>
                </li>
                <li className="search-box">
                  <Searchbar multiParentFetch={this.props.parentFetch} />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
