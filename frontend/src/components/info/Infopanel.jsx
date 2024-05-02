import React from 'react'
import { useState } from "react"
import Weathercard from "./Weathercard"
import Starwarscard from "./Starwarscard"

const Infopanel = () => {
    const [vybranyCoin, setVybranyCoin] = useState(null)
    const [loading, setLoading] = useState(false)

    const randomCoinFetch = async () => {
        setLoading(true);

        try {
            const response = await fetch("https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=CG-sCAdtuujTcA5E6V5YjtTgd11")
            const data = await response.json();

            const coins = data.coins;

            const randomIndex = Math.floor(Math.random() * coins.length);
            const randomCoin = coins[randomIndex];

            const roundedCena = Number(randomCoin.item.data.price).toFixed(2);

            setVybranyCoin({
                name: randomCoin.item.name,
                symbol: randomCoin.item.symbol,
                price: roundedCena

            })
            setLoading(false);
            console.log(vybranyCoin);
        } catch (error) {
            console.error("Error při fetchování coinů", error);
            setLoading(false);
        }}


  return (
    <div className="w-full py-[10rem] px-4 bg-white">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8">
            {/* <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105  duration-300">
              
             <h2 className="text-2xl font-bold text-center py-8">Jeden uživatel</h2>
            <p className="text-center text-4xl font-bold">150 Kč</p>
            <div className="text-center font-medium">
                <p className="py-2 border-b mx-8 mt-8">200 GB úložiště</p>
                <p className="py-2 border-b mx-8">1 Uživatel</p>
                <p className="py-2 border-b mx-8">Plus 25 IQ bodů</p>    
            </div>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Start Trial</button>
            </div> */}
            <Starwarscard />

            {loading ? (<div className="w-full bg-gray-100 shadow-xl flex flex-col py-4 md:my-0 my-8 rounded-lg hover:scale-105  duration-300">
               
               <h2 className="text-2xl font-bold text-center py-8">fetchuji...</h2>
               
              <p className="text-center text-4xl font-bold">Symbol</p>
              <div className="text-center font-medium">
                  <p className="py-2 border-b mx-8 mt-8">Aktuální cena</p>
                  {/* <p className="py-2 border-b mx-8">Test random </p> */}
                  <p className="py-2 border-b mx-8">fetchuji... </p>    
              </div>
              <button onClick={randomCoinFetch} className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a]">fetchuji...</button>
              </div>) : vybranyCoin ? (<div className="w-full bg-gray-100 shadow-xl flex flex-col py-4 md:my-0 my-8 rounded-lg hover:scale-105  duration-300">
               
               <h2 className="text-2xl font-bold text-center py-8">API (random crypto)</h2>
               
              <p className="text-center text-4xl font-bold">{vybranyCoin.name}</p>
              <div className="text-center font-medium">
                  <p className="py-2 border-b mx-8 mt-8">{vybranyCoin.symbol}  </p>
                  <p className="py-2 border-b mx-8">{vybranyCoin.price} $ </p>
                  {/* <p className="py-2 border-b mx-8">Test random </p>     */}
              </div>
              <button onClick={randomCoinFetch} className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a]">Klikni pro další</button>
              </div>) : <div className="w-full bg-gray-100 shadow-xl flex flex-col py-4 md:my-0 my-8 rounded-lg hover:scale-105  duration-300">
               
               <h2 className="text-2xl font-bold text-center py-8">API (random crypto)</h2>
               
              <p className="text-center text-4xl font-bold">Crypto Ticker</p>
              <div className="text-center font-medium">
                  <p className="py-2 border-b mx-8 mt-8">Symbol  </p>
                  <p className="py-2 border-b mx-8">Aktuální cena </p>
                  {/* <p className="py-2 border-b mx-8">Test random </p>     */}
              </div>
              <button onClick={randomCoinFetch} className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a]">Klikni pro fetch</button>
              </div>}

            {/* <div className="w-full bg-gray-100 shadow-xl flex flex-col py-4 md:my-0 my-8 rounded-lg hover:scale-105  duration-300">
               
             <h2 className="text-2xl font-bold text-center py-8">API (random crypto)</h2>
             
            <p className="text-center text-4xl font-bold">Crypto Ticker</p>
            <div className="text-center font-medium">
                <p className="py-2 border-b mx-8 mt-8">Symbol  </p>
                <p className="py-2 border-b mx-8">Aktuální cena </p>
                <p className="py-2 border-b mx-8">Test random </p>    
            </div>
            <button onClick={randomCoinFetch} className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a]">Klikni pro fetch</button>
            </div> */}


            <Weathercard />
            {/* <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105  duration-300">
                
             <h2 className="text-2xl font-bold text-center py-8">Jeden uživatel</h2>
            <p className="text-center text-4xl font-bold">150 Kč</p>
            <div className="text-center font-medium">
                <p className="py-2 border-b mx-8 mt-8">200 GB úložiště</p>
                <p className="py-2 border-b mx-8">1 Uživatel</p>
                <p className="py-2 border-b mx-8">Plus 25 IQ bodů</p>    
            </div>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Start Trial</button>
            </div> */}
        </div>
    </div>
  )
}

export default Infopanel