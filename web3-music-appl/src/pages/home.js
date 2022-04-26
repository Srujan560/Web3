import React from "react";
import logo from '../images/418Y_web3_music_logo.png'
import styles from "../CSS/home.css";
import {Table} from "react-bootstrap"
import {Button} from "react-bootstrap"

// import {style} from 'home.css'

const testJson = {
    "name": "Glass Animals - Heat Waves",
    "link": "https://youtu.be/mRD0-GxqHVo"
};


const bsty = { 
    border: ".5vh solid",
    paddingLeft: ".155vw",
    display: "inline-flex",
    alignItems: "center",
    borderRadius: 100, 
    width: "1.5vw", 
    height:"2.75vh", 
    fontSize:"1vw"
};

const tablesty = {
    height: "5vh",
    textAlign: "center"
};

function addSong(songname, link){
    alert("Added "+songname+" to your music!");
}

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
