import { useState, useEffect } from "react";
import "../styles/Navbar.css";

const NAV_LINKS = [
  { label: "Home",     href: "#home" },
  { label: "Studio",   href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Team",     href: "#our-story" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      // tuck the bar away while scrolling down, bring it back on scroll up
      setHidden(y > 400 && y > lastY);
      lastY = y;
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : "on-dark"} ${hidden && !menuOpen ? "tucked" : ""} ${menuOpen ? "menu-active" : ""}`}>
        <a href="#home" className="nav-brand" onClick={close}>
          <span className="brand-mark">BG</span>
          <span className="brand-name">Build<em>Glory</em></span>
        </a>

        <ul className="nav-links">
          {NAV_LINKS.map((item) => (
            <li key={item.label}>
              <a href={item.href}><span data-text={item.label}>{item.label}</span></a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="nav-cta">Book Consultation</a>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <ul>
          {NAV_LINKS.map((item, i) => (
            <li key={item.label} style={{ "--i": i }}>
              <a href={item.href} onClick={close}>
                <span className="mm-num">{String(i + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mm-foot">
          <a href="tel:+919876543210">+91 98765 43210</a>
          <a href="mailto:info@buildglory.in">info@buildglory.in</a>
        </div>
      </div>
    </>
  );
}
