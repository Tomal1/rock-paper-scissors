
import React from "react"
import "../assets/style/intro.css"



class Intro extends React.Component {

    constructor(){
        super()
    }


    render(){
        return(
            <div id="intro">
                <div className="titleCon">
                    <h1>ROCK PAPER & SCISSORS</h1>
                </div>
                    <div className="animiCon">
                        <div className="introThumb">
                            <img src="./images/rock-removebg-preview.png" className="hand introRock"/>
                        </div>
                        <div className="introThumb">
                            <img src="./images/paper-removebg-preview.png" className="hand introPaper"/>
                        </div>
                        <div className="introThumb">
                            <img src="./images/scissors-removebg-preview.png" className="hand introScissor"/> 
                        </div>
                    </div>

                    <div className="controlCon">
                        <button>PLAY</button>
                    </div>
            </div>
        )
    }


}


export default Intro
