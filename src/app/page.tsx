import About from "@/components/About";
import Events from "@/components/Events";
import Hero from "@/components/Hero";
import ImgSlider from "@/components/ImgSlider";
import Organizers from "@/components/Organizers";

export default function Home() {
  return (
    <div className="w-full flex-col flex justify-center items-center overflow-x-hidden ">
      <Hero />
      <ImgSlider/>
      <About />
      <Events />  
      <Organizers/>
    </div>
  );
}
