import { Component } from "react";
import "./App.css";
import Header from "./component/Header.jsx";
import MainContent from "./component/MainContent.jsx";
import Footer from "./component/Footer.jsx";

export default class App extends Component {
    render() {
        return (
            <>
                <div className="App">
                    <Header />
                    <MainContent />
                    <Footer />
                </div>
            </>
        );
    }
}
