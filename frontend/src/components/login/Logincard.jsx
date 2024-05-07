import React from 'react'
import { useState, useEffect } from 'react';
import LoginLoader from "../info/LoginLoader";

function Logincard() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [wrongUdaje, setWrongUdaje] = useState(false);
    const [overitLoader, setOveritLoader] = useState(false);

    useEffect(() => {
        const jwt = document.cookie.split(';').find(cookie => cookie.includes('jwt'));
        if (jwt) {
            setIsLoggedIn(true);
        }
    }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);

    setOveritLoader(true)

    try {
        const response = await fetch("http://localhost:3000/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });

        if (response.ok) {
            const data = await response.json();
                
            // document.cookie = `jwt=${data.token}; path=/; HttpOnly; SameSite=Strict`;

            // document.cookie = `jwt=${data.token}; path=/; max-age=3600`;

            document.cookie = `jwt=${data.token}; path=/; Secure; SameSite=None`;
      
          console.log('Login successful');
          setIsLoggedIn(true);
          setTimeout(() => {
            //pro decent efekt timeout, loader stays po redirectu for a couple of secs
            window.location.href = "/info"
            setTimeout(() => {
              setOveritLoader(false);
              
            }, 500);
          }, 2000);
        } else if (username === "Foo" && password === "Bar") {
          setIsLoggedIn(true);
          
          
        }
           else {
            console.log('Login failed :(');

            setUsername("");
            setPassword("");
            setWrongUdaje(true);
            setTimeout(() => {
              setOveritLoader(false);
              setTimeout(() => {
                setWrongUdaje(false);
                
              }, 3000);
            }, 3000)
        
        }
    }
    catch (error) {
        console.log('Error:', error);
    }
    };
  return (
    <>
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mb-[10rem] mt-[10rem] p-6 bg-white shadow-md rounded-lg relative">
    {overitLoader && <LoginLoader />}
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Uživatelské ID:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Vložit ID: (bez localhost db je id: Foo)"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Heslo:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Vložit heslo: (bez db je heslo: Bar)"
        />
      </div>
      <button
        type="submit"
        className="bg-violet-600 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Přihlásit
      </button>
      {wrongUdaje && <p className="text-red-500 text-2xl text-center">Špatné údaje</p>}
    </form>
    

    
    </>
  )
}

export default Logincard

