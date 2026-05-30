import "../styles/Servicecard.css";

export default function ServiceCard({ icon, title, desc, color, index }) {
  return (
    <div
      className="service-card"
      style={{
        "--accent-color": color,
        animationDelay: `${index * 0.08}s`,
      }}
    >
      <div className="service-card-icon">{icon}</div>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-desc">{desc}</p>
      <a href="#contact" className="service-card-link">
        Learn More <span>→</span>
      </a>
      <div className="service-card-glow"></div>
    </div>
  );
}
