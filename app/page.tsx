import React, { Children } from 'react'
import Image from 'next/image'
import Hero from '@/components/Hero'
import Featured from "@/components/Featured"
import Offer from "@/components/Offer"
import Slider from '@/components/Slider'


const page = () => {
  return (
    <main>
     <Slider/>
    {/* <Hero/> */}
    <Featured/>
    <Offer/>
    </main>
  )
}

export default page