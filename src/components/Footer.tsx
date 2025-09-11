'use client'
import { Facebook, Instagram, Youtube } from 'lucide-react'
import React, { JSX } from 'react'
import { Button } from './ui/button'
import { motion } from 'motion/react'


function Footer(): JSX.Element {
 return (
  <div className='w-full overflow-hidden'>
   <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className='w-full relative h-48  flex justify-center items-center border-t-4'>
    <div className='xl:w-2/4 w-3/4 flex flex-col justify-center items-center p-3'>
     <div className='flex flex-col xl:flex-row justify-between items-center w-full pt-8 '>
      <h1 className='text-white font-russo text-2xl '>MAGNUM</h1>
      <div>
       <Button variant="ghost"> <Facebook /> </Button>
       <Button variant="ghost"> <Instagram /> </Button>
       <Button variant="ghost"> <Youtube /> </Button>
      </div>
     </div>
     <div className='p-4 border-t-4 w-full flex justify-center items-center'>
      <h1 className='pb-5 text-center'> &copy; 2025 Magnum - BCA Department, Gogte College of Commerce. All rights reserved.</h1>
     </div>
    </div>
   </motion.div>
  </div>
 )
}

export default Footer
