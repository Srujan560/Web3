import React, { useState } from "react"
import { ethers } from 'ethers'
import { useMoralis } from "react-moralis";
// import { useMoralisWeb3Api } from "react-moralis";
import styles from '../App.css';
import WallectCard from "../wallectcard";
import user from "../App";

function UserProfile() {
    const {user} = useMoralis();
    console.log("Hello world");
    console.log(user);
    // const Web3Api = useMoralisWeb3Api();
    // const fetchNFTTransfers = async () => {
    //     const transfersNFT = await Web3Api.account.getNFTTransfers();
    //     console.log(transfersNFT);
    // };
    // fetchNFTTransfers()


   

        return (
            <body  style={{backgroundColor:"bisque", height:"100vh", width:"100vw"}}>
                <div class="main">

                    <center>
                        <h1 style={{ fontSize: "4em" }}>Profile</h1>
                        <div class="information">

                            <h2>Wallet Address: </h2>
                            <h2 >{user.get("username")}</h2>
                            <h3>-------------- </h3>
                            <h2>Balance: </h2>
                            <h3>U BROKE{user.get("tokens")}</h3>
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
