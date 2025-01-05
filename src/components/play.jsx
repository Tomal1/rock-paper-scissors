import React from "react";
import { useState } from "react";
import "../assets/style/play.css";
import { useNavigate } from "react-router-dom";

const Play = () => {
  let navigate = useNavigate("");
  const rock = "./images/rock-removebg-preview.png";
  const paper = "./images/paper-removebg-preview.png";
  const scissor = "./images/scissors-removebg-preview.png";

  const [display, setDisplay] = useState("show");
  const [compSel, setCompSel] = useState("");
  const [src, setSrc] = useState("");

  const mySelection = (e) => {
    compSelection();
    renderBTN();

    let result;

    e.target.currentSrc ===
    "http://localhost:5173/rock-paper-scissors/images/scissors-removebg-preview.png"
      ? (result = scissor)
      : e.target.currentSrc ===
        "http://localhost:5173/rock-paper-scissors/images/rock-removebg-preview.png"
      ? (result = rock)
      : (result = paper);

    return setSrc(result);
  };
  const compSelection = () => {
    let array = [rock, paper, scissor];
    for (let i = 0; i < 3; i++) {
      let random = array[Math.floor(Math.random() * array.length)];
      return setCompSel(random);
    }
  };

  const renderBTN = () => {
    return setDisplay("none");
  };

  const decision = (comp, my) => {
    // react hooks cannot be used indise class components
    let result;

    comp === my
      ? (result = "/rock-paper-scissors/Draw")
      : comp === rock && my === scissor
      ? (result = "/rock-paper-scissors/Lose")
      : comp === paper && my === rock
      ? (result = "/rock-paper-scissors/Lose")
      : comp === scissor && my === paper
      ? (result = "/rock-paper-scissors/Lose")
      : (result = "/rock-paper-scissors/Win");

    setTimeout(() => {
      navigate(result);
    }, 3000);
  };

  let btnArr = [rock, paper, scissor];
  const btn = btnArr.map((x, i) => (
    <img src={x} className="choices" onClick={mySelection} />
  ));

  return (
    <div id="playCon">
      <div className="hud">
        <div className="compSelection">
          {src === "" ? (
            ""
          ) : (
            <img src={compSel} className="compSelectionOnHUD" />
          )}
        </div>

        <div className="mySelection">
          {src === "" ? "" : <img src={src} className="mySelectionOnHUD" />}
        </div>
      </div>

      <div className="choice" style={{ display: display }}>
        <div className="choiceCon">
          {btn}
          {display === "none" && decision(compSel, src)}
        </div>
      </div>
    </div>
  );
};

export default Play;
