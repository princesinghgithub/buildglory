import ServiceCard from "./ServiceCard";
import "../styles/Services.css";

const SERVICES = [
  {
    icon: "🏠",
    title: "Residential Interiors",
    desc: "Luxury home interiors that blend style with functionality — bedrooms, living rooms, modular kitchens, and more tailored to your lifestyle.",
    color: "#c9a84c",
  },
  {
    icon: "🏢",
    title: "Commercial Design",
    desc: "Corporate offices, retail outlets, and commercial spaces designed to boost productivity and leave a lasting impression on clients.",
    color: "#4fc3f7",
  },
  {
    icon: "🔨",
    title: "Planning & Construction",
    desc: "End-to-end construction management from blueprint to completion with precision engineering and quality craftsmanship.",
    color: "#ef9a9a",
  },
  {
    icon: "🏗️",
    title: "Turnkey Construction",
    desc: "Complete turnkey solutions managing procurement, execution, and quality control — delivered on time, within budget.",
    color: "#a5d6a7",
  },
  {
    icon: "🏘️",
    title: "House Renovation",
    desc: "Transform your existing space. We redefine how you live — with heart, style, and individuality in every corner.",
    color: "#ce93d8",
  },
  {
    icon: "📐",
    title: "3D Design & Visualization",
    desc: "Experience your space before it's built with hyper-realistic 3D renders and virtual walkthroughs for complete clarity.",
    color: "#ffcc80",
  },
  {
    icon: "🏭",
    title: "Industrial Projects",
    desc: "Functional and efficient industrial space design with a safety-first approach combined with modern, clean aesthetics.",
    color: "#80deea",
  },
  {
    icon: "🎨",
    title: "Painting & Finishing",
    desc: "Elevate walls with refined textures, rich tones, and premium finishes that reflect modern elegance and refined taste.",
    color: "#f48fb1",
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <span className="section-tag">What We Do</span>
        <h2>Complete Design &amp; Build Solutions</h2>
        <p>All under one roof — from concept to completion</p>
      </div>

      <div className="services-grid">
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.title} index={i} {...service} />
        ))}
      </div>
    </section>
  );
}
