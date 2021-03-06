import React from "react";
import { Component } from "react";
import "../App.css";
import Searchbar from "../component/Searchbar";
import Dropdown from "./Dropdown";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="top-logo">
            <a href="http://localhost:3000/">
              <h2>Tengil's</h2>
              <h1>Recipes</h1>
            </a>
          </div>
          <Hamburger />
          <div className="menu-wrapper">
            <nav className="menu-nav">
              <ul className="nav-items">
                <li>
                  <a href="http://localhost:3000/" target="_self">
                    Home
                  </a>
                </li>
                <li>
                  <Dropdown />
                </li>
                <li>
                  <Link to={`/contact`}>
                    <p>Contact</p>
                  </Link>
                </li>
                <li>
                  <a href="#subscribe-div">Subscribe</a>
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
