import React from "react";
import "../assets/style/intro.css";

//this link is used to redirect to other pages
import { useNavigate } from "react-router-dom";

const Intro = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    return navigate("/rock-paper-scissors/Play");
  };

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
        <button onClick={() => handleClick()}>PLAY</button>
      </div>
    </div>
  );
};

export default Intro;
