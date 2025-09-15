import { devlopers } from '@/data/contants'
import React from 'react'

function Developers() {
 return (
  <div id='dev' className='min-h-[40vh] w-full flex justify-center items-center overflow-hidden'>
   <div className=' w-2/3 xl:1/2 flex flex-col  justify-center items-center gap-6'>
    <h1 className='text-5xl font-bold w-3/4 xl:w-full text-white text-center mb-4'>Developers</h1>
    <ul className='w-3/4  flex flex-col lg:flex-row gap-5 lg:gap-0  justify-between items-center'>
     {devlopers?.map((dev, i) => (
      <li key={i} className='flex flex-col gap-1 justify-center items-center'>
       <h2 className='text-zinc-400  lg:text-3xl font-bold text-3xl text-center font-poppins'>{dev.name}</h2>
       <span className='text-zinc-500 font-semibold'>{dev.contact}</span>
      </li>
     ))}
    </ul>
   </div>
  </div>

 )
}

export default Developers
