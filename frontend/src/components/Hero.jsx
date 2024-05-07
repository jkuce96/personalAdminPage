import React from 'react';
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";



function Hero() {
  return (
    <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            {/* <p className="text-[#00df9a] font-bold p-2">TOP APPKA NA PLANETĚ</p> */}
            
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Portfolio page</h1>
            <div className="flex justify-center items-center">
                <p className="md:text-4xl sm:text-3xl text-xl font-bold py-4">Frontend, backend, databáze:</p>
                <ReactTyped
                className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-yellow-300 md:pl-4"
                strings={["React.js", "Express.js", "MySQL"]}
                typeSpeed={50}
                backSpeed={40}
                loop
                />
                
            </div>
            {/* <p className="md:text-2xl text-xl font-bold text-gray-400">Random test text.</p> */}
            <Link to="/info">
            <button className="bg-violet-500 hover:bg-violet-800 w-[200px] rounded-md font-bold text-xl my-6 mx-auto py-3 hover:text-yellow-100 text-white">Zobrazit více</button>
            </Link>
            </div>
            
    </div>
  )
}

export default Hero