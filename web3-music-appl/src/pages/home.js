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


                    <Table striped bordered hover variant="dark" style={{width:"35vw", fontSize:"1vw"}}>
                        <thead>
                            <tr>
                            <th style={{width:"92vw", height:"5vh", textAlign:"center"}}>Song Title</th>
                            <th style={{textAlign:"center"}}>Add</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={tablesty}>
                                <td>Song 1</td>
                                <td><Button class="button" type="submit" variant="outline-success" style={bsty} onClick={() => {addSong("Song 1", "../../..sounds/ERF_bensound.mp3")}}>+</Button></td>
                            </tr>
                            <tr style={tablesty}>
                                <td>Song 2</td>
                                <td><Button class="button" type="submit" variant="outline-success" style={bsty} onClick={() => {addSong("Song 2", "../../../sounds/SWAY_tubebackr.mp3")}}>+</Button></td>
                            </tr>
                            <tr style={tablesty}>
                                <td>Song 3</td>
                                <td><Button class="button" type="submit" variant="outline-success" style={bsty} onClick={() => {addSong("Song 3", "https://youtu.be/mRD0-GxqHVo")}}>+</Button></td>
                            </tr>
                            <tr style={tablesty}>
                                <td>Song 4</td>
                                <td><Button class="button" type="submit" variant="outline-success" style={bsty} onClick={() => {addSong("Song 4", "https://youtu.be/mRD0-GxqHVo")}}>+</Button></td>
                            </tr>
                        </tbody>


                    </Table>
                </center> 
                
            </div>
        
        )
}
export default home; 
