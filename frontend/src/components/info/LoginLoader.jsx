import React from 'react'

const LoginLoader = () => {
  return (
    <div
  className="mx-auto bg-gray-950 rounded-none absolute top-0 left-0 w-full drop-shadow-xl h-full "
>
  <div className="bg-[#333] flex items-center p-[5px] text-whitec relative">
    <div className="flex absolute left-3">
      <span className="h-3.5 w-3.5 bg-[#ff605c] rounded-xl mr-2"></span>
      <span className="h-3.5 w-3.5 bg-[#ffbd44] rounded-xl mr-2"></span>
      <span className="h-3.5 w-3.5 bg-[#00ca4e] rounded-xl"></span>
    </div>
    <div className="flex-1 text-center text-white">login status</div>
  </div>
  <div className="p-2.5 text-[#0f0]">
    <div className=" ">
      <span className="mr-2">Ověřuji přihlášení</span>
      <span className="animate-[ping_1.5s_0.5s_ease-in-out_infinite]">.</span>
      <span className="animate-[ping_1.5s_0.7s_ease-in-out_infinite]">.</span>
      <span className="animate-[ping_1.5s_0.9s_ease-in-out_infinite]">.</span>
    </div>
  </div>
</div>

  )
}

export default LoginLoader