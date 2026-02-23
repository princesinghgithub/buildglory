import "../styles/Testimonials.css";

const TESTIMONIALS = [
  {
    name: "Rajesh Sharma",
    role: "Homeowner, Gurgaon",
    text: "BuildGlory transformed our 3BHK into a palace! The attention to detail was extraordinary and they finished 5 days before the deadline. Every corner exceeded our expectations.",
    stars: 5,
    project: "3BHK Full Interior",
  },
  {
    name: "Priya Mehta",
    role: "Business Owner, Delhi NCR",
    text: "Our office renovation was handled with complete professionalism. The 3D preview matched the final result exactly. The team was punctual, transparent, and truly talented.",
    stars: 5,
    project: "Commercial Office",
  },
  {
    name: "Amit Verma",
    role: "Real Estate Developer",
    text: "As a developer, I've worked with many contractors. BuildGlory stands apart with their quality, transparency, and on-time delivery. They are now my go-to team for all projects.",
    stars: 5,
    project: "Residential Complex",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <span className="section-tag">Client Stories</span>
        <h2>What Our Clients Say</h2>
        <p>Real words from real people who trusted us with their spaces</p>
      </div>

      <div className="testimonials-grid">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="testimonial-card" style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="testimonial-quote">"</div>
            <div className="testimonial-stars">
              {"★".repeat(t.stars)}
            </div>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-project">
              <span>📁 {t.project}</span>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">{t.name[0]}</div>
              <div className="author-info">
                <div className="author-name">{t.name}</div>
                <div className="author-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust bar */}
      <div className="trust-bar">
        <div className="trust-stat">
          <strong>4.9/5</strong>
          <span>Average Rating</span>
        </div>
        <div className="trust-divider-v"></div>
        <div className="trust-stat">
          <strong>200+</strong>
          <span>Happy Reviews</span>
        </div>
        <div className="trust-divider-v"></div>
        <div className="trust-stat">
          <strong>98%</strong>
          <span>Repeat Clients</span>
        </div>
        <div className="trust-divider-v"></div>
        <div className="trust-stat">
          <strong>0</strong>
          <span>Complaints</span>
        </div>
      </div>
    </section>
  );
}
