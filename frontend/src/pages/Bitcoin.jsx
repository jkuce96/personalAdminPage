import React from 'react'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import BitcoinTable from "../components/bitcoin/BitcoinTable"

import { useEffect, useState } from "react"

function Bitcoin() {
  const [alternateTitle, setAlternateTitle] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAlternateTitle(predesly => !predesly);
    }, 1300);

    return () => clearInterval(interval); 
  }, []);

  useEffect(() => {
   
    document.title = alternateTitle ? "Portfolio: API calls" : "Ceny BTC/ETH/DOGE 💰";
  }, [alternateTitle]); 
  return (
    <>
    <Navbar />
    {/* <Hero /> */}
    <BitcoinTable />

    <Footer />
    </>
  )
}

export default Bitcoin