import Navbar from "@/components/navbar"
import Home from "@/components/hero"
import About from "@/components/about"
import Project from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
 
export default function App(){
  return(
    <main>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Skills />
      <Contact />
    </main>
  )
  
}