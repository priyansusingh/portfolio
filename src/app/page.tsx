import About from "@/components/About";
import Navbar from "@/components/Navbar";
import PersonalCard from "@/components/PersonalCard";

export default function Home() {
  return <div>
      <Navbar/>
      <PersonalCard/>
      {/* <ResumeButton/> */}
      <About/>
  </div>
   
}
