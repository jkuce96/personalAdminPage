import React from 'react'
import Westie from "../../assets/westies.png"

const Logoutcard = () => {
    const handleLogout = () => {
        document.cookie = 'jwt=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        console.log("removed cookie")
        window.location.href = "/info"
    }

  return (
    <>
  <div className="relative mt-[10rem] mb-[10rem] z-0">
  <img src={Westie} alt="west" className="absolute top-[20%] left-[50%] transform translate-x-[-50%] translate-y-[-100%] w-64 bg-transparent z-10 hover:scale-110 transition-transform duration-500 ease-in-out" /> 
  <div className="max-w-sm mx-auto my-[5rem] bg-white shadow-md rounded-lg overflow-hidden relative">
    <div className="px-6 py-4 mt-4">
      <div className="font-bold text-xl mb-2">Odhlásit</div>
      <p className="text-gray-700 text-base">Opravdu se chceš odhlásit?</p>
    </div>
    <div className="px-6 py-2">
      <button onClick={handleLogout} className="bg-violet-600 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded">
        Logout
      </button>
    </div>
  </div>
</div>


  </>
  
  )
}

export default Logoutcard