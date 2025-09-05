'use client'
import React, { JSX } from 'react'
import { motion } from 'motion/react'
function About(): JSX.Element {
 const text = "MAGNUM is a one-of-a-kind festival that blends creativity, technology, and culture into a single immersive experience. From coding challenges and AI explorations to marketing, content creation, and design, the fest brings together enthusiasts from all domains. Participate in quizzes, group events, data analysis competitions, and cybersecurity challenges, and celebrate innovation in every form. Magnum Black Box is where ideas meet action, and every talent finds its spotlight."
 const container = {
  hidden: {},
  show: {
   transition: {
    staggerChildren: 0.05, // stagger per word
   },
  },
 };

 const wordVariant = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.1 } },
 };

 return (
  <div id='about' className='min-h-[50vh] py-20 w-full flex justify-center items-center'>
   <div className='flex justify-center items-center flex-col gap-5'>
    <motion.h1
     initial={{ opacity: 0, y: -20 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.8, ease: "easeOut" }}
     className='text-2xl xl:text-4xl font-bold text-white text-center mb-4'>About Magnum 2025</motion.h1>
    <motion.div
     className="text-lg leading-relaxed w-1/2 text-center"
     variants={container}
     initial="hidden"
     whileInView="show"
    >
     {text.split(" ").map((word, index) => (
      <motion.span key={index} className="inline-block mr-1" variants={wordVariant}>
       {word}
      </motion.span>
     ))}
    </motion.div>
    {/* <motion.p
     initial={{ opacity: 0, y: -20 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.8, ease: "easeOut" }}
    className='text-xl/relaxed xl:text-2xl/relaxed text-center w-2/3'
    >
     MAGNUM is a one-of-a-kind festival that blends creativity, technology, and culture into a single immersive experience. From coding challenges and AI explorations to marketing, content creation, and design, the fest brings together enthusiasts from all domains. Participate in quizzes, group events, data analysis competitions, and cybersecurity challenges, and celebrate innovation in every form. Magnum Black Box is where ideas meet action, and every talent finds its spotlight.
    </motion.p> */}
   </div>
  </div>
 )
}

export default About
