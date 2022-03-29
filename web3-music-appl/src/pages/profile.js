import React from "react";
import styles from '../App.css'
import WallectCard from "../wallectcard";

// async function onInit() {
//     await window.ethereum.enable();
//     const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//     const account = accounts[0];
//     console.log(account)
//      window.ethereum.on('accountsChanged', function (accounts) {
//         // Time to reload your interface with accounts[0]!
//         console.log(accounts[0])
//         return account
//        });
// }

// let some =await onInit();
// console.log(some+" asdasdasdassdsa")

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