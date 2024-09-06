import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-sky-500 p-4 flex items-center justify-between border-b-20 bg-sky-100 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/art">Art</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* LOGO */}
      <div className = 'flex justify-between items-center'>
      <Image src = "/logo.png" height={100} width={100} alt="logo"/>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-sky-300 px-1 rounded-md">
          <span>123 456 78</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <Link href="/cart"><FaCartPlus className=' text-sky-400 cursor-pointer'size={30}/></Link>
      </div>
    </div>
  );
};

export default Navbar;