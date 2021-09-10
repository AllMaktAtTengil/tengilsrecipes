import React, { Component } from "react";

class Searchbar extends Component {
    render() {
        return (
            <form className="search-box" action="#">
                <input className="search-field" type="text" placeholder="search recipe"></input>
            </form>
        );
    }
}
export default Searchbar;
