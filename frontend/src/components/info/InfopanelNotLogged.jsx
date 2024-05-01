import React from 'react'
import { Link } from 'react-router-dom'
import Westie from "../../assets/westies.png"

const InfopanelNotLogged = () => {
  return (
    <div className="w-full py-[1rem] md:py-[5rem] px-4 bg-white flex flex-col mx-auto">

        <div className="max-w-[1240px] mx-auto flex flex-col gap-4 items-center">
          <Link to="/login">
          <img src={Westie} alt="westie" className="md:w-2/3 my-auto mx-auto" />
          </Link>
            <div className="w-full shadow-xl flex flex-col py-4 rounded-lg 
            hover:scale-105  duration-300">

                 <h2 className="text-2xl font-bold text-center py-8 px-12">Sem nemáš přístup. Přihlaš se kliknutím na westíka pro zobrazení komponentu</h2>
            </div>
                <Link to="/login">
                <button className="bg-violet-500 hover:bg-violet-800 w-[200px] rounded-md font-medium  py-6 text-white">Přihlásit se</button>
                </Link>
        </div>
        
    </div>


  )
}

export default InfopanelNotLogged