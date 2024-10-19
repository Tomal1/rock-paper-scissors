import React from "react";
import "../assets/style/ending.css";
import Intro from "./intro";

class Win extends React.Component {
  backToHome = () => {
    setTimeout(() => {
      return (window.location.href = "/rock-paper-scissors/");
    }, 3000);
  };

  render() {
    return (
      <div className="outcomeCon">
        <p>{this.backToHome()}You Win</p>
      </div>
    );
  }
}

export default Win;
