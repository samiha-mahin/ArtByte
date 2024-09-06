"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import {AiOutlineMenu} from 'react-icons/ai'
import { RxCross2 } from "react-icons/rx";
import Cart from '@/components/Cart';

const links =[
  {id : 1,tittle :"Homepage",url : "/" },
  {id : 2,tittle :"About",url : "/" },
  {id : 3,tittle :"Art",url : "/" },
  {id : 4,tittle :"Contact",url : "/" }
]

const menu = () => {
  const [open, setOpen] = useState(false);
  const user = false;
  return (
    <div>
      {!open ? ( <AiOutlineMenu className=' text-sky-400 cursor-pointer' size={30} onClick={()=>setOpen(true)}/> 
      ) : (
         <RxCross2 className=' text-sky-400 cursor-pointer' size={30}  onClick={()=>setOpen(false)}/>
      )}
      { open && (
      <div className='bg-sky-300 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10'>
      { links.map(item =>(
        <Link href={item.url} key={item.id} onClick={()=>setOpen(false)}> {item.tittle} </Link>
      ))}
      {!user ?( <Link href="/login" onClick={()=>setOpen(false)}> Login </Link> ) : (
       <Link href="/orders" onClick={()=>setOpen(false)}> Orders </Link>)}
       <Link href="/cart" onClick={()=>setOpen(false)}>
        <Cart/>
       </Link>
      </div>)}
    </div>
  )
  }

export default menu