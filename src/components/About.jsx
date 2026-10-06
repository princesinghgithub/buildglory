import { useRef } from "react";
import { Reveal, SplitLine } from "../lib/motion";
import { useScrollProgress } from "../lib/hooks";
import "../styles/About.css";

const FEATURES = [
  "Award-winning architecture",
  "40-day delivery promise",
  "Premium materials only",
  "Custom design solutions",
  "Expert space planning",
  "5-year workmanship warranty",
];

const PROMISES = [
  "On-time delivery, every time",
  "100% budget transparency",
  "Post-project support",
];

export default function About() {
  const mediaRef = useRef(null);
  const p = useScrollProgress(mediaRef);

  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        {/* Images */}
        <div className="about-media" ref={mediaRef}>
          <Reveal className="about-img-main" data-cursor="Studio">
            <span className="rv-img">
              <img
                src="/projects/bedroom-minimal.jpg"
                alt="Minimal bedroom interior by BuildGlory"
                loading="lazy"
                style={{ translate: `0 ${(p - 0.5) * -60}px` }}
              />
            </span>
          </Reveal>
          <Reveal className="about-img-small" style={{ "--rd": ".35s" }} data-cursor="Kitchen">
            <span className="rv-img">
              <img
                src="/projects/kitchen.jpg"
                alt="Modular kitchen interior by BuildGlory"
                loading="lazy"
                style={{ translate: `0 ${(p - 0.5) * 40}px` }}
              />
            </span>
          </Reveal>

          <div className="about-seal" aria-hidden="true">
            <svg viewBox="0 0 120 120">
              <defs>
                <path id="seal-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
              </defs>
              <text>
                <textPath href="#seal-circle">ARCHITECTURE • INTERIORS • TURNKEY • </textPath>
              </text>
            </svg>
            <span className="seal-num">40<sup>+</sup></span>
          </div>
        </div>

        {/* Copy */}
        <Reveal className="about-text" threshold={0.25}>
          <span className="eyebrow rv-up">The Studio</span>
          <h2 className="display about-title">
            <SplitLine text="We design homes" /><br />
            <SplitLine text="that hold" start={3} /> <em><SplitLine text="your story." start={5} /></em>
          </h2>
          <p className="about-desc rv-up" style={{ "--rd": ".3s" }}>
            At <strong>BuildGlory</strong>, we are architects and interior designers serving
            Delhi NCR &amp; Gurgaon — creating spaces that truly inspire. Good design goes beyond
            appearance; it must support comfort, function and long-term living.
          </p>
          <p className="about-desc rv-up" style={{ "--rd": ".4s" }}>
            We listen first, then shape spaces that reflect your vision while keeping structure
            and aesthetics in balance — from residential homes to commercial environments,
            architecture and interiors in one seamless hand.
          </p>

          <ul className="about-features">
            {FEATURES.map((f, i) => (
              <li key={f} className="rv-up" style={{ "--rd": `${0.45 + i * 0.06}s` }}>
                <span className="af-num">{String(i + 1).padStart(2, "0")}</span>
                {f}
              </li>
            ))}
          </ul>

          <div className="about-foot rv-up" style={{ "--rd": ".85s" }}>
            <a href="#contact" className="btn-luxe">
              Book Free Consultation <span className="arrow">→</span>
            </a>
            <ul className="about-promises">
              {PROMISES.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
