import React from 'react'
import { useState } from "react"

function Weathercard() {
    const [city, setCity] = useState("")
    const [weatherData, setWeatherData] = useState(null)
    const [loading, setLoading] = useState(false)

    const apiKEY = "c622bfb7fa4c707e27782cf2dfca0152"
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKEY}`;

    const fetchPocasi = async () => {
        setLoading (true);

        try {
            const response = await fetch(apiURL);
            const data = await response.json();

            if (data.cod === 200) {
               const celsius = data.main.temp - 273.15;
               const roundedCelsius = celsius.toFixed(2);

               const newData = { ...data, main: { ...data.main, temp: roundedCelsius } }
                setWeatherData(newData);
                console.log(weatherData)
                
                
            } else {
                console.error("error fetchování počasí:", data.message)
                alert("Toto město neexistuje, zadej reálné")
            }
        } catch (error) {
            console.error("Error při fetchování 2:", error);
        }
        setLoading(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchPocasi();
    }

  return (
    <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105  duration-300">
                
             <h2 className="text-2xl font-bold text-center py-8">API (weather check)</h2>
             {loading ? (<p className="text-center text-4xl font-bold">loading...</p>) : weatherData ? (<div>
             <p className="text-center text-4xl font-bold">{weatherData.name}</p>
            <div className="text-center font-medium">
                <p className="py-2 border-b mx-8 mt-8">Teplota: {weatherData.main.temp}°C </p>
                <p className="py-2 border-b mx-8">Vlhkost: {weatherData.main.humidity} %</p>
                <p className="py-2 border-b mx-8">Tlak: {weatherData.main.pressure} hPa</p>    
            </div>
            </div>) : (<div>
             <p className="text-center text-4xl font-bold">Město</p>
            <div className="text-center font-medium">
                <p className="py-2 border-b mx-8 mt-8">Teplota</p>
                <p className="py-2 border-b mx-8">Vlhkost</p>
                <p className="py-2 border-b mx-8">Tlak</p>    
            </div>
            </div>)}

             {/* <div>
             <p className="text-center text-4xl font-bold">Město</p>
            <div className="text-center font-medium">
                <p className="py-2 border-b mx-8 mt-8">Teplota</p>
                <p className="py-2 border-b mx-8">Vlhkost</p>
                <p className="py-2 border-b mx-8">Tlak</p>    
            </div>
            </div> */}
            <form onSubmit={handleSubmit} className="flex flex-row items-center gap-4 px-4">
                <input 
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Zadej město"
                className="text-center w-1/2 py-3 border border-teal-200 rounded-lg"
                />
            <button type="submit" className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Zjistit počasí</button>
            </form>
            </div>
  )
}

export default Weathercard