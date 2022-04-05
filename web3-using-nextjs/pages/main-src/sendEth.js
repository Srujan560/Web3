import Moralis from "moralis";
import { useWeb3Transfer } from "react-moralis";

import { useState } from "react";

export default function send() {
    const amount = .000089;
    const anotherWalletAddress = "0xBAbBcaB2b9e6269EB7022CA7E7FaEfB71EdeabA9";
    // const ErrorMessage = "Not Happend";
    // const { fetch, error, isFetching } = useWeb3Transfer({
    //     type: "native",
    //     amount: Moralis.Units.ETH(amount),
    //     receiver: anotherWalletAddress
    // });
    // const sendEth = async () => {
    //     try {
    //       await Moralis.enableWeb3();
    //       const result = useWeb3Transfer({
    //         type: "native",
    //         amount: Moralis.Units.ETH(amount),
    //         receiver: anotherWallet,
    //       });
    //       console.log(result);
    //       alert("Transfer of funds succeeded!");
    //     } catch (err) {
    //       console.error(err);
    //       alert("Something went wrong");
    //     }
    //   };
    return (
        <div>
            <p >Send Eth <b>ETH</b></p>
            {/* {error && <ErrorMessage error={error} />}
            <button onClick={() => fetch()} disabled={isFetching}>
                Transfer
            </button> */}
            <button > Send Eth</button>
        </div>
    )

}