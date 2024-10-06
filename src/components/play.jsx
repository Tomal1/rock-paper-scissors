import React from "react";
import "../assets/style/play.css"




class Play extends React.Component {
    constructor(){
        super()
    }

    render(){
        let rock = "./images/rock-removebg-preview.png"
        let paper = "./images/paper-removebg-preview.png"
        let scissor = "./images/scissors-removebg-preview.png"

        let btnArr = [rock, paper, scissor]

        const btn = btnArr.map(o=> <img src={o} className="choices"/>)

        return(
            <div id="playCon">
                <div className="hud"></div>
                <div className="choice"><div className="choiceCon">{btn}</div></div>
            </div>
        )
    }
}

export default Play