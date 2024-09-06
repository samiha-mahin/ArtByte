import React from 'react'
import Image from 'next/image'
import styles from './footer.module.css'

const footer = () => {
  return (
   <div className='bg-sky-100'>
    <div className = 'md:h-24 pt-6 py-4 px-8 flex justify-between items-center'>
    <Image src = "/logo.png" height={100} width={100} alt="logo"/>
    <p>@ALL RIGHTS ARE RESERVED</p>
    </div>
 </div>
  )
}

export default footer