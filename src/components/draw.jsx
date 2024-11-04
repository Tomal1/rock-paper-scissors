import React from "react";
import "../assets/style/ending.css";

import { useNavigate } from "react-router-dom";

const Draw = () => {
  const backToHome = () => {
    let navigate = useNavigate();
    setTimeout(() => {
      return navigate("/rock-paper-scissors/");
    }, 3000);
  };

  return (
    <div className="outcomeCon">
      <p>{backToHome()}Draw</p>
    </div>
  );
};

export default Draw;
