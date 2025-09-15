'use client'
import React from 'react'
import { motion, Variants } from 'motion/react'
import Image from 'next/image';

function Hero() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.4, ease: "easeOut" },
    }),
  };

  const letters = "MAGNUM".split("");



  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.4 + 1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  }
  return (
    <div id='home' className="w-full min-h-[70vh] xl:min-h-screen grid place-items-center border">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover col-start-1 row-start-1 opacity-50  filter blur-sm"
      >
        <source src="/videos/b-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="w-full h-full bg-black/60 col-start-1 row-start-1"></div>

      {/* Foreground content */}
      <div className="flex flex-col justify-center items-center h-full z-10 col-start-1 row-start-1 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <Image
            src={'/photos/gcclogo.webp'}
            width={100}
            height={100}
            alt="GCC Logo"
            className='py-2 grayscale'
          />
        </motion.div>
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-[1rem] md:text-[1.25rem] lg:text-[1.75rem] font-poppins font-semibold text-zinc-600 leading-none mb-1">
          Karnatak Law Society&apos;s
        </motion.span>
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-[1rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] xl:text-[2.25rem] font-poppins font-semibold text-zinc-600 leading-none mb-2 ">
          Gogte College Of Commerce
        </motion.h3>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-[1.75rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] font-poppins font-semibold text-zinc-500 leading-none mb-2">
          Bachelor of Computer Applications
        </motion.h2>
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className='font-poppins text-zinc-500 font-semibold text-2xl py-3'>Presents</motion.h3>

        <div className="flex justify-center">
          {letters.map((letter, index) => (
            <motion.h1
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={letterVariants}

              className="text-[4rem]  sm:text-[6rem] md:text-[10rem] lg:text-[13rem] xl:text-[16rem] font-russo leading-none bg-gradient-to-r from-zinc-700 via-zinc-500 to-zinc-300 bg-clip-text text-transparent"
            >
              {letter}
            </motion.h1>
          ))}
        </div>

        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={18}
          className="text-[0.7rem] sm:text-[1.25rem] md:text-[1.35rem] lg:text-[1.45rem] xl:text-[1.5rem] font-poppins text-zinc-400 mt-4">
          A fusion of creativity, technology, and talent.
        </motion.span>
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={20}
          className="text-[0.7rem] sm:text-[1.25rem] md:text-[1.35rem] lg:text-[1.45rem] xl:text-[1.5rem] font-poppins text-zinc-400 mt-4">
          19<sup>th</sup> - 20<sup>st</sup> September 2025
        </motion.span>
      </div>
    </div>

  )
}

export default Hero
// add black boxes to magnum title