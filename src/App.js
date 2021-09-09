import { Component } from "react";
import "./App.css";
import Header from "./component/Header.jsx";
import MainContent from "./component/MainContent.jsx";
import Footer from "./component/Footer.jsx";

export default class App extends Component {
  state = { recipes: undefined };

  async componentDidMount() {
    const recipes = await this.getRecipes();
    this.setState({
      recipes: recipes,
    });
    console.log(recipes);
  }

  getRecipes = async () => {
    const apikey = process.env.REACT_APP_APIKEY
    try {
      const apiCall = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=pasta&number=25&apiKey=${apikey}`);
      const data = await apiCall.json();
      return data;
    } catch (error) {
      alert(error);
    }

  }

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
