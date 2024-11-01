import React from "react";
import "../assets/style/ending.css";

class Lose extends React.Component {
  backToHome = () => {
    setTimeout(() => {
      return (window.location = "/rock-paper-scissors/");
    }, 3000);
  };

  render() {
    return (
      <div className="outcomeCon">
        <p>{this.backToHome()}You Lose</p>
      </div>
    );
  }
}

export default Lose;
