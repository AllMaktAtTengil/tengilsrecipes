import React from "react";
import { Component } from "react";
import "../App.css";
import tengil from "../Images/tengil1.png";
import Searchbar from "../component/Searchbar";

class Header extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="top-logo">
            <img src={tengil} alt="logo" />
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
                <li>
                  <Searchbar />
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
