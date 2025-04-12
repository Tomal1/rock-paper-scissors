import React from "react";
import "../assets/style/ending.css";

import { useNavigate } from "react-router-dom";

const Win = (props) => {
  console.log(props)
  const backToHome = () => {
    let navigate = useNavigate();
    setTimeout(() => {
      return navigate("/rock-paper-scissors/");
    }, 3000);
  };

  return (
    <div className="outcomeCon">
      <p>{backToHome()}You Win</p>
    </div>
  );
};

export default Win;
