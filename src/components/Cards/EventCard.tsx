'use client'
import React, { JSX } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

import { Button } from '../ui/button'
import { useRouter } from 'next/navigation';
import Link from 'next/link'


function EventCard({
  id,
  title,
  tagLine,
  routeName,
  logoImg,
}: {
  id: number;
  title: string;
  tagLine: string;
  routeName: string;
  logoImg?: string;
}): JSX.Element {
  const route = useRouter()
  return (
    <Card  className="w-full object-cover overflow-hidden h-[26rem]   bg-blue border-4">
      {/* Organizer Image */}
      <div className="w-full flex justify-center items-center  overflow-hidden">
        <Avatar className='w-50 h-50 border '>
          <AvatarImage className='object-cover ' src={logoImg || "https://github.com/shadcn.png"} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      {/* Content */}
      <CardContent className="text-center flex justify-center items-center flex-col gap-3">
        <h3 className="text-2xl text-zinc-100/80 font-russo">{title}</h3>
        <p className="text-sm text-zinc-500">{tagLine}</p>
        <Button className='cursor-pointer'
          // onClick={() => route.push(`/${routeName}/${id}`)}
          variant="outline">
          <Link href={`/${routeName}/${id}`}>More Info</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

export default EventCard
