import React, { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from 'motion/react'

function OrgCard({ name, role, photo }: { name: string, role: string, photo: string }) {
 const [isSmUp, setIsSmUp] = useState(false);

 useEffect(() => {
  const checkScreen = () => {
   setIsSmUp(window.innerWidth >= 640); // Tailwind's sm breakpoint is 640px
  };
  checkScreen();
  window.addEventListener('resize', checkScreen);
  return () => window.removeEventListener('resize', checkScreen);
 }, []);

 return (
  <div className='relative flex flex-col sm:flex-row items-center gap-3 w-full'>
   <section className='z-10'>
    <Avatar className='sm:w-25 sm:h-25 h-40 w-40 '>
     <AvatarImage src={photo} className='object-cover' />
     <AvatarFallback>CN</AvatarFallback>
    </Avatar>
   </section>
   {isSmUp ? (
    <motion.section
     initial={{ opacity: 0, x: -100 }}
     whileInView={{ opacity: 1, x: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 1, delay: 0.2 }}
     className='w-full px-4 sm:absolute sm:left-25 sm:top-1/2 sm:-translate-y-1/2 sm:z-0 sm:w-auto text-center sm:text-left'
    >
     <h1 className='font-bold text-2xl sm:text-lg'>{name}</h1>
     <p className='text-zinc-500'>{role}</p>
    </motion.section>
   ) : (
    <section className='w-full px-4 text-center'>
     <h1 className='font-bold text-2xl'>{name}</h1>
     <p className='text-zinc-500'>{role}</p>
    </section>
   )}
  </div>
 )
}

export default OrgCard
