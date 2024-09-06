"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const data = [
    {
      id:1,
      image: "/painter.jpg",
  
    },
    {
      id:2,
      image: "/art-supplies-and-painting.jpg",
  
    },
    {
      id:3,
      image: "/exhibition3.jpg",
  
    },
  ]

const Slider = () => {
  const [currentSlide, setcurrentSlide] = useState(0)
   useEffect (()=> {
      const interval = setInterval (()=>
        setcurrentSlide ((prev)=>(prev == data.length-1 ? 0 :prev+1))
      ,2000)
      return ()=> clearInterval (interval);
  },[])
  return (
    <div className='flex flex-col h-[calc(100vh-6rem) md:h-[calc(100vh-9rem)] lg:flex-row'>
        {/* Text Container */}
    <div className='flex-1 flex flex-col items-center gap-8 ml-4 mt-4 mb-10 font-bold lg:h-full'>
     
       <p className='uppercase font-medium'>Welcome To</p>  
       <h2 className='text-4xl sm:text-6xl font-bold'>
        Art<span className='text-sky-300'>Byte</span>
       </h2>
       <p className='text-gray-500 text-[14px] sm:text-[16px]'>A place for discover, purchase,or lease breathtaking art, curated for every taste <br/>
       Artists showcase their masterpieces, while art lovers find their perfect match</p>
       <button className='bg-sky-400 text-white px-6 py-2 rounded-3xl'>View More</button>
      
    </div>
        {/* image container */}
        <div className='w-full h-1/2 relative lg:w-1/2 '>
            <img src= {data[currentSlide].image} alt='' className='object-cover'></img>
        </div>
    </div>
  )
}

export default Slider