import React, { Component } from "react";
import { elastic as Menu } from "react-burger-menu";

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
              <p>
                <a id="home" className="menu-item" href="/">
                  Home
                </a>
              </p>
            </div>
            <div className="mobile-nav">
              <p>
                <a id="recipe" className="menu-item" href="/recipe">
                  Recipes
                </a>
              </p>
            </div>
            <div className="mobile-nav">
              <p>
                <a id="guide" className="menu-item" href="/guide">
                  Guides
                </a>
              </p>
            </div>
            <div className="mobile-nav">
              <p>
                <a id="contact" className="menu-item" href="/contact">
                  Contact us
                </a>
              </p>
            </div>
          </main>
        </Menu>
      </div>
    );
  }
}
export default Hamburger;
