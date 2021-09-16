import React, { Component } from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";
class Subscribe extends Component {
    render() {
        return (
            <div className="Subscribe-divider">
                <div className="subsribe-box">
                    <h1>
                        Follow <h3>US</h3>
                    </h1>{" "}
                    <a href="#Facebook" className="divider-icons">
                        <FaFacebook />
                    </a>
                    <a href="#Pinterest" className="divider-icons">
                        <GrPinterest />
                    </a>
                    <a href="#Twitter" className="divider-icons">
                        <AiFillTwitterCircle />
                    </a>
                    <a href="https://github.com/AllMaktAtTengil/tengilsrecipes" target="_blank" className="divider-icons">
                        <AiFillGithub />
                    </a>
                </div>
                <div className="subsribe-box">
                    <h2>Subscribe to our newsletter</h2>
                    <form className="subscribe-form" onSubmit="">
                        <input className="subsribe-field" type="text" placeholder="Email"></input>
                        <button className="subscribe-btn" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
export default Subscribe;
