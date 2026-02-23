import "../styles/About.css";

const FEATURES = [
  { icon: "🏛️", text: "Award-Winning Architecture" },
  { icon: "⚡", text: "40-Day Delivery Promise" },
  { icon: "💎", text: "Premium Materials Only" },
  { icon: "🎨", text: "Custom Design Solutions" },
  { icon: "📐", text: "Expert Space Planning" },
  { icon: "🔒", text: "5-Year Workmanship Warranty" },
];

const PROMISES = [
  "On-Time Delivery, Every Time",
  "100% Budget Transparency",
  "Post-Project Support",
  "Premium Quality Materials",
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        {/* Left: Text */}
        <div className="about-text">
          <span className="section-tag">About BuildGlory</span>
          <h2 className="about-title">
            Innovating Spaces With<br />
            <span className="text-gold">40+ Years of Expertise</span>
          </h2>
          <p className="about-desc">
            At <strong>BuildGlory</strong>, we take pride in being reliable architects and
            interior designers serving Delhi NCR &amp; Gurgaon — creating spaces that truly
            inspire. We approach every project with a clear understanding that good design goes
            beyond appearance — it must support comfort, functionality, and long-term usability.
          </p>
          <p className="about-desc">
            By carefully listening to our clients and studying their requirements, we design
            spaces that reflect their vision while maintaining structural and aesthetic balance.
            From residential homes to commercial environments, we integrate architecture and
            interior design seamlessly, ensuring every detail works in harmony.
          </p>
          <div className="feature-pills">
            {FEATURES.map((f) => (
              <div key={f.text} className="feature-pill">
                <span>{f.icon}</span>
                <span>{f.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Promise Card */}
        <div className="about-right">
          <div className="promise-card">
            <div className="promise-card-accent"></div>
            <div className="promise-card-icon">🏆</div>
            <h3>Our Promise to You</h3>
            <p>
              Complete home interiors with custom designs, premium materials, and expert
              space planning — guaranteed quality, delivered on time.
            </p>
            <ul className="promise-list">
              {PROMISES.map((p) => (
                <li key={p}>
                  <span className="check">✓</span>
                  {p}
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-primary">
              Book Free Consultation
            </a>
          </div>

          {/* Floating badge */}
          <div className="float-badge">
            <span className="float-badge-num">40+</span>
            <span className="float-badge-text">Years<br />Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
