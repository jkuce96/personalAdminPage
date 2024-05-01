import React from 'react'
import axios from "axios"
import { useState } from "react"

function Newsletter() {
    const [email, setEmail] = useState("");

    const handleEmail = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/newsletter", { email });
            console.log(response.data);
            
            window.location.reload()
            window.alert("Registrace proběhla úspěšně!")
        } catch (error) {
            console.error("Error v emailu:", error)
        }
    }

  return (

    <div className="w-full py-16 text-white px-4">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className="lg:col-span-2 my-4">
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Registrovat se k newsletteru?</h1>
                <p>Pro pravidelné informace vložte svoji e-mailovou adresu.</p>
            </div>
            <div className="my-4">
                <form onSubmit={handleEmail} className="flex flex-col sm:flex-row items-center justify-between w-full">
                    <input 
                    className="p-3 flex w-full rounded-md text-black" 
                    type="email" 
                    placeholder="Vložte e-mail" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <button 
                    type="submit"
                    className="bg-[#00df9a] w-[200px] rounded-md ml-4 font-medium my-6 py-3 text-black hover:text-[#00df9a] hover:bg-gray-700">REGISTROVAT</button>
                </form>
               <p>Registrací k newsletteru souhlasíte s <span className="text-violet-400 hover:text-violet-600 cursor-pointer">obchodními podmínkami</span>.</p>
            </div>

        </div>
    </div>
  )
}

export default Newsletter