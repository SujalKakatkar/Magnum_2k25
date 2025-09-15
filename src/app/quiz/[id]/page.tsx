import EventDetails from "@/components/EventDetails";
import { eventData } from "@/data/contants";
import { Suspense } from "react";

export default async function QuizEventPage({
 params,
}: {
 params: Promise<{ id: string }>;
}) {
 const resolvedParams = await params;
 const event = eventData.find((e) => e.id === Number(resolvedParams.id));
 if (!event) {
  return (
   <div className="min-h-screen flex flex-col justify-center items-center">
    <h1 className="text-xl font-bold">Event not found</h1>
   </div>
  );
 }
 return (
  <div className="min-h-screen flex flex-col justify-center items-center">
   <Suspense fallback={<div className="fixed inset-0 flex items-center justify-center bg-black/60">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent" />
   </div>}>
    <EventDetails event={event} />
   </Suspense>
  </div>
 );
}


