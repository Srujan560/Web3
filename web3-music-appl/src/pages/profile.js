import React, {useState} from "react"
import {ethers} from 'ethers'
import { useMoralis } from "react-moralis";

import styles from '../App.css';
import WallectCard from "../wallectcard";
import user from "../App";

<<<<<<< HEAD
=======

>>>>>>> 90601d94617a0a63e1c26e49f054f60d857ae296
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
<<<<<<< HEAD
export default UserProfile; 
=======
export default UserProfile; 
>>>>>>> 90601d94617a0a63e1c26e49f054f60d857ae296
