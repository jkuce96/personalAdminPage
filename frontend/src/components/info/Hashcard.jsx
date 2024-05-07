//former hashcard, rn ipv4 vs ipv6 card

import React from 'react'

const Hashcard = () => {
  return (
    <div className="absolute top-[3rem]">
    <div className="space-y-2 p-4">
  <div
    role="alert"
    className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-green-200 dark:hover:bg-green-800 transform hover:scale-105"
  >
    <svg
      stroke="currentColor"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 flex-shrink-0 mr-2 text-green-600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
      ></path>
    </svg>
    <p className="text-xs font-semibold">IPv4 - 32 bits, 4,3 miliardy adres</p>
  </div>

  <div
    role="alert"
    className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 dark:border-blue-700 text-blue-900 dark:text-blue-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-blue-200 dark:hover:bg-blue-800 transform hover:scale-105"
  >
    <svg
      stroke="currentColor"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 flex-shrink-0 mr-2 text-blue-600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
      ></path>
    </svg>
    <p className="text-xs font-semibold">
      IPv6 - 128 bits, 340 undecilionu adres.
    </p>
  </div>



  
</div>
</div>

  )
}

export default Hashcard