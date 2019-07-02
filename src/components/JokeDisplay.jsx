import React, { Component } from "react";

class JokeDisplay extends Component {
  constructor(props) {
    super(props);
    this.END_POINT =
      "http://api.icndb.com/jokes/random/1http://api.icndb.com/jokes/random/";
    this.state = {
      loading: true,
      posts: null
    };
  }

  getRandomJoke = e => {
    fetch(this.END_POINT)
      .then(res => res.json())
      .then(data => {
        this.setState({ posts: data.value[0].joke, loading: false });
        this.replaceFunc();
        this.getRandomImg();
      });
  };

  getRandomImg = () => {
    var x = Math.floor(Math.random() * 6 + 1);
    document.getElementById("cnImage").innerHTML = `
      <img id="cnImg" src='images/cn${x}.jpg' />
    `;
  };

  replaceFunc = () => {
    var str = this.state.posts;
    var res = str.replace(/&quot;/g, '"', function(x) {
      return x;
    });
    document.getElementById("joke-text").innerHTML = res;
  };

  componentDidMount() {
    this.getRandomJoke();
  }

  render() {
    return (
      <div className="joke-box">
        {this.state.loading || !this.state.posts ? (
          <div>Loading</div>
        ) : (
          <div id="joke-text" className="joke-text">
            {this.state.posts}
          </div>
        )}
        <button className="button" onClick={this.getRandomJoke}>
          Chuck up another?
        </button>
      </div>
    );
  }
}

export default JokeDisplay;
