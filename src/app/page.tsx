import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Navbar from "@/components/Navbar";
import PersonalCard from "@/components/PersonalCard";
import Projects from "@/components/Projects";

export default function Home() {
  return <div>
      <Navbar/>
      <PersonalCard/>
      <About/>
      <Projects/>
      <ContactMe/>
  </div>
   
}
