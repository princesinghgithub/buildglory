import { useCallback, useState } from "react";
import "./styles/globals.css";

import { useSmoothScroll } from "./lib/hooks";
import Preloader    from "./components/Preloader";
import Cursor       from "./components/Cursor";
import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import Stats        from "./components/Stats";
import About        from "./components/About";
import Projects     from "./components/Projects";
import OurStory     from "./components/Ourstory";
import Services     from "./components/Services";
import Process      from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact      from "./components/Contact";
import Footer       from "./components/Footer";


export default function App() {
  const [ready, setReady] = useState(false);
  const onLoaded = useCallback(() => setReady(true), []);
  useSmoothScroll(ready);

  return (
    <div className="app">
      <Preloader onDone={onLoaded} />
      <Cursor />
      <Navbar />
      <Hero ready={ready} />
      <About />
      <Stats />
      <Projects />
      <Services />
      <Process />
      <OurStory />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
