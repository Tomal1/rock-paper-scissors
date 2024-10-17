import React from "react";
import { Navigate, Link } from "react-router-dom";

class Ending extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div>
                <h1> hello </h1>

               <button> <Link to="/rock-paper-scissors/">back to home</Link></button>


        </div>
    )
    

  }
}

export default Ending;
