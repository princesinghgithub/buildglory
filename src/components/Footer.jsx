import "../styles/Footer.css";

const SERVICE_LINKS = [
  "Residential Interiors",
  "Commercial Design",
  "Turnkey Construction",
  "House Renovation",
  "3D Visualization",
  "Industrial Projects",
];

const COMPANY_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Process", href: "#process" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
];

const SERVICE_AREAS = [
  "Gurgaon", "Delhi NCR", "Noida", "Faridabad",
  "Greater Noida", "Gurugram", "South Delhi",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            🏗️ Build<span>Glory</span>
          </div>
          <p>
            Building dreams with precision, passion, and glory since 1985.
            Your vision, our craft — extraordinary spaces, every time.
          </p>
          <div className="footer-social">
            {["FB", "IG", "YT", "LI"].map((s) => (
              <a key={s} href="#" className="footer-social-btn">{s}</a>
            ))}
          </div>
          <div className="footer-certifications">
            {/* <span>🏅 ISO 9001 Certified</span> */}
            <span>🏆 Best Interior Design Award 2024</span>
          </div>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {SERVICE_LINKS.map((s) => (
              <li key={s}>
                <a href="#services">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            {COMPANY_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Areas */}
        <div className="footer-col">
          <h4>Service Areas</h4>
          <ul>
            {SERVICE_AREAS.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
          <div className="footer-contact-mini">
            <p>📞 +91 98765 43210</p>
            <p>✉️ iinfo@buildglory.in </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} BuildHGlory — Premium Architecture &amp; Interior Design. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <span>•</span>
          <a href="#">Terms of Service</a>
          <span>•</span>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
