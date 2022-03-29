import React, {useState} from 'react'
import {ethers} from 'ethers'
import Button from 'react-bootstrap/Button';
import getUserData from './pages/profile'

// src = "https://github.com/mikec3/my_tutorials/tree/master/MetaMask_Connection"
const WallectCard = ()=>{

    const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');
    const connectWalletHandler = () => {
        if (window.ethereum&& window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
				getAccountBalance(result[0]);
				getUserData(result);
			})
			.catch(error => {
				setErrorMessage(error.message);
			
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
    }
    const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
        getAccountBalance(newAccount.toString());
	}
    const getAccountBalance = (account) => {
		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
		.then(balance => {
			setUserBalance(ethers.utils.formatEther(balance));
		})
        .catch(error => {
			setErrorMessage(error.message);
		});
		
	};
    
    const chainChangedHandler = () => {
		// forces reload, so we have lasest infromation about the wallet
		window.location.reload();
	}


	// listen for account changes
	window.ethereum.on('accountsChanged', accountChangedHandler);
    // Here we reload if account is changed 
	window.ethereum.on('chainChanged', chainChangedHandler);

    //ethereum.on('disconnect', handler: (error: ProviderRpcError) => void);
    

    return(<div>
        <div className='walletCard'>
            
		<h4> {"Connection to MetaMask using window.ethereum methods"} </h4>
		
			<button onClick={connectWalletHandler}>{connButtonText}</button>
			<div className='accountDisplay'>
				<h3>Address: {defaultAccount}</h3>
			</div>
			<div className='balanceDisplay'>
				<h3>Balance: {userBalance}</h3>
			</div>
			{errorMessage}
		</div>
    </div>
    )

}
export default WallectCard;