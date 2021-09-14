import React from "react";
import { Component } from "react";
import "../App.css";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram, AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="footer-block">
                        <div className="footer-grid">
                            <div className="grid-1">
                                <h6>Recipes</h6>
                                <hr />
                                <span className="footer-social-icon"></span>{" "}
                                <a href="#Trending" className="footer-link">
                                    Most Popular
                                </a>
                                <br />
                                <span className="footer-social-icon"></span>{" "}
                                <a href="#Toprated" className="footer-link">
                                    Best Rated
                                </a>
                                <br />
                            </div>
                            <div className="grid-2">
                                <h6>About Us</h6>
                                <hr />
                                <span className="footer-social-icon"></span>{" "}
                                <a href="#FAQ" className="footer-link">
                                    Team
                                </a>
                                <br />
                                <span className="footer-social-icon"></span>{" "}
                                <a href="#contactus" className="footer-link">
                                    Our vision
                                </a>
                            </div>
                            <div className="grid-3">
                                <h6>Customer Service</h6>
                                <hr />
                                <span className="footer-social-icon"></span>{" "}
                                <a href="#FAQ" className="footer-link">
                                    Contact Us{" "}
                                </a>
                                <br />
                                <span className="footer-social-icon"></span>{" "}
                                <a href="#contactus" className="footer-link">
                                    Frequently Asked Questions
                                </a>
                            </div>
                        </div>
                        <div className="Social-footer">
                            <h6>Socialize with us</h6>
                            <div className="social-footer-2">
                                <span className="footer-social-icon"></span>
                                <a href="#facebook" className="footer-link">
                                    <FaFacebook />
                                </a>
                                <br />
                                <span className="footer-social-icon"></span>
                                <a href="#instagram" className="footer-link">
                                    <AiOutlineInstagram />
                                </a>
                                <br />
                                <span className="footer-social-icon"></span>
                                <a href="#twitter" className="footer-link">
                                    <AiFillTwitterCircle />
                                </a>
                                <br />
                                <span className="footer-social-icon"></span>
                                <a href="#twitter" className="footer-link">
                                    <AiFillGithub />
                                </a>
                                <br />
                            </div>
                        </div>

                        <div className="footer-copyright">&copy; &reg; 2021 Copyright. All rights reserved.</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
