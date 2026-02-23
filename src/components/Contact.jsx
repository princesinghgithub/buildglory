import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const CONTACT_INFO = [
  { icon: "📍", label: "Office", value: "Sector 45, Gurgaon, Haryana - 122003" },
  { icon: "📞", label: "Call Us", value: "+91 98765 43210" },
  { icon: "✉️", label: "Email", value: "info@buildglory.in" },
  { icon: "⏰", label: "Working Hours", value: "Mon–Sat: 10:00 AM – 7:00 PM" },
];

const SERVICE_OPTIONS = [
  "Residential Interiors",
  "Commercial Design",
  "Turnkey Construction",
  "House Renovation",
  "3D Design & Visualization",
  "Industrial Projects",
  "Painting & Finishing",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", phone: "", email: "", service: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        {/* Left info */}
        <div className="contact-info">
          <span className="section-tag">Get In Touch</span>
          <h2>Start Your Dream Project Today</h2>
          <p>
            Get a <strong>free consultation</strong> and a detailed 3D design preview.
            No commitment required — just a conversation about your vision.
          </p>

          <div className="contact-details">
            {CONTACT_INFO.map((item) => (
              <div key={item.label} className="contact-detail-item">
                <div className="contact-detail-icon">{item.icon}</div>
                <div>
                  <strong>{item.label}</strong>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-social">
            {["FB", "IG", "YT", "LI"].map((s) => (
              <a key={s} href="#" className="social-btn">{s}</a>
            ))}
          </div>
        </div>

        {/* Right form */}
        <div className="contact-form-wrap">
          <div className="form-header">
            <h3>Request a Free Quote</h3>
            <p>We'll respond within 24 hours</p>
          </div>

          {submitted && (
            <div className="form-success">
              🎉 Thank you! We've received your request and will contact you within 24 hours.
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your  FullName"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Service Required</label>
              <select name="service" value={form.service} onChange={handleChange}>
                <option value="">Select a Service...</option>
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Tell us about your project</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Describe your project, budget range, timeline..."
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary form-btn" disabled={loading}>
              {loading ? (
                <span className="btn-loading">Sending...</span>
              ) : (
                <>Get Free Consultation 🚀</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
