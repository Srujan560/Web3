import React from "react";
import logo from '../images/418Y_web3_music_logo.png'
import  "../CSS/home.css";
// import {style} from 'home.css'

function home(){
    return (
        <div >
            <center>
                <h1 style={{fontSize: "4em"}}>Home</h1>
                <div  class="imageLogo">
                <img src={logo} alt="" max-width="100%"/>
                </div>
            </center> 
            
        </div>
        )
}
export default home; 
