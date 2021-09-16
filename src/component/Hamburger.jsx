import React, { Component } from "react";
import { elastic as Menu } from "react-burger-menu";
import { GiHamburgerMenu } from "react-icons/gi";

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
            />
          }
          right
        >
          <main id="page-wrap" className="page-wrap">
            <p>
              <a id="home" className="menu-item" href="/">
                Home
              </a>
            </p>
            <p>
              <a id="about" className="menu-item" href="/about">
                About
              </a>
            </p>
            <p>
              <a id="contact" className="menu-item" href="/contact">
                Contact us
              </a>
            </p>
            <p>
              <a id="info" className="menu-item" href="/information">
                How it works
              </a>
            </p>
          </main>
        </Menu>
      </div>
    );
  }
}
export default Hamburger;
