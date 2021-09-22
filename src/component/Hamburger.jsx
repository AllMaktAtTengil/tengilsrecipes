import React, { Component } from "react";
import { elastic as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

class Hamburger extends Component {
    render() {
        return (
            <div id="mobile-wrapper">
                <Menu pageWrapId={"page-wrap"} outerContainerId={"mobile-wrapper"} disableAutoFocus customBurgerIcon={<img className="burger-icon" src="https://icon-library.com/images/free-hamburger-menu-icon/free-hamburger-menu-icon-3.jpg" alt="" />} right>
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
                                <Link to={`/raiting/meta-score`}>
                                    <p>Best raiting</p>
                                </Link>
                            </p>
                        </div>
                        <div className="mobile-nav">
                            <p>
                                <Link to={`/raiting/popularity`}>
                                    <p>Popular</p>
                                </Link>
                            </p>
                        </div>
                        <div className="mobile-nav">
                            <p>
                                <Link to={`/dw`}>
                                    <p>DW's Favorites</p>
                                </Link>
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
