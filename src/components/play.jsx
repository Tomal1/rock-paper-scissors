import React from "react";
import "../assets/style/play.css"

class Play extends React.Component {
  constructor() {
    super();
    (this.rock = "./images/rock-removebg-preview.png"),
      (this.paper = "./images/paper-removebg-preview.png"),
      (this.scissor = "./images/scissors-removebg-preview.png");

    this.state = {
      src: "",
      compSelection: "",
      display: "show",
    };
  }

  mySelection = (e) => {
    this.compSelection(e);
    this.renderBTN();

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
  };

  compSelection = () => {
    let array = [this.rock, this.paper, this.scissor];

    for (let i = 0; i < 3; i++) {
      let random = array[Math.floor(Math.random() * array.length)];

      this.setState({
        compSelection: random,
      });
    }
  };

  renderBTN = () => {
    this.setState({
      display: "none",
    });
  };

  decision = (comp, my) => {
    // react hooks cannot be used indise class components

    console.log(comp, my);
    let result;

    comp === my
      ? (result = "/rock-paper-scissors/Draw")
      : comp === this.rock && my === this.scissor
      ? (result = "/rock-paper-scissors/Lose")
      : comp === this.paper && my === this.rock
      ? (result = "/rock-paper-scissors/Lose")
      : comp === this.scissor && my === this.paper
      ? (result = "/rock-paper-scissors/Lose")
      : (result = "/rock-paper-scissors/Win");

    setTimeout(() => {
      return (window.location = result);
    }, 3000);
  };

  render() {
    let btnArr = [this.rock, this.paper, this.scissor];
    const btn = btnArr.map((x, i) => <img src={x} className="choices" />);

    let c = this.state.compSelection;
    let m = this.state.src;

    this.state.display === "none" && this.decision(c, m);

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

        <div className="choice" style={{ display: this.state.display }}>
          <div className="choiceCon" onClick={this.mySelection}>
            {btn}
          </div>
        </div>
      </div>
    );
  }
}

export default Play;
