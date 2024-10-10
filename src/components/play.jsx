import React from "react";
import "../assets/style/play.css";
import { Link } from "react-router-dom";

class Play extends React.Component {
  constructor() {
    super();
    (this.rock = "./images/rock-removebg-preview.png"),
      (this.paper = "./images/paper-removebg-preview.png"),
      (this.scissor = "./images/scissors-removebg-preview.png");

    this.state = {
      src: "",
      compSelection: "",
    };

    this.compSelection = this.compSelection.bind(this);
    this.mySelection = this.mySelection.bind(this);
  }

  mySelection(e) {
    this.decision();
    this.compSelection(e);

    let result = "";

    e.target.currentSrc ===
    "http://localhost:5173/rock-paper-scissors/images/scissors-removebg-preview.png"
      ? (result = result + this.scissor)
      : e.target.currentSrc ===
        "http://localhost:5173/rock-paper-scissors/images/rock-removebg-preview.png"
      ? (result = result + this.rock)
      : (result = result + this.paper);

    this.setState({
      src: result,
    });
  }

  compSelection() {
    let array = [this.rock, this.paper, this.scissor];

    for (let i = 0; i < 3; i++) {
      let random = array[Math.floor(Math.random() * array.length)];

      this.setState({
        compSelection: random,
      });
    }
  }

  render() {
    let btnArr = [this.rock, this.paper, this.scissor];
    const btn = btnArr.map((x, i) => <img src={x} className="choices" />);

    if (this.state.compSelection === this.state.src) {
      console.log("draw");
    } else if (
      this.state.compSelection === this.rock &&
      this.state.src === this.scissor
    ) {
      console.log("you lose");
    } else if (
      this.state.compSelection === this.paper &&
      this.state.src === this.rock
    ) {
      console.log("you lose");
    } else if (
      this.state.compSelection === this.scissor &&
      this.state.src === this.paper
    ) {
      console.log("you lose");
    } else {
      console.log("you win");
    }

    return (
      <div id="playCon">
        <div className="hud">
          <div className="compSelection">
            {this.state.src === "" ? (
              ""
            ) : (
              <img
                src={this.state.compSelection}
                className="compSelectionOnHUD"
              />
            )}
          </div>
          <div className="mySelection">
            {this.state.src === "" ? (
              ""
            ) : (
              <img src={this.state.src} className="mySelectionOnHUD" />
            )}
          </div>
        </div>

        <div className="choice">
          <div className="choiceCon" onClick={this.mySelection}>
            {btn}
          </div>
        </div>
      </div>
    );
  }
}

export default Play;
