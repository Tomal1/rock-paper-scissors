import React from "react";
import "../assets/style/play.css";

class Play extends React.Component {
  constructor() {
    super();
    (this.rock = "./images/rock-removebg-preview.png"),
      (this.paper = "./images/paper-removebg-preview.png"),
      (this.scissor = "./images/scissors-removebg-preview.png");

    this.state = {
      src: "",
      compSelection: "",
      compSrc: "",
    };

    this.computerRender = this.computerRender.bind(this);
    this.compSelection = this.compSelection.bind(this);
    this.mySelection = this.mySelection.bind(this);
  }

  mySelection(e) {
    this.compSelection();

    if (
      e.target.currentSrc ===
      "http://localhost:5173/rock-paper-scissors/images/scissors-removebg-preview.png"
    ) {
      this.setState({
        src: this.scissor,
      });
    } else if (
      e.target.currentSrc ===
      "http://localhost:5173/rock-paper-scissors/images/rock-removebg-preview.png"
    ) {
      this.setState({
        src: this.rock,
      });
    } else {
      this.setState({
        src: this.paper,
      });
    }
  }

  compSelection() {
    let array = ["rock", "paper", "scissor"];

    for (let i = 0; i < 3; i++) {
      let random = array[Math.floor(Math.random() * array.length)];
      this.setState({
        compSelection: random,
      });
      this.computerRender();
    }
  }

  computerRender() {
    let result = "";

    if (this.state.compSelection === "rock") {
      result = result + this.rock;
    } else if (this.state.compSelection === "paper") {
      result = result + this.paper;
    } else {
      result = result + this.scissor;
    }

    this.setState({
      compSrc: result,
    });
  }

  render() {
    console.log(this.state.compSrc);

    let btnArr = [this.rock, this.paper, this.scissor];

    const btn = btnArr.map((x, i) => <img src={x} className="choices" />);

    return (
      <div id="playCon">
        <div className="hud">
          <div className="compSelection">
            <img
              src={this.state.compSrc}
              className="compSelectionOnHUD"
              alt="this is the comp choice"
            />
          </div>
          <div className="mySelection">
            <img
              src={this.state.src}
              className="mySelectionOnHUD"
              alt="Choose one of the 3 options"
            />
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
