import { useRef } from "react";
import { useInView } from "./hooks";

/* Wrapper that adds `is-in` when scrolled into view; pair with .rv / .rv-* classes */
export function Reveal({ as = "div", className = "", threshold = 0.2, children, ...rest }) {
  const Tag = as;
  const ref = useRef(null);
  const visible = useInView(ref, threshold);
  return (
    <Tag ref={ref} className={`${className} ${visible ? "is-in" : ""}`} {...rest}>
      {children}
    </Tag>
  );
}

/* Splits a line of text into masked words for a staggered rise-in */
export function SplitLine({ text, start = 0, className = "" }) {
  return text.split(" ").map((w, i) => (
    <span key={i} className="split-w">
      <span className={`split-in ${className}`} style={{ "--i": start + i }}>{w}</span>
    </span>
  ));
}
