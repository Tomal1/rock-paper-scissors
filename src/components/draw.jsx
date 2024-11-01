import React from "react";
import "../assets/style/ending.css";
import Play from "./play";

class Draw extends Play {
  backToHome = () => {
    setTimeout(() => {
      return (window.location = "/rock-paper-scissors/");
    }, 3000);
  };

  render() {
    return (
      <div className="outcomeCon">
        <p>{this.backToHome()}Draw</p>
      </div>
    );
  }
}

export default Draw;
