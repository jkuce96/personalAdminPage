import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { ReactTyped } from "react-typed";
import axios from 'axios';
import Ethereum from "../../assets/eth.png"
import Bitcoin from "../../assets/transp.png"


function BitcoinTable() {
    const [showBTC, setShowBTC] = useState(false)
    const [showETH, setShowETH] = useState(false)
    const [showDOGE, setShowDOGE] = useState(false)
    const [bitcoinData, setBitcoinData] = useState(null);
    const APIKEY = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd&x_cg_demo_api_key=CG-sCAdtuujTcA5E6V5YjtTgd11"

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(APIKEY)
                setBitcoinData(response.data)
            } catch (error) {
                console.log("Error u fetchování dat", error)
            }
        };
        fetchData();
    }, []);

    const handleBtcClick = () => {
        setShowBTC(!showBTC)
        console.log("works")
        console.log(showBTC)
    }
    const handleEthClick = () => {
        setShowETH(!showETH)
        
    }
    const handleDogeClick = () => {
        setShowDOGE(!showDOGE);
    }



  return (
    <div className="text-white">
    <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <a href="https://www.coingecko.com/cs/api" className="text-[#00df9a] font-bold p-2 cursor-pointer mx-auto" target="_blank">goingecko</a>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Ceny kryptoměn.</h1>
        <div className="flex justify-center items-center">
            <p className="md:text-4xl sm:text-3xl text-xl font-bold py-4">Aktuální ceny pro </p>
            <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-pink-400 md:pl-4"
            strings={["BITCOIN", "ETHEREUM", "DOGECOIN"]}
            typeSpeed={50}
            backSpeed={40}
            loop
            />
            
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-400">Aktualizováno jednou za pět minut</p>
        
        {bitcoinData && (
        <div className="kryptosekce flex flex-col md:flex-row my-6">
            <div className="bg-[#00df9a] w-[200px] rounded-md font-medium my-3 mx-auto py-3 text-black relative cursor-pointer" onClick={handleBtcClick}>
                <h1>BTC: {bitcoinData.bitcoin.usd} $</h1>
                {showBTC && (
        <div className="absolute w-[200px] h-[300px] bg-[#00df9a] flex flex-col items-center justify-center rounded-lg cursor-default">
            <img src={Ethereum} alt="ethereum" className="h-2/3 my-auto cursor-pointer" />
         
          <a className="hover:text-yellow-100 my-auto" href="https://coinmarketcap.com/currencies/ethereum/" target="_blank">Odkaz na CMC.com</a>
        </div>
      )}
                
            </div>
            <div className="bg-[#00df9a] w-[200px] rounded-md font-medium my-3 mx-auto py-3 text-black relative cursor-pointer" onClick={handleEthClick}>
      <h1>ETH: {bitcoinData.ethereum.usd} $</h1>
      {showETH && (
        <div className="absolute w-[200px] h-[300px] bg-[#00df9a] flex flex-col items-center justify-center rounded-lg cursor-default">
            <img src={Ethereum} alt="ethereum" className="h-2/3 my-auto cursor-pointer" />
         
          <a className="hover:text-yellow-100 my-auto" href="https://coinmarketcap.com/currencies/ethereum/" target="_blank">Odkaz na CMC.com</a>
        </div>
      )}
    </div>
            <div className="bg-[#00df9a] w-[200px] rounded-md font-medium my-3 mx-auto py-3 text-black relative cursor-pointer" onClick={handleDogeClick}>
                <h1>DOGE: {bitcoinData.dogecoin.usd} $</h1>
                {showDOGE && (
        <div className="absolute w-[200px] h-[300px] bg-[#00df9a] flex flex-col items-center justify-center rounded-lg cursor-default">
            <img src={Ethereum} alt="ethereum" className="h-2/3 my-auto cursor-pointer" />
         
          <a className="hover:text-yellow-100 my-auto" href="https://coinmarketcap.com/currencies/ethereum/" target="_blank">Odkaz na CMC.com</a>
        </div>
      )}
            </div>
        </div>
        )}
       
    
        </div>
</div>
  )
}

export default BitcoinTable