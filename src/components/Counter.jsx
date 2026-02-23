import { useState, useEffect, useRef } from "react";
import "../styles/Counter.css";

export default function Counter({ end, suffix = "", label, icon }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    const interval = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <div className="counter-item" ref={ref}>
      {icon && <div className="counter-icon">{icon}</div>}
      <div className="counter-number">
        {count}
        <span className="counter-suffix">{suffix}</span>
      </div>
      <div className="counter-label">{label}</div>
    </div>
  );
}
