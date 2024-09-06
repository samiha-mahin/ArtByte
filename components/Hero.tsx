import React from 'react'
import Image from 'next/image'
const hero = () => {
  return (
    <div className='relative min-h-screen'>
    <Image className='lg:w-[880px] xl:w-[780px]  right-0 top-1 h-auto absolute -z-10 opacity-70' 
    src="/painter.png" width={1000} height={600}  alt='hero bg'/>
    <div className='container h-[calc(100vh-200px)] grid items-center'>
      <div className='space-y-4 bg-white w-fit p-4'>
       <p className='uppercase font-medium'>Welcome To</p>  
       <h2 className='text-4xl sm:text-6xl font-bold'>
        Art<span className='text-sky-300'>Byte</span>
       </h2>
       <p className='text-gray-500 text-[14px] sm:text-[16px]'>A place for discover, purchase,or lease breathtaking art, curated for every taste <br/>
       Artists showcase their masterpieces, while art lovers find their perfect match</p>
       <button className='bg-sky-400 text-white px-6 py-2 rounded-3xl'>View More</button>
      </div> 
    </div>
  </div>
  )
}

export default hero