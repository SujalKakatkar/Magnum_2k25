import React, { JSX } from 'react'
import EventCard from './Cards/EventCard'

function Events():JSX.Element {
  return (
    <div id='events' className='min-h-screen w-full flex justify-center items-center flex-col  py-10 gap-5'>
      <h2 className='text-5xl font-bold'>Events</h2>
    <div className='flex flex-wrap justify-center items-center gap-5 overflow-x-hidden '>
       <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
    </div>
    </div>
  )
}

export default Events
