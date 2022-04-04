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
    const h1sty = {
		fontSize: "4vw", 
		color:"#e0d9cf"
	}
	const h2sty = {
		fontSize:"2vw",
		color:"grey"
	}
	const h3sty = {
		fontSize:"1vw",
		marginBottom: "5vh",
        color:"#c94242"
	}

   

        return (
            <body style={{height:"100vh", width:"100vw", backgroundColor:"#1b2838"}}>
                <div class="main">
                    <center>
                        <h1 style={h1sty}>Profile</h1>
                        <div class="information">
                            <h2 style={h2sty}>Wallet Address: </h2>
                            <h3 style={h3sty}>{user.get("username")}</h3>
                            <h2 style={h2sty}>Balance: </h2>
                            <h3 style={h3sty}>U BROKE{user.get("tokens")}</h3>
                            <h2 style={h2sty}>Playlists: </h2>
                            <h3 style={h3sty}>**all your music here**</h3>
                        </div>
                    </center>
                </div>
            </body>
        )
    }
    export default UserProfile; 
