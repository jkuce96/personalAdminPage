import React from 'react'
import {
    FaInstagramSquare,
    FaFacebookSquare,
    FaTwitterSquare,
    FaGithubSquare
} from "react-icons/fa"

function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
            <h1 className="w-full text-3xl font-bold text-violet-500">Est. 1996</h1>
            <p className="py-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum mollitia dolorem alias suscipit quod dolore hic nisi delectus obcaecati tempore!</p>
            <div className="flex justify-between md:w-[75%] my-6">
                <FaFacebookSquare size={30}/>
                <FaInstagramSquare size={30}/>
                <FaTwitterSquare size={30}/>
                <FaGithubSquare size={30}/>
                
            </div>
        </div>

        
            <div className="lg:col-span-2 flex  justify-between mt-6">
                <div>
                    <h6 className="font-medium text-gray-400">Frontend</h6>
                    <ul>
                        <li className="py-2 text-sm">React.js</li>
                        <li className="py-2 text-sm">HTML + CSS</li>
                        <li className="py-2 text-sm">Tailwind</li>
                        <li className="py-2 text-sm">Vanilla JS</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400">Backend</h6>
                    <ul>
                        <li className="py-2 text-sm">Express.js</li>
                        <li className="py-2 text-sm">MySQL / PostgreSQL</li>
                        <li className="py-2 text-sm">GraphQL</li>
                        <li className="py-2 text-sm">JWT + auth</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400">Networking</h6>
                    <ul>
                        <li className="py-2 text-sm">CS50</li>
                        <li className="py-2 text-sm">Hosting / DNS</li>
                        <li className="py-2 text-sm">Marketing</li>
                        <li className="py-2 text-sm">Mailing</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400">A liiittle</h6>
                    <ul>
                        <li className="py-2 text-sm">Nest.js</li>
                        <li className="py-2 text-sm">Svelte</li>
                        <li className="py-2 text-sm">C / Go</li>

                    </ul>
                </div>
            </div>
        

        
    </div>
  )
}

export default Footer