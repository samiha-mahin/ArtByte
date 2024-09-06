import Link from "next/link";
import React from 'react'
import { FaCartPlus } from "react-icons/fa";

const Cart = () => {
  return (
    <Link href="/cart" className="flex gap-3">
    <div className="relative w-8 h-8">
        <FaCartPlus className=' text-sky-400 cursor-pointer'size={30}/>
    </div>
    <span> Cart(3)</span>
    </Link>
  )
}

export default Cart