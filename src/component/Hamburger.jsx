import React, { Component } from "react";
import { elastic as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

class Hamburger extends Component {
  render() {
    return (
      <div id="mobile-wrapper">
        <Menu
          pageWrapId={"page-wrap"}
          outerContainerId={"mobile-wrapper"}
          disableAutoFocus
          customBurgerIcon={
            <img
              className="burger-icon"
              src="https://icon-library.com/images/free-hamburger-menu-icon/free-hamburger-menu-icon-3.jpg"
              alt=""
            />
          }
          right
        >
          <main id="page-wrap" className="page-wrap">
            <div className="mobile-nav">
              <a id="home" className="menu-item" href="/">
                Home
              </a>
            </div>
            <div className="mobile-nav">
              <Link to={`/raiting/meta-score`}>
                <p>Best raiting</p>
              </Link>
            </div>
            <div className="mobile-nav">
              <Link to={`/raiting/popularity`}>
                <p>Popular</p>
              </Link>
            </div>
            <div className="mobile-nav">
              <Link to={`/dw`}>
                <p>DW's Favorites</p>
              </Link>
            </div>
            <div className="mobile-nav">
              <a id="contact" className="menu-item" href="/contact">
                Contact us
              </a>
            </div>
          </main>
        </Menu>
      </div>
    );
  }
}
export default Hamburger;
