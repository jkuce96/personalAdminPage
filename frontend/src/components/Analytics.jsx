//3 page slider 

import React from 'react'
import Laptop from "../assets/laptop.jpg"
import { useState } from "react"

function Analytics() {
  const texts = [
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, 1/3.",
      obsah: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that"
    },
    {
      title: "Deserunt consequuntur architecto omnis placeat ullam quisquam odio 2/3.",
      obsah: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved"
    },
    {
      title: "Maiores et fugit rerum recusandae sequi amet voluptatum voluptate 3/3.",
      obsah: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  //iterovani pres current vs prev index 
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < texts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">

        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="randomObrazek" />

        <div className="flex flex-col justify-center">

          <p className="text-violet-600 font-bold">RANDOM 3 PAGE SLIDER</p>

          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">{texts[currentIndex].title}</h1>

          <p className="">{texts[currentIndex].obsah}</p>

            <div className="button flex md:flex-row md:gap-4 ">

              <button onClick={handlePrevious} className="bg-violet-500 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white  hover:bg-violet-700">PŘEDCHOZÍ
              </button>
              
              <button onClick={handleNext} className="bg-violet-500 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white hover:bg-violet-700">DALŠÍ
              </button>

            </div>
        </div>

      </div>
    </div>
  )
}

export default Analytics