import { useEffect, useRef, useState } from "react";
import "../styles/Process.css";

const STEPS = [
  { num:"01", label:"Understand the\nrequirement in detail",   icon:<svg viewBox="0 0 48 48" fill="none"><circle cx="22" cy="18" r="9" stroke="currentColor" strokeWidth="2.5"/><circle cx="22" cy="18" r="3" fill="currentColor"/><path d="M12 36c0-5.5 4.5-9 10-9s10 3.5 10 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><path d="M33 20l3 1.5M33 24l4 .5M33 28l3-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>, pos:"bot" },
  { num:"02", label:"Provide designs at\nlightning fast speed",  icon:<svg viewBox="0 0 48 48" fill="none"><path d="M26 8l-12 16h10l-4 16 16-20h-11z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/></svg>, pos:"top" },
  { num:"03", label:"Estimate cost suitable\nto your budget",     icon:<svg viewBox="0 0 48 48" fill="none"><path d="M24 10c-6 0-10 4-10 8 0 6 10 14 10 14s10-8 10-14c0-4-4-8-10-8z" stroke="currentColor" strokeWidth="2.5"/><path d="M21 22v-8M24 14h3a3 3 0 010 6h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>, pos:"bot" },
  { num:"04", label:"Close 3D designs",                          icon:<svg viewBox="0 0 48 48" fill="none"><rect x="8" y="12" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="2.5"/><path d="M16 22l6 6 10-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>, pos:"top" },
  { num:"05", label:"Manage seamless\nexecution of project",    icon:<svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="2.5"/><path d="M24 16v8l5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><path d="M14 10l-4-4M34 10l4-4M14 38l-4 4M34 38l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>, pos:"bot" },
  { num:"06", label:"On-Time delivery",                          icon:<svg viewBox="0 0 48 48" fill="none"><rect x="10" y="14" width="28" height="24" rx="3" stroke="currentColor" strokeWidth="2.5"/><path d="M10 21h28M18 10v8M30 10v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><path d="M17 30l4 4 10-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>, pos:"top" },
];

function Node({ step, index }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); o.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  const isTop = step.pos === "top";
  return (
    <div ref={ref} className={`pnode ${isTop?"ptop":"pbot"} ${vis?"pvis":""}`}
      style={{"--d":`${index*0.12}s`}}>
      {isTop && <div className="plabel">{step.label.split("\n").map((l,i)=><span key={i}>{l}</span>)}</div>}
      <div className="pcircle">
        <div className="pinner"><div className="pico">{step.icon}</div></div>
        <div className="pring pr1"/><div className="pring pr2"/>
      </div>
      {!isTop && <div className="plabel">{step.label.split("\n").map((l,i)=><span key={i}>{l}</span>)}</div>}
    </div>
  );
}

export default function Process() {
  const hRef = useRef(null);
  const [hVis, setHVis] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setHVis(true); o.disconnect(); } }, { threshold: 0.2 });
    if (hRef.current) o.observe(hRef.current);
    return () => o.disconnect();
  }, []);

  return (
    <section id="process" className="process-section">
      <div className="proc-glow pg1"/><div className="proc-glow pg2"/>

      <div ref={hRef} className={`proc-header ${hVis?"ph-in":""}`}>
        <div className="section-tag">How It Works</div>
        <h2 className="proc-h2">Our Proven <span className="proc-gold">6-Step</span> Process</h2>
        <p className="proc-sub">Transparent, efficient, and stress-free — from vision to reality</p>
      </div>

      <div className="proc-scene">
        {/* SVG path */}
        <svg className="proc-svg" viewBox="0 0 1200 260" preserveAspectRatio="none">
          <defs>
            <linearGradient id="pg" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c9a84c" stopOpacity=".3"/>
              <stop offset="40%" stopColor="#f5d060" stopOpacity=".9"/>
              <stop offset="60%" stopColor="#f5d060" stopOpacity=".9"/>
              <stop offset="100%" stopColor="#c9a84c" stopOpacity=".3"/>
            </linearGradient>
            <filter id="pglow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            <marker id="parr" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0,10 3.5,0 7" fill="#f5d060"/>
            </marker>
          </defs>
          {/* bot=190 top=70  x positions: 100,300,500,700,900,1100 */}
          <path className="proc-path"
            d="M100,190 C200,190 200,70 300,70 C400,70 400,190 500,190 C600,190 600,70 700,70 C800,70 800,190 900,190 C1000,190 1000,70 1100,70"
            stroke="url(#pg)" strokeWidth="2.5" fill="none"
            strokeDasharray="12 6" filter="url(#pglow)" markerEnd="url(#parr)"/>
        </svg>

        <div className="proc-nodes">
          {STEPS.map((s,i) => <Node key={s.num} step={s} index={i}/>)}
        </div>
      </div>
    </section>
  );
}
