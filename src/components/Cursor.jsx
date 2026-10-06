import { useEffect, useRef, useState } from "react";
import "../styles/Cursor.css";

/* Dot + lagging ring. Elements with data-cursor="View" grow the ring and show the label;
   links/buttons get a softer hover state. Mouse-only. */
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [label, setLabel] = useState("");
  const [mode, setMode] = useState("");
  const [enabled] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches
  );

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-cursor");
    const pos = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let raf;

    const move = (e) => {
      pos.x = e.clientX; pos.y = e.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
    };
    const loop = () => {
      ring.x += (pos.x - ring.x) * 0.16;
      ring.y += (pos.y - ring.y) * 0.16;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    const over = (e) => {
      const target = e.target.closest?.("[data-cursor], a, button");
      if (!target) { setMode(""); setLabel(""); return; }
      if (target.dataset.cursor) { setMode("label"); setLabel(target.dataset.cursor); }
      else { setMode("link"); setLabel(""); }
    };
    const leave = () => { setMode("hidden"); };
    const enter = () => { setMode(""); };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over);
    document.documentElement.addEventListener("pointerleave", leave);
    document.documentElement.addEventListener("pointerenter", enter);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.documentElement.removeEventListener("pointerleave", leave);
      document.documentElement.removeEventListener("pointerenter", enter);
      document.documentElement.classList.remove("has-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={ringRef} className={`cursor-ring ${mode}`} aria-hidden="true">
        <span className="cursor-label">{label}</span>
      </div>
      <div ref={dotRef} className={`cursor-dot ${mode}`} aria-hidden="true" />
    </>
  );
}
