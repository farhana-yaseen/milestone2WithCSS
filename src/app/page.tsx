
import AboutUs from "../components/About";
import HomePage from "../components/HomePage";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import ContactUs from "./contact/page";


export default function Home() {
  return (
    <div>
      <HomePage/>
     
      <AboutUs/>
      
      <Skills/>
      
      <Projects/>
      
      <ContactUs/>
    </div>
  );
}
