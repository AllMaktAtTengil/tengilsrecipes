import React, { Component } from "react";
import { FaFacebook } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";

class Subscribe extends Component {
  render() {
    return (
      <div className="Subscribe-divider">
        <div>
          <h1>Follow us</h1>{" "}
          <a href="#instagram" className="diver-icons">
            <FaFacebook />
          </a>
          <a href="#instagram" className="diver-icons">
            <AiOutlineInstagram />
          </a>
          <a href="#instagram" className="diver-icons">
            <AiFillTwitterCircle />
          </a>
          <a href="#instagram" className="diver-icons">
            <AiFillGithub />
          </a>
        </div>
        <div>
          <h1>DO SOMETHING HERE!</h1>
        </div>
      </div>
    );
  }
}
export default Subscribe;
