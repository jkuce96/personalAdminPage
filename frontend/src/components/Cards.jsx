import React from 'react';
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import Diff from "./library/Diff";

const Cards = () => {
  return (
    <div className="w-full py-[3rem] px-4 bg-white">
        <div className="max-w-[1240px] mx-auto px-24">
            <Diff />
        </div>
    </div>
  )
}

export default Cards