import React, { useEffect, useState } from "react";
import './styles/App.css';
import polygonLogo from './assets/polygonlogo.png';
import ethLogo from './assets/ethlogo.png';
import { networks } from './utils/networks';
import { ethers } from "ethers";
import contractABI from "./utils/contractABI.json";
import DataTimeFrom from './DataTimeFrom'
import DataTimeTo from './DataTimeTo'
import { alpha } from '@material-ui/core/styles';
//import { getETHPrice } from '../utils/getETHPrice';
import DateFnsUtils from '@date-io/date-fns';
//import ConfirmButton from 'material-ui-confirm-button'; 
import QRCode from 'qrcode.react';
import { pinJSONToIPFS } from "./pinata.js";
require("dotenv").config();
// Constants  




const contractAddress = '0xc676083FEc184f5B92Fbc35cCC1e6c80c478c156'

const Rent = () => {
  const [currentAccount, setCurrentAccount] = useState('');
  const [rent, setRent] = useState('');
  const [network, setNetwork] = useState('');
  const [editing, setEditing] = useState(false);
  const [mints, setMints] = useState([]);
  const [loading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [record, setRecord] = useState('');

  //const inputRef = useRef();
 


  function parseTime(){
	// // const dataFrom = inputRef.current.value;
	const dataFromLe =  document.getElementsByTagName("input")[0];
	const dataFrom = dataFromLe ? dataFromLe.value : "";
	
	
	const timeFromLe = document.getElementsByTagName("input")[1]; 
	const timeFrom = timeFromLe ? timeFromLe.value : "";

	const dataToLe = document.getElementsByTagName("input")[2]; 
	const dataTo= dataToLe ? dataToLe.value : "";

	const timeToLe = document.getElementsByTagName("input")[3];
	const timeTo = timeToLe ? timeToLe.value : "";

	if (!dataFrom || !timeFrom || !dataTo || !timeTo) {
		return (0);
	}


	
	const from = dataFrom + " " + timeFrom 
	const to = dataTo + " " + timeTo  
	const parseFrom = Date.parse(from) 
	const parseTo = Date.parse(to) 
	const timeInMin = Math.ceil((parseTo - parseFrom) / 60000 ) ; 
	
	return (timeInMin)
}
console.log(parseTime())
    
	const connectWallet = async () => {
		try {
			const { ethereum } = window;

			if (!ethereum) {
				alert("Get MetaMask -> https://metamask.io/");
				return;
			}

			const accounts = await ethereum.request({ method: "eth_requestAccounts" });
		

			console.log("Connected", accounts[0]);
			setCurrentAccount(accounts[0]);
		} catch (error) {
			console.log(error)
		}
	}

	const checkIfWalletIsConnected = async () => {
		const { ethereum } = window;

		if (!ethereum) {
			console.log('Make sure you have metamask!');
			return;
		} else {
			console.log('We have the ethereum object', ethereum);
		}

		const accounts = await ethereum.request({ method: 'eth_accounts' });

		if (accounts.length !== 0) {
			const account = accounts[0];
			console.log('Found an authorized account:', account);
			setCurrentAccount(account);
		} else {
			console.log('No authorized account found');
		}

    const chainId = await ethereum.request({ method: 'eth_chainId' });
		setNetwork(networks[chainId]);

		ethereum.on('chainChanged', handleChainChanged);
		
		// Reload the page when they change networks
		function handleChainChanged(_chainId) {
			window.location.reload();
		}
	};

const mintNFT = async (duration, price) => {
		if (duration.trim() == "" || price.trim() == "") {
		  return {
			success: false,
			status: "❗Please make sure all fields are completed before minting.",
		  };
		}
	  
		//make metadata
		const metadata = new Object();
		// metadata.url = name;
		metadata.duration = tot;
		metadata.price = totalPrice(tot);
	  
		const pinataResponse = await pinJSONToIPFS(metadata);
		if (!pinataResponse.success) {
		  return {
			success: false,
			status: "😢 Something went wrong while uploading your tokenURI.",
		  };
		}
		const tokenURI = pinataResponse.pinataUrl;
	  
		const provider = new ethers.providers.Web3Provider(ethereum);
		const signer = provider.getSigner();
		const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI.abi, signer);
	  
		const transactionParameters = {
		  to: contractAddress, // Required except during contract publications.
		  from: window.ethereum.selectedAddress, // must match user's active address.
		  data: window.contract.methods
			.mintNFT(window.ethereum.selectedAddress, tokenURI)
			.encodeABI(),
		};
  
// 	const mintRent = async () => {
		
// 		if (!rent) {
// 		  return
// 		}
	
// 		if (rent.length <= 3) {
// 		  alert("choose your dates first")
// 		  return;
// 		}
	
// 		const price = rent.length == 3 ? '0.5' : (rent.lenth === 4 ? '0.4' : '0.1');
// 		console.log("minting rent", rent, "with price", price);
// 		try {
// 			const {ethereum} = window;
// 			  if (ethereum) {
// 		  const provider = new ethers.providers.Web3Provider(ethereum);
// 				const signer = provider.getSigner();
// 				const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI.abi, signer);
// 				console.log("going to call wallet to pay gas")
	
// 				let tx = await contract.register(rent, {value: ethers.utils.parseEther(price)});
// 				const receipt = await tx.wait();
	
// 				if (receipt.status === 1) {
// 				  console.log("Rent minteds! https://mumbai.polygonscan.com/tx/"+tx.hash)
	
// 				  const tx2 = contract.setRecord(rent, record);
// 				  const tx2receipt = await tx2.wait();
	
// 				  console.log("record set!! https://mumbai.polygonscan.com/tx/"+tx2.hash)
	
// 				 setTimeout(() => {
// 						fetchMints();
// 					}, 2000);
	
// 					setRecord('');
// 					setRent('');
// 				} else {
// 					alert("Transaction failed! Please try again");
// 				}
// 			}
// 		  } catch(error) {
// 			console.log(error);
// 		  }
// 	  }
	
// 	  const fetchMints = async () => {
// 		try {
// 			const { ethereum } = window;
// 			if (ethereum) {
				
// 				const provider = new ethers.providers.Web3Provider(ethereum);
// 				const signer = provider.getSigner();
// 				const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI.abi, signer);
					
// 				// Get all the rent times from our contract
// 				const rangeTimes = await contract.getAllTimes();
					
// 				// For each name, get the record and the address
// 				const mintRecords = await Promise.all(rangeTimes.map(async (rangeTime) => {
// 				const mintRecord = await contract.records(rangeTime);
// 				const owner = await contract.rents(rangeTime);
// 				return {
// 					id: rangeTimes.indexOf(rangeTime),
// 					name: rangeTime,
// 					record: mintRecord,
// 					owner: owner,
// 				};
// 			}));
	
// 			console.log("MINTS FETCHED ", mintRecords);
// 			setMints(mintRecords);
// 			}
// 		} catch(error){
// 			console.log(error);
// 		}
// 	}
	
  const switchNetwork = async () => {
	if (window.ethereum) {
		try {
			await window.ethereum.request({
				method: 'wallet_switchEthereumChain',
				params: [{ chainId: '0x13881' }], // Check networks.js for hexadecimal network ids
			});
		} catch (error) {
			// This error code means that the chain we want has not been added to MetaMask
			if (error.code === 4902) {
				try {
					await window.ethereum.request({
						method: 'wallet_addEthereumChain',
						params: [
							{	
								chainId: '0x13881',
								chainName: 'Polygon Mumbai Testnet',
								rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
								nativeCurrency: {
										name: "Mumbai Matic",
										symbol: "MATIC",
										decimals: 18
								},
								blockExplorerUrls: ["https://mumbai.polygonscan.com/"]
							},
						],
					});
				} catch (error) {
					console.log(error);
				}
			}
			console.log(error);
		}
	} else {
		// If window.ethereum is not found then MetaMask is not installed
		alert('MetaMask is not installed. Please install it to use this app: https://metamask.io/download.html');
	} 
}

	// Render Methods
	const renderNotConnectedContainer = () => (
    <div className="container">
      <div className="header-container">
		<div className="connect-wallet-container">
      
      <h1 className="m-0 text-center text-white">Choose your time</h1>
      <br />
      &nbsp;
			<img src="https://cdn.dribbble.com/users/789033/screenshots/3685590/waiting.gif" alt="CSS" />
      <br />
      &nbsp;

			<button onClick={connectWallet} className="cta-button connect-wallet-button">
      Connect Wallet To Get Started
			</button>
      <br />
      &nbsp;
      <br />
      &nbsp;

		</div>
    </div>
    </div>
    
	);

  // update account, will cause component re-render
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
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}


	// listen for account changes
	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);




//const qr = document.getElementsByTagName('canvas')


  const renderInputForm = () => {
    if (network !== 'Polygon Mumbai Testnet') {
		return (
			<div className="connect-wallet-container">
				<p className="m-0 text-left text-white">Please connect to the Polygon Mumbai Testnet</p>
			</div>
		);
	}

    return (
		
		<div className="form-container">
	 <br />
      &nbsp;
      <div className="container"> 
       <img src="https://bafkreih42nn64wwrzpim5g4zop5wfoyne66d7fbudszp3qamacxi3mrqna.ipfs.nftstorage.link/" alt="CSS" />
     	</div>
        &nbsp;
        <br />
        <h3 className="m-0 text-left text-white"> Select your date and time </h3>
        <br />
        &nbsp;
        &nbsp;	
		<h5 className=" col-md-4 m-10 text-left text-white"> From: </h5>
        <div  className="first-row">
		<DataTimeFrom />
		</div>
        <br />
		&nbsp;
        <br />
        <h5 className="col-md-4 m-10 text-left text-white"> To:  </h5>
        <div  className="first-row">
        <DataTimeTo />
        </div>
		&nbsp;
        <br />
		
          <button className='cta-button confirm' disabled={loading} onClick={parseTime}  >
							Confirm time
						</button>  
						&nbsp;
        <br />
        <br />
		<h5 className="m-0 text-centr text-white"> Total time: </h5> 
		&nbsp;
		<div className="first-row">
        <h6 className="col-md-1 m-10 text-left text-white"> Day </h6>
          <input
            value={timeDays}
			readOnly
            />  
			<h6 className="col-md-1 m-10 text-left text-white"> Hour </h6>
			
          <input
            value={timeHours}
			readOnly
            />  
			<h6 className="col-md-1 m-10 text-left text-white"> Min </h6>
        
          <input
            value={timeMinuts}
			readOnly
            />
	
    
        </div>
						<button className='cta-button mint-button' disabled={loading} onClick={mintRent}>
							Rent
						</button>  
					
	
      
	
          
       
                <br />
        &nbsp;
        
        <div className="container"> 

        <br />
        &nbsp;
        
        <div  className="first-row"> 
		<h6 className="m-0 text-centr text-white"> Total time: {timeDays} days {timeHours} hours {timeMinuts} minuts </h6> 
        </div>
        <br />
        <div  className="first-row"> 
        <h6 className="m-0 text-centr text-white"> Total price USD: $ {(totalPrice(tot)).toFixed(2)}  </h6>
        </div>
        <br />
        <div  className="first-row"> 
        <h6 className="m-0 text-centr text-white"> Total price MATIC: {totalCostEth}  </h6>
        </div>
        <br />
        &nbsp;
        </div>
       
          
        
         &nbsp;
             <div className='accountDisplay'>
             &nbsp;
               <h5 className="m-0 text-left text-white">Address: {defaultAccount}</h5>
             </div>
             <div className='balanceDisplay'>
               <h5 className="m-0 text-left text-white">Balance: {userBalance}</h5>
             
             {errorMessage}
             &nbsp;
             <br />
             </div>
			 
             </div>  
		
		);
	}


	
	



 const timeDays =Math.floor(parseTime() / 60 / 24 ); 
 const timeHours =Math.floor((parseTime() / 60) - (timeDays * 24)); 
 const timeMinuts = parseTime() - (timeDays * 24 * 60) - (timeHours * 60);

 const dayUSD = 120;
 const hourUSD = 10;
 const minUSD = 0.16666667;

 const tot = (timeDays + timeHours + timeMinuts)
 function totalPrice(tot){
 if (timeDays === 0 && timeHours >= 1  && timeHours < 12)  return (hourUSD * timeHours ) + (minUSD * timeMinuts)
 else if(timeDays !== 0 && timeHours >= 1  && timeHours < 12)  return (dayUSD * timeDays)+(hourUSD * timeHours )+ (minUSD * timeMinuts)
 else if(timeDays !== 0 && timeHours === 0)  return  (dayUSD * timeDays) + (minUSD * timeMinuts)
 else if(timeDays === 0 && timeHours === 0)  return  (minUSD * timeMinuts)
 else if(timeMinuts === 0 && timeHours === 0)  return  (dayUSD * timeDays)
 else  return (dayUSD * (timeDays+1))

 }
 

 console.log((totalPrice(tot)).toFixed(2))  

 const getEthPrice = document.getElementById("mcw-7").textContent;
 const aa = getEthPrice.slice(17)  
 const totalCostEth = (totalPrice(tot) / aa ).toFixed(5)
//const totalCostEth = "123"
console.log(totalCostEth) 

const renderMints = () => {
	if (currentAccount && mints.length > 0) {
		return (
			<div className="mint-container">
				<div className="mint-list">
		
			</div>
		</div>);
	}
};

	useEffect(() => {
		checkIfWalletIsConnected();
	}, []);

  useEffect(() => {
	if (network === 'Polygon Mumbai Testnet') {
		fetchMints();
	}
}, [currentAccount, network]);
  

	return (
		<div className="Rent">
			<div className="container">
				<div className="header-container">
					<header>
						<div className="left">
							
						</div>
            <div className="right">
			<img alt="Network logo" className="logo" src={polygonLogo} />
			{ currentAccount ? <p> Wallet: {currentAccount.slice(0, 6)}...{currentAccount.slice(-4)} </p> : <p> Not connected </p> }
		</div>
					</header>
				</div>
				
				{!currentAccount && renderNotConnectedContainer()}
        {currentAccount && renderInputForm()}
      {mints && renderMints()}

		
			</div>
      
      &nbsp;
      <p className="text-center"><a href="https://www.linkedin.com/in/anna-kolbasova-724a461b1/"><img className="nav-social" src="/icons/linkedin.png" alt="https://www.linkedin.com/in/anna-kolbasova-724a461b1/"/></a>
            <a href="http://annabnn.com/"><img className="nav-social" src="/icons/internet.png" alt="http://annabnn.com/"/></a>
            <a href="https://github.com/annabnn812"><img className="nav-social" src="/icons/GitHub.png" alt="https://github.com/annabnn812"/></a>
            <a href="https://twitter.com/_AnnaBNN"><img className="nav-social" src="/icons/twitter.png" alt="https://twitter.com/_AnnaBNN"/></a>
			</p>
            &nbsp;
          <p className="m-0 text-center text-white">
            Copyright &copy;  Car Sharing Service Team  2022
          </p>
          <br />
      &nbsp;
		</div>
	);
  
};

export default Rent;
