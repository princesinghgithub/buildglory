import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../lib/hooks";
import "../styles/Preloader.css";

const DURATION = 1700;

/* Brand curtain: counts to 100, then lifts away to reveal the hero */
export default function Preloader({ onDone }) {
  const [pct, setPct] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);
  const doneRef = useRef(onDone);
  useEffect(() => { doneRef.current = onDone; }, [onDone]);

  useEffect(() => {
    const reduced = prefersReducedMotion();
    const t0 = performance.now();
    let raf;
    let leaveTimer;
    let doneTimer;
    const tick = (now) => {
      const p = reduced ? 1 : Math.min((now - t0) / DURATION, 1);
      setPct(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) { raf = requestAnimationFrame(tick); return; }
      leaveTimer = setTimeout(() => {
        setLeaving(true);
        doneRef.current?.();
        doneTimer = setTimeout(() => setGone(true), reduced ? 0 : 1300);
      }, reduced ? 0 : 250);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); clearTimeout(leaveTimer); clearTimeout(doneTimer); };
  }, []);

  if (gone) return null;

  return (
    <div className={`preloader ${leaving ? "is-leaving" : ""}`} aria-hidden="true">
      <div className="pl-inner">
        <div className="pl-brand">
          {"BuildGlory".split("").map((ch, i) => (
            <span key={i} style={{ "--i": i }}>{ch}</span>
          ))}
        </div>
        <div className="pl-tag">Architecture &nbsp;·&nbsp; Interiors</div>
      </div>
      <div className="pl-bar"><span style={{ transform: `scaleX(${pct / 100})` }} /></div>
      <div className="pl-count">{String(pct).padStart(3, "0")}</div>
    </div>
  );
}
