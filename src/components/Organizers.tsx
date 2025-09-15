'use client'
import React from 'react'
import { motion } from 'motion/react'
import OrgCard from './Cards/OrgCard'
import { organizersData, students } from '@/data/contants'

function Organizers() {



  return (
    <div className='sm:min-h-screen py-10 dotted w-full xl:m-0 flex flex-col gap-10 justify-center items-center' id='Organizer'>
      <div className='flex flex-col w-full justify-center items-center'>
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
            <motion.div key={index} className='md:w-2/5 xl:w-2/5 w-3/4  rounded-xl  hover:shadow-2xl/20 sm:rounded-full m-4 border-2 bg-zinc-950 flex justify-center items-center p-4 overflow-hidden box-border'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, }}
              transition={{ duration: 0.5, delay: index * 0.2 }}>
              <OrgCard {...org} />
            </motion.div>
          ))}
        </div>
        </div>
        <div className='w-full flex flex-col justify-center items-center'>
           <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='text-5xl font-poppins font-bold text-center'>Event Co-ordinators</motion.h1>
        <div
          className='w-full xl:w-3/4 flex flex-wrap justify-center items-center'
        >
          {students.map((org, index) => (
            <motion.div key={index} className='md:w-2/5 xl:w-2/5 w-3/4  rounded-xl  hover:shadow-2xl/20 sm:rounded-full m-4 border-2 bg-zinc-950 flex justify-center items-center p-4 overflow-hidden box-border'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, }}
              transition={{ duration: 0.5, delay: index * 0.2 }}>
              <OrgCard {...org} />
            </motion.div>
          ))}
        </div>
        </div>
      
    </div >
  )
}

export default Organizers
