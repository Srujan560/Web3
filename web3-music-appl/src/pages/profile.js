import React, {useState} from "react"
import {ethers} from 'ethers'
import styles from '../App.css'
import WallectCard from "../wallectcard";
import { useMoralis } from "react-moralis";

function UserProfile(){
    const {user} = useMoralis();
    console.log("Hello world");
    console.log(user);
      
    return (
        <body style={{backgroundColor:"bisque"}}>
            <div class="main">
                <center>
                    <h1>Profile</h1>
                    <div class="information">
                        
                        <h2>Wallet Address: </h2>
                        <h2 >{user.get("username")}</h2>
                        <h3>-------------- </h3>
                        <h2>Balance: </h2>
                        <h3>0.0{user.get("tokens")}</h3>
                        <h3>-------------- </h3>
                        <h2>Playlists: </h2>
                        <h3>**all your music here**</h3>
                        <h3>-------------- </h3>
                    </div>
                </center>
            </div>
        </body>
        )
}
export default UserProfile; 