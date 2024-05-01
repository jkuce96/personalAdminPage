import React from 'react'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Logincard from "../components/login/Logincard"
import Logoutcard from "../components/login/Logoutcard"
import { useEffect, useState } from "react"


function Login( {isLoggedIn} ) {
  const [alternateTitle, setAlternateTitle] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAlternateTitle(predesly => !predesly);
    }, 1300);

    return () => clearInterval(interval); 
  }, []);

  useEffect(() => {
   
    document.title = alternateTitle ? "Přihlásit / odhlásit" : "Odhlásit / přihlásit";
  }, [alternateTitle]); 
  return (
    <div>
        <Navbar />
        {isLoggedIn ? <Logoutcard /> : <Logincard />}
        
        
        {/* <h1 className="text-white">Login</h1> */}
        <Footer />
    </div>
  )
}

export default Login