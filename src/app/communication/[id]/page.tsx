import EventDetails from "@/components/EventDetails";
import { eventData } from "@/data/contants";



export default async function CommunicationEventPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const event = eventData.find(e => e.id === Number(resolvedParams.id));

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold">Event not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <EventDetails event={event} />
    </div>
  );
}
