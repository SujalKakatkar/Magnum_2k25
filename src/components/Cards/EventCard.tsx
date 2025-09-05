import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
 Card,
 CardAction,
 CardContent,
 CardDescription,
 CardFooter,
 CardHeader,
 CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { div } from 'motion/react-client'
import { Button } from '../ui/button'

function EventCard() {
 return (
  <Card className="min-w-85 shadow-lg rounded-xl overflow-hidden  origin-bottom">
   {/* Organizer Image */}
   <div className="w-full flex justify-center items-center h-48 overflow-hidden">
    <Avatar className='w-32 h-32'>
     <AvatarImage src="https://github.com/shadcn.png" />
     <AvatarFallback>CN</AvatarFallback>
    </Avatar>
   </div>
   {/* Content */}
   <CardContent className="text-center">
    <h3 className="text-2xl font-semibold">Event title</h3>
    <p className="text-sm text-zinc-500">Event description</p>
      <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="mt-3">
              More Info
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-lg max-w-3/4">
            <DialogHeader>
              <DialogTitle>Event Details</DialogTitle>
              <DialogDescription>
                Here you can add more information about the event. This can
                include date, time, location, or any other details.
              </DialogDescription>
            </DialogHeader>

            <p className="mt-4 text-zinc-700">
              Additional content about the event goes here. You can include
              images, links, or any extra information.
            </p>
          </DialogContent>
        </Dialog>
    
   </CardContent>
  </Card>
 )
}

export default EventCard
