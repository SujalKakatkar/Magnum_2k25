
'use client'
import { devlopers } from '@/data/contants'
import React from 'react'
import { motion } from 'motion/react'

function Developers() {
 return (
  <div id='dev' className='min-h-[40vh] w-full flex justify-center items-center overflow-hidden'>
   <div className=' w-2/3 xl:1/2 flex flex-col text-center  justify-center items-center gap-6'>
    <motion.h1
     initial={{ opacity: 0, y: -20 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 1.5, ease: "easeOut" }}
     className='text-5xl font-bold  xl:w-full text-white text-center mb-4'>Developers</motion.h1>
    <ul className='w-3/4  flex flex-col lg:flex-row gap-5 lg:gap-0  justify-between items-center'>
     {devlopers?.map((dev, i) => (
      <li key={i} className='flex flex-col gap-1 justify-center items-center'>
       <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className='text-zinc-400  lg:text-3xl font-bold text-3xl text-center font-poppins'>{dev.name}</motion.h2>
       <motion.span
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className='text-zinc-500 font-semibold'>{dev.contact}</motion.span>
      </li>
     ))}
    </ul>
   </div>
  </div>

 )
}

export default Developers
