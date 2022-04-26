import React from "react";
import { useWeb3Transfer } from "react-moralis";
import  { Moralis } from 'moralis';


const TransferEth = (cost) => {
 
  const { fetch, error, isFetching } = useWeb3Transfer({
    type: "native",
    amount: Moralis.Units.ETH(0.003),
    receiver: "0xBAbBcaB2b9e6269EB7022CA7E7FaEfB71EdeabA9",
  });
  

  return (
    // Use your custom error component to show errors
    <div>
     
      <button onClick={() => fetch()} disabled={isFetching}>
        Transfer
      </button>
    </div>
  );
};export default TransferEth;