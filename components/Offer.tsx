import Image from "next/image";
import React from "react";
const Offer = () => {
  return (
    <div className="bg-sky-300 mb-20 h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[56vh]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">ArtByte</h1>
        <p className="text-white xl:text-xl">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <button className="bg-sky-500 text-white rounded-md py-3 px-6">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/my2.PNG" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;