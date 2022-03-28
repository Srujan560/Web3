import React from "react";
import styles from '../App.css'
import WallectCard from "../wallectcard";

function userProfile(){
    return (
        <body style={{backgroundColor:"bisque"}}>
            <div class="main">
                <center>
                    <h1>Profile</h1>
                    <div class="information">
                        
                        <h2>Wallet Address: </h2>
                        <h2 id="addr">{}</h2>
                        <h3>-------------- </h3>
                        <h2>Balance: </h2>
                        <h3>-------------- </h3>
                        <h2>Playlists: </h2>
                        <h3>-------------- </h3>
                    </div>
                </center>
            </div>
        </body>
        )
}
export default userProfile; 