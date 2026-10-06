import { useEffect, useRef, useState } from "react";
import { Reveal, SplitLine } from "../lib/motion";
import "../styles/Projects.css";

const PROJECTS = [
  { img: "/projects/villa-pool.jpg",      title: "Villa with Pool Deck",   type: "Architecture & Interiors", shape: "wide" },
  { img: "/projects/bedroom-luxury.jpg",  title: "Classic Master Suite",   type: "Luxury Residential",       shape: "tall" },
  { img: "/projects/living-duplex.jpg",   title: "Duplex Living Room",     type: "Residential Interiors",    shape: "wide" },
  { img: "/projects/bathroom.jpg",        title: "Spa Bathroom",           type: "Bath & Wellness",          shape: "tall" },
  { img: "/projects/office.jpg",          title: "Open-plan Workspace",    type: "Commercial Office",        shape: "wide" },
  { img: "/projects/facade-monolith.jpg", title: "Stone & Timber Facade",  type: "Architecture",             shape: "tall" },
  { img: "/projects/kitchen.jpg",         title: "Modular Kitchen",        type: "Residential Interiors",    shape: "tall" },
  { img: "/projects/conference.jpg",      title: "The Boardroom",          type: "Commercial Interiors",     shape: "square" },
  { img: "/projects/house-exterior.jpg",  title: "Sculpted Residence",     type: "Architecture",             shape: "square" },
];

/* Desktop: the section pins and the strip slides sideways as you scroll down.
   Mobile / reduced motion: a plain swipeable row. */
export default function Projects() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [pinned, setPinned] = useState(false);
  const [height, setHeight] = useState(null);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 901px) and (prefers-reduced-motion: no-preference)");
    let raf = 0;
    let distance = 0;

    const measure = () => {
      const track = trackRef.current;
      if (!track || !mq.matches) { setPinned(false); setHeight(null); return; }
      distance = Math.max(track.scrollWidth - window.innerWidth, 0);
      setPinned(true);
      setHeight(distance + window.innerHeight);
    };
    const update = () => {
      raf = 0;
      const el = sectionRef.current, track = trackRef.current;
      if (!el || !track || !mq.matches) return;
      const r = el.getBoundingClientRect();
      const p = distance ? Math.min(Math.max(-r.top / distance, 0), 1) : 0;
      track.style.transform = `translate3d(${-p * distance}px, 0, 0)`;
      el.style.setProperty("--p", p.toFixed(4));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    const onResize = () => { measure(); onScroll(); };

    measure(); update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    mq.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      mq.removeEventListener("change", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  /* lightbox keyboard controls */
  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i + 1) % PROJECTS.length);
      if (e.key === "ArrowLeft") setOpen((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);
    };
    document.documentElement.classList.add("menu-open");
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.classList.remove("menu-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`projects ${pinned ? "is-pinned" : ""}`}
      style={height ? { height } : undefined}
    >
      <div className="projects-sticky">
        <div className="projects-track" ref={trackRef}>
          <Reveal className="projects-intro">
            <span className="eyebrow rv-up">Selected Works</span>
            <h2 className="display projects-title">
              <SplitLine text="Crafted" /><br /><em><SplitLine text="spaces," start={1} /></em><br />
              <SplitLine text="lived stories." start={2} />
            </h2>
            <p className="projects-lead rv-up" style={{ "--rd": ".35s" }}>
              A glimpse of homes, workplaces and facades shaped by our studio —
              each one designed around the people who use it.
            </p>
            <span className="projects-hint rv-fade" style={{ "--rd": ".6s" }}>
              <i /> Scroll to explore
            </span>
          </Reveal>

          {PROJECTS.map((pr, i) => (
            <Reveal
              key={pr.img}
              as="button"
              threshold={0.05}
              className={`project-card ${pr.shape}`}
              style={{ "--rd": `${(i % 3) * 0.08}s` }}
              onClick={() => setOpen(i)}
              data-cursor="View"
              aria-label={`Open ${pr.title}`}
            >
              <span className="pc-img rv-img">
                <img src={pr.img} alt={pr.title} loading="lazy" />
              </span>
              <span className="pc-meta rv-up" style={{ "--rd": `${0.3 + (i % 3) * 0.08}s` }}>
                <span className="pc-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="pc-text">
                  <span className="pc-title">{pr.title}</span>
                  <span className="pc-type">{pr.type}</span>
                </span>
              </span>
            </Reveal>
          ))}

          <div className="projects-outro">
            <p className="display">Have a space<br />in <em>mind?</em></p>
            <a href="#contact" className="btn-luxe">Start your project <span className="arrow">→</span></a>
          </div>
        </div>

        <div className="projects-progress" aria-hidden="true"><span /></div>
      </div>

      {open !== null && (
        <div className="lightbox" data-lenis-prevent role="dialog" aria-modal="true" aria-label={PROJECTS[open].title} onClick={() => setOpen(null)}>
          <figure className="lb-figure" key={open} onClick={(e) => e.stopPropagation()}>
            <img src={PROJECTS[open].img} alt={PROJECTS[open].title} />
            <figcaption>
              <span className="pc-num">{String(open + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}</span>
              <span className="lb-title">{PROJECTS[open].title}</span>
              <span className="pc-type">{PROJECTS[open].type}</span>
            </figcaption>
          </figure>
          <button className="lb-btn lb-prev" aria-label="Previous project"
            onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + PROJECTS.length) % PROJECTS.length); }}>←</button>
          <button className="lb-btn lb-next" aria-label="Next project"
            onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % PROJECTS.length); }}>→</button>
          <button className="lb-close" aria-label="Close" onClick={() => setOpen(null)}>Close ✕</button>
        </div>
      )}
    </section>
  );
}
