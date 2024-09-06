import React from 'react'
import Image from 'next/image'
import Menu from '@/components/Menu'
import Link from 'next/link'
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  const user = false
  return (
    <div className='bg-sky-100 container pt-6 py-4 px-8'>
        <div className = 'flex justify-between items-center'>
        <Image src = "/logo.png" height={100} width={100} alt="logo"/>
        <ul className='md:flex hidden gap-8 items-center font-semibold text-[14px]'>
          <Link href="/cart"><FaCartPlus className=' text-sky-400 cursor-pointer'size={30}/></Link>
           <button className='bg-sky-400 text-white px-6 py-2 rounded-3xl'>SignUp</button>
           <Menu/>
        </ul>
       </div>
    </div>
  )
}

export default Navbar