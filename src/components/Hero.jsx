import { useEffect, useRef, useState } from "react";
import { SplitLine } from "../lib/motion";
import "../styles/Hero.css";

const SLIDES = [
  { img: "/projects/villa-pool.jpg",     title: "Villa Residence",  type: "Architecture & Interiors" },
  { img: "/projects/living-duplex.jpg",  title: "Duplex Living",    type: "Residential Interiors" },
  { img: "/projects/bedroom-luxury.jpg", title: "The Master Suite", type: "Luxury Bedroom" },
];
const INTERVAL = 6500;

export default function Hero({ ready = true }) {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(null);

  const go = (next) => {
    const n = (next + SLIDES.length) % SLIDES.length;
    if (n === active) return;
    setPrev(active);
    setActive(n);
  };

  /* autoplay — restarts its timer whenever the slide changes */
  useEffect(() => {
    if (!ready) return;
    const t = setTimeout(() => {
      setPrev(active);
      setActive((active + 1) % SLIDES.length);
    }, INTERVAL);
    return () => clearTimeout(t);
  }, [active, ready]);

  /* scroll parallax written straight to a CSS var */
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = sectionRef.current;
      if (!el) return;
      const p = Math.min(window.scrollY / el.offsetHeight, 1);
      el.style.setProperty("--sp", p.toFixed(4));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section id="home" ref={sectionRef} className={`hero ${ready ? "is-in" : ""}`}>
      <div className="hero-slides">
        {SLIDES.map((s, i) => (
          <div
            key={s.img}
            className={`hero-slide ${i === active ? "is-active" : ""} ${i === prev ? "is-prev" : ""}`}
          >
            <img src={s.img} alt={s.title} fetchPriority={i === 0 ? "high" : "low"} />
          </div>
        ))}
        <div className="hero-veil" />
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">Architects &amp; Interior Designers — Delhi NCR</p>
        <h1 className="hero-title">
          <span className="hero-line"><SplitLine text="Spaces that" /></span>
          <span className="hero-line"><SplitLine text="feel like" start={2} /> <em><SplitLine text="you." start={4} /></em></span>
        </h1>
        <p className="hero-desc">
          Bespoke homes, interiors and workplaces — designed with intent,
          crafted with care, delivered turnkey.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn-luxe light">
            Explore Projects <span className="arrow">→</span>
          </a>
          <a href="#contact" className="hero-link">Book a consultation</a>
        </div>
      </div>

      <div className="hero-bar">
        <div className="hero-caption" key={active}>
          <span className="hc-num">{String(active + 1).padStart(2, "0")}</span>
          <span className="hc-text">
            <span className="hc-title">{SLIDES[active].title}</span>
            <span className="hc-type">{SLIDES[active].type}</span>
          </span>
        </div>

        <div className="hero-progress">
          {SLIDES.map((s, i) => (
            <button
              key={s.img}
              className={`hp-item ${i === active ? "is-active" : ""} ${i < active ? "is-done" : ""}`}
              onClick={() => go(i)}
              aria-label={`Show ${s.title}`}
              style={{ "--dur": `${INTERVAL}ms` }}
            >
              <span className="hp-fill" />
            </button>
          ))}
        </div>

        <div className="hero-arrows">
          <button onClick={() => go(active - 1)} aria-label="Previous slide">←</button>
          <button onClick={() => go(active + 1)} aria-label="Next slide">→</button>
        </div>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Scroll to next section">
        <span>Scroll</span>
        <i />
      </a>
    </section>
  );
}
