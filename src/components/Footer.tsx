import { Facebook, Instagram, Youtube } from 'lucide-react'
import React, { JSX } from 'react'
import { Button } from './ui/button'

function Footer(): JSX.Element {
 return (
  <div className='w-screen h-48 bg-zinc-900 flex justify-center items-center border-t overflow-hidden'>
   <div className='xl:w-2/4 w-3/4 flex flex-col justify-center items-center p-3'>
    <div className='flex flex-col xl:flex-row justify-between items-center w-full pt-8 '>
     <h1 className='text-white font-russo text-2xl '>MAGNUM</h1>
     <div>
      <Button variant="ghost"> <Facebook /> </Button>
      <Button variant="ghost"> <Instagram /> </Button>
      <Button variant="ghost"> <Youtube /> </Button>
     </div>
    </div>
    <div className='p-4 border-t w-full flex justify-center items-center'>
     <h1 className='pb-5 text-center'>  2025 Magnum - BCA Department, Gogte College of Commerce. All rights reserved.</h1>
    </div>
   </div>
  </div>
 )
}

export default Footer
