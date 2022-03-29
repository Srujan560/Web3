<<<<<<< HEAD
import React, {useState} from "react"
import {ethers} from 'ethers'
import styles from '../App.css'
import WallectCard from "../wallectcard";
import { useMoralis } from "react-moralis";
=======
import React from "react";
import styles from '../App.css';
import WallectCard from "../wallectcard";
import user from "../App";

>>>>>>> f8bfa73b5a71818bdca0ca232739138987897193

function UserProfile(){
    const {user} = useMoralis();
    console.log("Hello world");
    console.log(user);
      
    return (
        <body style={{backgroundColor:"bisque"}}>
            <div class="main">
                
                <center>
                    <h1 style={{fontSize: "4em"}}>Profile</h1>
                    <div class="information">
                        
                        <h2>Wallet Address: </h2>
<<<<<<< HEAD
                        <h2 >{user.get("username")}</h2>
=======
>>>>>>> f8bfa73b5a71818bdca0ca232739138987897193
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