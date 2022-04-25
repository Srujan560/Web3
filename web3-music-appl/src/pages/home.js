import React from "react";
import logo from '../images/418Y_web3_music_logo.png'
import styles from "../CSS/home.css";
import { useState } from "react";
import { ethers } from "ethers";
import ErrorMessage from "../../src/ErrorMessage";
import TxList from "../../src/TxList";
// import {style} from 'home.css'

const buttStyl = {
    marginLeft:"1vw", 
    border: ".5vh solid",
    borderRadius: 100, 
    width: "6vw", 
    height:"4vh", 
    fontSize:".75vw", 
    padding:0
}

const startPayment = async ({ setError, setTxs, ether, addr }) => {
    try {
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");
      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      ethers.utils.getAddress(addr);
      const tx = await signer.sendTransaction({
        to: addr,
        value: ethers.utils.parseEther(ether)
      });
      console.log({ ether, addr });
      console.log("tx", tx);
      setTxs([tx]);
    } catch (err) {
      setError(err.message);
    }
  };

export default function Home(){
    const [error, setError] = useState();
    const [txs, setTxs] = useState([]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      setError();
      await startPayment({
        setError,
        setTxs,
        ether: data.get("ether"),
        addr: "0xe9Fa45801C65ff47D0A3c98D60eC7F135bab0724"
      });
    };

    var h1s = document.getElementsByTagName("h1");
    h1s[0].style.textAlign="center";

    return (
        <form className="m-4" onSubmit={handleSubmit}>
        <div style={{height:"100vh", width:"100vw", backgroundColor:"#1b2838"}}>
          <h1 style={{fontSize: "4vw", color:"#e0d9cf"}}>Home Page</h1>
            <h1 className="text-xl font-semibold text-gray-700 text-center">
              Please pay 0.01 Etherium Access fee
            </h1>
              <div className="searchContainer">
                <input
                  name="ether"
                  type="text"
                  className="bar"
                  placeholder="0.01 ETH"
                />
            <button type="submit" className="btn btn-primary submit-button focus:ring focus:outline-none w-full" class="button" style={buttStyl}>
              Pay
            </button>
            </div>
            <ErrorMessage message={error} />
            <TxList txs={txs} />
            <div>
                <center>
                    <div  class="imageLogo" style={{width: "15vw"}}>
                        <img src={logo} alt="" style={{width: "15vw"}} max-width="100%"/>
                    </div>
                </center> 
            </div>
        </div>
      </form>
    )
}
