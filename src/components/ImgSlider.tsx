'use client'
import React from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { imageData } from '@/data/imageData'
import Autoplay from 'embla-carousel-autoplay'
function ImgSlider() {
  return (
    <div className='min-h-[80vh] xl:min-h-screen w-full flex justify-center items-center overflow-hidden'>
      <div className='xl:w-4/6 w-5/6  flex flex-col gap-5 text-center justify-center items-center'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className='text-4xl xl:text-5xl py-4 font-bold'>MAGNUM-2024</motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className='w-full flex justify-center items-center overflow-hidden '
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className=''>
            <CarouselContent className=''>
              {imageData.map((image, index) => (
                <CarouselItem key={index} className='basis-full flex justify-center items-center '>
                  <Image src={image.src} alt={image.alt} width={960} height={300} className='object-cover h-auto w-auto rounded-2xl border-4 grayscale opacity-85 border-zinc-700' />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </div>
  )
}

export default ImgSlider
