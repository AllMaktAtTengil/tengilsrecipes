import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Dropdown extends Component {
    container = React.createRef();
    state = { open: false };

    /**
     * checks if the dropdown menu is open
     */

    handleButtonClick = () => {
        this.setState((state) => {
            return {
                open: !state.open,
            };
        });
    };

    /**
     * Closes the dropdown if pressed outside.
     * @param {*} event
     */

    handleClickOutside = (event) => {
        if (this.container.current && !this.container.current.contains(event.target)) {
            this.setState({
                open: false,
            });
        }
    };

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    render() {
        return (
            <>
                <div className="dropdown-container" ref={this.container}>
                    <button type="button" className="dropdown-btn" onMouseOver={this.handleButtonClick}>
                        Recipes
                    </button>
                    {this.state.open && (
                        <div className="dropdown">
                            <ul>
                                <li>
                                    <Link to={`/raiting/meta-score`}>
                                        <p>Best raiting</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/raiting/popularity`}>
                                        <p>Popular</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/dw`}>
                                        <p>DW's Favorites</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </>
        );
    }
}
export default Dropdown;
