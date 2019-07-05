import React, { Component } from "react";
import JokeDisplay from "./components/JokeDisplay";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div id="joke-box">
          <div id="cnImage" alt="Chuck Norris" />
          <JokeDisplay id="joke-text" />
        </div>
      </div>
    );
  }
}

export default App;
