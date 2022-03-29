import React from "react";
import styles from '../App.css';
import WallectCard from "../wallectcard";
import user from "../App";
import {Helmet} from 'react-helmet';
var userID, userBalance;

function getUserData(){
    document.getElementById("addr").innerHTML = "This is an address";
}

function userProfile(){
    return (
        <body style={{backgroundColor:"bisque"}}>
            <div class="main">
                <Helmet>
                    <script>
                        var address = document.getElementById("wallet");
                        address.innerHTML = "0x03C5bFbCE62Dea655A410ffB368984e1cfd43019";
                        console.log(address)
                    </script>
                </Helmet>
                <center>
                    <h1>Profile</h1>
                    <div class="information">
                        
                        <h2>Wallet Address: </h2>
                        <div id="wallet">
                        </div>
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