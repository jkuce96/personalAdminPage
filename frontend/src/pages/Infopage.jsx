import React from 'react'
import Navbar from "../components/Navbar"
import Infopanel from "../components/info/Infopanel"
import Footer from "../components/Footer"
import Cards from "../components/Cards"
import InfopanelNotLogged from "../components/info/InfopanelNotLogged"
import { useEffect } from "react"

const Infopage = ( {isLoggedIn} ) => {
  useEffect(() => {
    document.title = "Informace 👀"
  }, [])
  return (
    <>
    <Navbar />
    {/* <div>
      {isLoggedIn ? <h1 className="text-white text-9xl">FUNGUJEM</h1> : <h1 className="text-white text-9xl">NEFUNGUJEM</h1>}
      
    </div> */}
   <div>
    {isLoggedIn ? <Infopanel /> : <InfopanelNotLogged />}
    
    </div>
    <Footer />
    </>
  )
}

export default Infopage