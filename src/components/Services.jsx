import { useEffect, useRef, useState } from "react";
import { Reveal, SplitLine } from "../lib/motion";
import "../styles/Services.css";

const SERVICES = [
  {
    title: "Residential Interiors",
    desc: "Luxury home interiors that blend style with function — bedrooms, living rooms, modular kitchens and more, tailored to how you live.",
    img: "/projects/living-duplex.jpg",
  },
  {
    title: "Commercial Design",
    desc: "Offices, retail and commercial spaces designed to lift productivity and leave a lasting impression on clients.",
    img: "/projects/office.jpg",
  },
  {
    title: "Planning & Construction",
    desc: "End-to-end construction management from blueprint to completion, with precise engineering and quality craftsmanship.",
    img: "/projects/planning.jpg",
  },
  {
    title: "Turnkey Projects",
    desc: "Procurement, execution and quality control handled by one team — delivered on time, within budget.",
    img: "/projects/facade-terraces.jpg",
  },
  {
    title: "House Renovation",
    desc: "Transform an existing space. We redefine how you live — with heart, style and individuality in every corner.",
    img: "/projects/renovation.jpg",
  },
  {
    title: "3D Design & Visualisation",
    desc: "See your space before it's built with photo-real 3D renders and walkthroughs for complete clarity.",
    img: "/projects/facade-monolith.jpg",
  },
  {
    title: "Painting & Finishing",
    desc: "Refined textures, rich tones and premium finishes that give every wall a quiet elegance.",
    img: "/projects/painting.jpg",
  },
];

export default function Services() {
  const listRef = useRef(null);
  const floatRef = useRef(null);
  const [active, setActive] = useState(null);

  /* floating preview follows the pointer with a soft lag */
  useEffect(() => {
    const list = listRef.current, el = floatRef.current;
    if (!list || !el || !window.matchMedia("(pointer: fine)").matches) return;
    const target = { x: 0, y: 0 }, pos = { x: 0, y: 0 };
    let raf = 0, running = false;
    const loop = () => {
      pos.x += (target.x - pos.x) * 0.14;
      pos.y += (target.y - pos.y) * 0.14;
      const tilt = Math.max(Math.min((target.x - pos.x) * 0.05, 8), -8);
      el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) rotate(${tilt}deg)`;
      raf = requestAnimationFrame(loop);
    };
    const move = (e) => {
      const r = list.getBoundingClientRect();
      target.x = e.clientX - r.left;
      target.y = e.clientY - r.top;
      if (!running) { pos.x = target.x; pos.y = target.y; running = true; raf = requestAnimationFrame(loop); }
    };
    const leave = () => { running = false; cancelAnimationFrame(raf); };
    list.addEventListener("pointermove", move);
    list.addEventListener("pointerleave", leave);
    return () => {
      list.removeEventListener("pointermove", move);
      list.removeEventListener("pointerleave", leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="services" className="services-section">
      <Reveal className="services-head">
        <span className="eyebrow rv-up">What We Do</span>
        <h2 className="display services-title">
          <SplitLine text="Design & build," /><br />
          <em><SplitLine text="under one roof." start={3} /></em>
        </h2>
        <p className="services-lead rv-up" style={{ "--rd": ".3s" }}>
          From the first sketch to the final cushion — one studio, one point of contact,
          one standard of finish.
        </p>
      </Reveal>

      <div className="services-wrap" ref={listRef} onPointerLeave={() => setActive(null)}>
      <ul className={`services-list ${active !== null ? "has-active" : ""}`}>
        {SERVICES.map((s, i) => (
          <Reveal
            as="li"
            key={s.title}
            threshold={0.3}
            className={`service-row ${active === i ? "is-active" : ""}`}
            onPointerEnter={() => setActive(i)}
          >
            <span className="rv-line" />
            <a href="#contact" className="sr-inner rv-up" data-cursor="Enquire">
              <span className="sr-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="sr-title">{s.title}</span>
              <span className="sr-desc">{s.desc}</span>
              <span className="sr-thumb"><img src={s.img} alt="" loading="lazy" /></span>
              <span className="sr-arrow" aria-hidden="true">↗</span>
            </a>
          </Reveal>
        ))}
      </ul>

        <div className={`services-float ${active !== null ? "is-visible" : ""}`} ref={floatRef} aria-hidden="true">
          <div className="sf-frame">
            {SERVICES.map((s, i) => (
              <img key={s.img + i} src={s.img} alt="" className={active === i ? "is-active" : ""} loading="lazy" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
