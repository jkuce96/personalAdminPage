import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { Route, Routes, Link } from 'react-router-dom';




const Navbar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <div className="text-white px-4 flex justify-between items-center h-24 max-w-[1240px] mx-auto">
        <h1 className="w-full text-3xl font-bold text-violet-500 hover:text-violet-700"><Link to="/">Jan Kučera</Link></h1>
        <ul className="hidden md:flex">
            <li className="p-4"><Link to="/">HOME</Link></li>
            <li className="p-4"><Link to="/bitcoin">BITCOIN</Link></li>
            <li className="p-4">(TBD)</li>
            <li className="p-4"><Link to="/info">FETCH</Link></li>
            <li className="p-4"><Link to="/login">LOG</Link></li>
        </ul>
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
            {!nav ? <AiOutlineClose size={20}/> : <FiMenu size={20} />}
            
        </div>
        <div className={!nav ? "fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-black ease-in-out duration-300 z-50" : "fixed left-[-100%] z-50 "}>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4"><Link to="/">MENU</Link></h1>
            <ul className="p-4">
            <li className="p-4 border-b border-gray-600"><Link to="/">HOME</Link></li>
            <li className="p-4 border-b border-gray-600"><Link to="/bitcoin">BITCOIN</Link></li>
            <li className="p-4 border-b border-gray-600"><Link to="/info">ZDROJE</Link></li>
            <li className="p-4 border-b border-gray-600"><Link to="/info">FETCH</Link></li>
            <li className="p-4"><Link to="/login">LOG</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar