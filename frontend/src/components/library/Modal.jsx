import React from 'react'

function Modal({ email }) {
  return (
   <>
   
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-black">Registrováno!</h3>
    <p className="py-2 text-black">Děkujeme za registraci 💜</p>
    <p className=" text-black">Váš e-mail: <span className="text-violet-800 font-bold">{email}</span></p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
   </>
  )
}

export default Modal