import Counter from "./Counter";
import "../styles/Stats.css";

const STATS = [
  { end: 40, suffix: "+", label: "Years of Legacy" },
  { end: 500, suffix: "+", label: "Completed Projects" },
  { end: 300, suffix: "+", label: "Interior Designs" },
  { end: 15, suffix: "+", label: "Cities Served" },
];

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {STATS.map((stat) => (
          <Counter key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
