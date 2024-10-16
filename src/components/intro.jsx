import React from "react";
import "../assets/style/intro.css";

//this link is used to redirect to other pages
import { Link } from "react-router-dom";

class Intro extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="intro">
        <div className="titleCon">
          <p>ROCK PAPER & SCISSORS</p>
        </div>
        <div className="animiCon">
          <div className="introThumb">
            <img
              src="./images/rock-removebg-preview.png"
              className="hand introRock"
            />
          </div>
          <div className="introThumb">
            <img
              src="./images/paper-removebg-preview.png"
              className="hand introPaper"
            />
          </div>
          <div className="introThumb">
            <img
              src="./images/scissors-removebg-preview.png"
              className="hand introScissor"
            />
          </div>
        </div>

        <div className="controlCon">
          <Link to="/rock-paper-scissors/Play">
            <button>PLAY</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Intro;
