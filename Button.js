import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay,faBackward,faForward} from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

function Button(){
    return (
        <div>
            <h1>Player</h1>
            <audio src="WIN_20220116_23_48_16_Pro.mp4"></audio>
            <h3>Artist Name</h3>
            <button className="skip">
                <FontAwesomeIcon icon={faBackward}/>
            </button>
            <button className="btn">
                <FontAwesomeIcon icon={faPlay}/>
             </button>   
            <button className="next">
                <FontAwesomeIcon icon={faForward}/>
            </button>
            <div>0:0</div>
            <div>
                <input type="range"/>
            </div>
            <div>2:49</div>
        </div>
        )
};
export default Button; 