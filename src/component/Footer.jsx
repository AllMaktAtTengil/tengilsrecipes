import React from "react";
import { Component } from "react";
import "../App.css";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

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
                                <h6>Customer Service</h6>
                                <hr />
                                <span className="footer-social-icon"></span>{" "}
                                <a href="#FAQ" className="footer-link">
                                    Frequently Asked Questions
                                </a>
                                <br />
                                <span className="footer-social-icon"></span>{" "}
                                <a href="#contactus" className="footer-link">
                                    Contact Us
                                </a>
                            </div>
                            <div className="grid-3">
                                <h6>Socialize with us</h6>
                                <hr />
                                <span className="footer-social-icon"></span> <FaFacebookF />
                                <a href="#facebook" className="footer-link">
                                    Facebook
                                </a>
                                <br />
                                <span className="footer-social-icon"></span> <AiOutlineInstagram />
                                <a href="#instagram" className="footer-link">
                                    Instagram
                                </a>
                                <br />
                                <span className="footer-social-icon"></span> <FaTwitter />
                                <a href="#twitter" className="footer-link">
                                    Twitter
                                </a>
                                <br />
                            </div>
                            <div className="col-auto float-right"></div>
                        </div>
                    </div>
                    <div className="footer-copyright">&copy; &reg; 2021 Copyright. All rights reserved.</div>
                </div>
            </div>
        );
    }
}

export default Footer;
