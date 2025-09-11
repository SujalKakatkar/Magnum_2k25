'use client'
import React from 'react'
import { motion } from 'motion/react'
import { organizersData } from '../data/contants'
import OrgCard from './Cards/OrgCard'

function Organizers() {



  return (
    <div className='min-h-[60vh] w-screen my-44 xl:m-0 flex flex-col gap-5 justify-center items-center' id='Organizer'>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='text-5xl font-poppins font-bold text-center'>Event Co-ordinators</motion.h1>
      <div
        className='w-full xl:w-3/4 flex flex-wrap justify-center items-center'
      >
        {organizersData.map((org, index) => (
          <motion.div key={index} className='md:w-2/5 xl:w-2/5 w-3/4  rounded-xl hover:bg-zinc-900 hover:shadow-2xl/20 sm:rounded-full m-4 border-4 border-zinc-900 flex justify-center items-center p-4 overflow-hidden box-border'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, }}
            transition={{ duration: 0.5, delay: index * 0.2 }}>
            <OrgCard {...org} />
          </motion.div>
        ))}
      </div>
    </div >
  )
}

export default Organizers
