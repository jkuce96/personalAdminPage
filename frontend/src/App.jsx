import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import axios from "axios";

import Homepage from './pages/Homepage';
import Bitcoin from "./pages/Bitcoin";
import Login from "./pages/Login";
import Infopage from "./pages/Infopage";



export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const authCheck = async () => {
        try {
          const token = document.cookie.split('; ').find(row => row.startsWith('jwt=')).split('=')[1];
          console.log(token)

            const response = await axios.get("http://localhost:3000/authenticate", {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
            if (response.status === 200) {
                setIsLoggedIn(true);
                console.log("Authenticated");
            } else {
                setIsLoggedIn(false);
                console.log("Not authenticated");
            }
        } catch (error) {
            console.error(error);
        }
    };
    authCheck();
}, []);


  return (
    <>
   
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/bitcoin" element={<Bitcoin />} />
      <Route path="/login" element={<Login isLoggedIn={isLoggedIn} />} />
      <Route path="/info" element={<Infopage isLoggedIn={isLoggedIn}/>} />¨
      {/* <ProtectedRoute path="/info" element={<Infopage />} /> */}
    </Routes>
    </>
  );
}