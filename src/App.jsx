import "./styles/globals.css";

import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import Stats        from "./components/Stats";
import About        from "./components/About";
import OurStory     from "./components/Ourstory";
import Services     from "./components/Services";
import Process      from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact      from "./components/Contact";
import Footer       from "./components/Footer";


export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Stats />
      <About />
       <OurStory />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
