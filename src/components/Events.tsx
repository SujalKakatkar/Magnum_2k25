'use client'
import React, { JSX, useRef } from 'react'
import EventCard from './Cards/EventCard'
import { motion } from 'motion/react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { eventData } from '@/data/contants'

function Events(): JSX.Element {
  const cards = Array(8).fill(null);
  const autoplay = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }),)
  return (
    <div id='events' className='min-h-[80vh] w-full flex justify-center items-center flex-col overflow-hidden  gap-10'>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className='text-5xl font-bold'>Events</motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full flex justify-center items-center overflow-hidden ">
        <Carousel
          opts={{
            align: 'start',
            loop: true
          }}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={() => autoplay.current.play()}
          className=" w-4/6 xl:w-3/6 flex justify-center items-center ">
          <CarouselContent className="">
            {eventData.map((event, idx) => (
              <CarouselItem key={idx} className="basis-full xl:basis-1/2 flex justify-center items-center ">
                <EventCard {...event} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    </div>
  )
}

export default Events
