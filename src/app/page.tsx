import About from "@/components/About";
import Events from "@/components/Events";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="w-screen flex-col flex justify-center items-center overflow-x-hidden ">
      <Hero />
      <About />
      <Events/>  
    </div>
  );
}
