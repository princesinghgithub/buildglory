import Counter from "./Counter";
import "../styles/Stats.css";

const STATS = [
  { end: 40, suffix: "+", label: "Years of Legacy", icon: "🏛️" },
  { end: 500, suffix: "+", label: "Completed Projects", icon: "🏗️" },
  { end: 300, suffix: "+", label: "Interior Designs", icon: "🎨" },
  { end: 15, suffix: "+", label: "Cities Served", icon: "🌆" },
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
