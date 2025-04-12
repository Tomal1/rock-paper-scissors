import React from "react";
import "../assets/style/ending.css";

import { useNavigate } from "react-router-dom";

const Lose = () => {
  const backToHome = () => {
    let navigate = useNavigate();
    setTimeout(() => {
      return navigate("/rock-paper-scissors/");
    }, 3000);
  };

  return (
    <div className="outcomeCon">
      <p>{backToHome()}You Lose</p>
    </div>
  );
};

export default Lose;
