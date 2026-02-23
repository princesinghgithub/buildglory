import "../styles/Process.css";

const STEPS = [
  {
    num: "01",
    icon: "💬",
    title: "Free Consultation",
    desc: "Initial meeting to understand your vision, requirements, timeline, and budget — no commitment needed.",
  },
  {
    num: "02",
    icon: "📐",
    title: "3D Design",
    desc: "Our designers create detailed 3D plans and visualizations so you see exactly what you'll get before we begin.",
  },
  {
    num: "03",
    icon: "📋",
    title: "Approval & Contract",
    desc: "Review and finalize designs, sign a clear contract with fixed timelines, milestones, and transparent pricing.",
  },
  {
    num: "04",
    icon: "🔨",
    title: "Construction",
    desc: "Our skilled team builds with premium materials under strict quality control and regular progress updates.",
  },
  {
    num: "05",
    icon: "✨",
    title: "Interior Finishing",
    desc: "Interiors, painting, fittings, and furnishing — every detail is perfected to match your vision exactly.",
  },
  {
    num: "06",
    icon: "🎉",
    title: "Handover",
    desc: "Final walkthrough, documentation, and a 5-year workmanship warranty. Your dream space is ready!",
  },
];

export default function Process() {
  return (
    <section id="process" className="process-section">
      <div className="process-header">
        <span className="section-tag">How It Works</span>
        <h2>Our Proven 6-Step Process</h2>
        <p>Transparent, efficient, and stress-free from start to finish</p>
      </div>

      <div className="process-grid">
        {STEPS.map((step, i) => (
          <div key={step.num} className="process-step" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="step-top">
              <div className="step-icon">{step.icon}</div>
              <div className="step-num">{step.num}</div>
            </div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.desc}</p>
            {i < STEPS.length - 1 && (
              <div className="step-connector">
                <span>→</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
