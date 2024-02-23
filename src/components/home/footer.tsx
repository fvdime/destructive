import React from 'react'
import Logo from '../shared/logo'
import Image from 'next/image'

export default function Footer() {
  
  return (
    <div className='h-screen w-full bg-secondary text-gray-50 wrapper'>
      <div className='flex flex-col justify-center items-center gap-4 p-4 max-w-screen-lg mx-auto md:px-0'>
        <Image src="/a.jpg" alt='' width={100} height={100} className='logo'/>
        <Logo/>
      </div>
    </div>
  )
}
