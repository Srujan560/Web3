import { useMoralisWeb3Api} from "react-moralis";
import Moralis from "moralis";
import { useEffect, useState } from "react";
function loadUserBlance({user}){
    const web3Api= useMoralisWeb3Api();
    const [ethBlance,setEthBlance]=useState(0);
    const getBlance = async () =>{
        const result = await web3Api.account.getNativeBalance({
            chain: "rinkeby",
            address: user.get('ethAddress')
        }).catch(err=>console.log(err))
        if(result.balance){
            setEthBlance(Moralis.Units.FromWei(result.balance))
        }
    }
    useEffect(() => {
      getBlance()
    }, []);
    return(
        <div>
            <p>Hi From Blance</p>
            {/* Line Below we check to see if ethBlance exists if does go head and prints ... We need that statement */}
            {ethBlance&& <p>eth: {ethBlance} <b>ETH</b></p>}
        </div>)
}export default loadUserBlance;