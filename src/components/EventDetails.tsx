
'use client'

import React from 'react'
import { motion, Variants } from 'motion/react'
import Image from 'next/image'
import { EventType } from '@/data/contants'

type EventProps = {
  event: EventType
}

function EventDetails({ event }: EventProps) {
  const { title, logoImg, tagLine, description, rules, mentors, heads, requirements, skills } = event;
  const splitDescription: string[] | undefined = description?.split('. ')




  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.5, ease: "easeOut" },
    }),
  };



  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className="grid place-items-center h-screen w-screen">
        {/* Background Image with Blur */}
        {logoImg && <Image
          src={logoImg}
          alt={`${title} logo background`}
          fill
          style={{ objectFit: "cover" }}
          className="col-start-1 row-start-1 filter blur-lg opacity-40"
          priority
        />}
        {/* Overlay */}
        <div className="col-start-1 row-start-1 h-full w-full bg-black/20"></div>
        {/* Foreground Content */}
        <div className="col-start-1 row-start-1 flex flex-col items-center justify-center  text-center">
          {logoImg && <Image
            src={logoImg}
            alt={`${title} logo`}
            width={480}
            height={300}
            className="h-[30rem] rounded-2xl object-contain"
          />}
          <motion.h1
            className="text-4xl xl:text-7xl py-3 font-russo md:text-5xl"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            {title}
          </motion.h1>
          <motion.h2
            className="w-4/5 text-center font-poppins font-semibold text-zinc-400 xl:text-xl"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            {tagLine}
          </motion.h2>
        </div>
      </div>
      <div className='py-10 w-full flex flex-col items-center'>
        {/* description */}
        {description && <motion.div id='description'
          className='py-8 w-3/4 md:w-2/4 text-center font-poppins' variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          <div className="mt-5 space-y-3 text-zinc-400 lg:text-xl leading-relaxed">
            <h3 className='text-zinc-100/85 font-semibold text-lg md:text-2xl  font-poppins'>Description</h3>
            {splitDescription?.map((sentence, idx) => (
              <p className='mt-6' key={idx}>{sentence}.</p>
            ))}
          </div>
        </motion.div>}
        {/* rules */}
        {rules && rules?.length > 0 && <motion.div id='rules' className='py-8 text-center w-3/4 md:w-2/4' variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h3 className='text-zinc-100/85 font-semibold text-lg md:text-2xl  font-poppins'>Rules</h3>
          <ul>
            {rules.map((rule, idx) => (
              <li key={idx} className='text-zinc-400 font-poppins lg:text-xl text-center'>{rule}</li>
            ))}
          </ul>
        </motion.div>}

        {/* skills */}
        {skills && <motion.div id='skills' className='py-8 text-center w-3/4 md:w-2/4' variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h3 className='text-zinc-100/85 font-semibold text-lg md:text-2xl  font-poppins'>Skills</h3>
          <ul>
            {skills.map((skill, idx) => (
              <li key={idx} className='text-zinc-400 font-poppins lg:text-xl text-center'>{skill}</li>
            ))}
          </ul>
        </motion.div>}
        {/* requirments */}
        {requirements && <motion.div className='py-8 text-center w-3/4 md:w-2/4' variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h3 className='text-zinc-100/85 font-semibold text-lg md:text-2xl font-poppins'>Requirements</h3>
          <p className='text-zinc-400 py-2 lg:text-xl font-poppins'>{requirements}</p>
        </motion.div>}
        {/* mentors  */}
        <motion.div id='mentors' className='py-8 text-center w-3/4 md:w-2/4' variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h3 className='text-zinc-100/85 font-semibold text-3xl font-poppins'>Mentors</h3>
          <ul className='py-2 flex flex-col lg:flex-row items-center justify-center gap-10'>
            {mentors?.map((mentor, idx) => (
              <li key={idx} className='text-zinc-400  lg:text-3xl font-bold text-2xl font-poppins flex flex-col justify-center items-center gap-2'>
                <div className='h-60 w-60  border-5 border-zinc-600 overflow-hidden flex rounded-full justify-center items-center '>
                  {mentor.img && (
                   <img src={mentor.img} loading='lazy' alt="" className='object-cover' />
                    
                  )}
                </div>
                <h1>{mentor.name}</h1>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div id='heads' className='py-8 text-center w-3/4 md:w-2/4' variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>

          <h3 className='text-zinc-100/85 font-semibold text-3xl font-poppins'>Heads</h3>
          <ul className='py-2 flex flex-col lg:flex-row justify-center items-center gap-10'>
            {heads?.map((head, idx) => (
              <li key={idx} className='text-zinc-400  lg:text-3xl font-bold text-2xl font-poppins flex flex-col justify-center items-center  gap-5'>
                <div className='w-60 h-60 overflow-hidden border-4 border-zinc-600 rounded-full flex justify-center items-center object-center '>
                   {head.img && (
                    <img src={head.img} loading='lazy' alt="" className='h-auto w-auto object-cover' />
                  )}
                </div>
                <h1>{head.name}</h1>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

export default EventDetails
