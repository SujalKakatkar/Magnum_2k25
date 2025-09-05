'use client'
import React from 'react'
import { motion, Variants } from 'motion/react'

function Hero() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.8, duration: 0.8, ease: "easeOut" },
    }),
  };

  const letters = "MAGNUM".split("");
  const bca = 'Bachelor of Computer Applications'.split(" ");

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  });
  return (
    <div id='home' className="w-full min-h-[70vh] xl:min-h-screen overflow-x-hidden grid place-items-center">
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
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-[1rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] xl:text-[2.25rem] font-poppins font-semibold text-zinc-600 leading-none mb-2 ">
          Gogte College Of Commerce
        </motion.h3>

        <motion.h2
     variants={fadeUp}
     initial="hidden"
     animate="visible"
     custom={1}
     className="text-[1.75rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] font-poppins font-semibold text-zinc-500 leading-none mb-2">
     Bachelor of Computer Applications
    </motion.h2>

        <div className="flex justify-center">
          {letters.map((letter, index) => (
            <motion.h1
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
              className="text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[13rem] xl:text-[16rem] font-russo leading-none bg-gradient-to-r from-zinc-300 via-zinc-400 to-zinc-700 bg-clip-text text-transparent"
            >
              {letter}
            </motion.h1>
          ))}
        </div>

        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="text-[0.7rem] sm:text-[1.25rem] md:text-[1.35rem] lg:text-[1.45rem] xl:text-[1.5rem] font-poppins text-zinc-400 mt-4">
          A fusion of creativity, technology, and talent.
        </motion.span>
      </div>
    </div>

  )
}

export default Hero
