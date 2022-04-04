import React from "react";
import logo from '../images/418Y_web3_music_logo.png'
import styles from "../CSS/home.css";
// import {style} from 'home.css'

function home(){
    return (
            <div style={{height:"100vh", width:"100vw", backgroundColor:"#1b2838"}}>
                <center>
                    <h1 style={{fontSize: "4vw", color:"#e0d9cf"}}>Home</h1>
                        <div  class="imageLogo" style={{width: "15vw"}}>
                            <img src={logo} alt="" style={{width: "15vw"}} max-width="100%"/>
                        </div>
                </center> 
                
            </div>
        
        )
}
export default home; 
