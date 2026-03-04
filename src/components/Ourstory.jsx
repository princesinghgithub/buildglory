// import { useEffect, useRef, useState } from "react";
// import "../styles/OurStory.css";

// /* ─────────────────────────────
//    TEAM DATA — BuildGlory
// ───────────────────────────── */
// const FOUNDERS = [
//   {
//     name: "Rahul Kumar Singh",
//     role: "Founder & CEO",
//     badge: "Visionary",
//     quote: "A great architect doesn't just build walls — he builds feelings into those walls.",
//     bio: "With over 15 years of architectural mastery, Rahul founded BuildGlory with one mission: to make extraordinary design accessible. A storyteller at heart, he blends modern design language with cultural roots — crafting spaces that feel like home from the very first glance.",
//     photo: "/Rahul-Kumar-Singh.jpg",
//     color: "#c9a84c",
//   },
//   {
//     name: "Sanjeev Rathee",
//     role: "Co-Founder & Director",
//     badge: "Strategist",
//     quote: "Every project is a partnership — between our vision and your dream.",
//     bio: "Sanjeev drives BuildGlory's growth strategy and client partnerships with 12+ years of industry expertise. His sharp business acumen and deep client relationships have made BuildGlory the most trusted name across Delhi NCR.",
//     photo: "/Sanjeev-Rathee-2.jpg",
//     color: "#4a90c4",
//   },
// ];

// /* Manju FIRST — higher priority */
// const ARCHITECTS = [
//   {
//     name: "Manju Patel",
//     role: "Principal Architect & Interior Designer",
//     specialty: "Interior Design Lead",
//     bio: "As a seasoned interior designer and architect, Manju brings 10+ years of refined creativity to every project. She transforms interiors into immersive experiences — blending aesthetics, function, and emotion into every space she touches.",
//     photo: "/manju_patel.jpeg",
//     color: "#e8b4c8",
//     featured: true,
//   },
//   {
//     name: "Hemant Sharma",
//     role: "Principal Architect",
//     specialty: "Structural Design",
//     bio: "Hemant leads our structural design division with 18+ years of expertise. His buildings stand not just as structures but as landmarks — engineered for durability, designed for beauty.",
//     photo: '/hemant.jpeg',
//     initials: "HS",
//     color: "#27ae60",
//     featured: false,
//   },
// ];

// const TEAM = [
//   { name: "Shailendra K. Jain", role: "Associate Architect",   specialty: "30 yrs mastery",  bio: "Shailendra shapes iconic spaces with timeless vision and technical excellence that span three decades.", photo: "/Shalendra-Jain.jpg", color: "#9b59b6" },
//   { name: "Shivani Rai",        role: "HR Manager",            specialty: "People & Culture", bio: "People-focused leader who empowers teams and strengthens workplace values at BuildGlory.", photo: "/shivani.jpeg", color: "#e67e22" },
//   { name: "Sourav Rana",        role: "Civil Engineer",        specialty: "5 yrs on-site",   bio: "Passionate about building things right, Sourav brings smart, practical experience to every site.", photo: "/sourabh-rana-scaled.jpg", color: "#1abc9c" },
//   { name: "Sudhir Kumar",       role: "Civil Engineer",        specialty: "15 yrs in field", bio: "With 15 years in the field, Sudhir knows how to get things done — strong structures, smooth execution.", photo: "/sudhir-kumar.jpg", color: "#3498db" },
//   { name: "MD Shad",            role: "Interior Designer",     specialty: "Creative Vision",  bio: "Known for crafting interiors with soul, Shad redefines spaces with style, detail, and function.", photo: "/md.jpg", color: "#c0392b" },
//   { name: "Raja Singh",         role: "Digital Marketer",      specialty: "Growth Strategy", bio: "With 3 years in digital marketing, Raja drives growth through sharp strategy and data-backed innovation.", photo: "/Raja-singh-scaled.jpg", color: "#8e44ad" },
// ];

// /* ─────────────────────────────
//    useInView hook
// ───────────────────────────── */
// function useInView(ref) {
//   const [visible, setVisible] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(([e]) => {
//       if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
//     }, { threshold: 0.12 });
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, [ref]);
//   return visible;
// }

// /* ─────────────────────────────
//    FOUNDER CARD — big alternating
// ───────────────────────────── */
// function FounderCard({ person, index }) {
//   const ref = useRef(null);
//   const visible = useInView(ref);
//   const isEven = index % 2 === 0;

//   return (
//     <div
//       ref={ref}
//       className={`founder-card ${visible ? "fc-visible" : ""} ${isEven ? "fc-left" : "fc-right"}`}
//     >
//       {/* Photo side */}
//       <div className="fc-photo-wrap">
//         <div className="fc-photo-frame" style={{ "--ac": person.color }}>
//           <img
//             src={person.photo}
//             alt={person.name}
//             className="fc-photo"
//             loading="lazy"
//           />
//           <div className="fc-photo-shine" />
//         </div>
//         <div className="fc-badge-pill" style={{ background: person.color }}>
//           {person.badge}
//         </div>
//         <div className="fc-name-plate">
//           <span className="fc-plate-name">{person.name}</span>
//           <span className="fc-plate-role" style={{ color: person.color }}>{person.role}</span>
//         </div>
//       </div>

//       {/* Text side */}
//       <div className="fc-content">
//         <div className="fc-role-tag" style={{ "--ac": person.color }}>
//           {person.role}
//         </div>
//         <h3 className="fc-name">{person.name}</h3>
//         <p className="fc-bio">{person.bio}</p>
//         <blockquote className="fc-quote" style={{ borderColor: person.color }}>
//           <span className="fc-qq" style={{ color: person.color }}>"</span>
//           {person.quote}
//           <span className="fc-qq" style={{ color: person.color }}>"</span>
//         </blockquote>
//       </div>
//     </div>
//   );
// }

// /* ─────────────────────────────
//    ARCHITECT CARD — Manju featured / Hemant normal
// ───────────────────────────── */
// function ArchitectCard({ person, delay }) {
//   const ref = useRef(null);
//   const visible = useInView(ref);

//   return (
//     <div
//       ref={ref}
//       className={`arch-card ${person.featured ? "arch-featured" : ""} ${visible ? "ac-visible" : ""}`}
//       style={{ "--delay": `${delay}s`, "--ac": person.color }}
//     >
//       {person.featured && <div className="arch-featured-tag">Lead Designer</div>}

//       {/* Photo or initials */}
//       <div className="arch-photo-wrap">
//         {person.photo ? (
//           <img src={person.photo} alt={person.name} className="arch-photo" loading="lazy" />
//         ) : (
//           <div className="arch-initials-avatar">
//             <span>{person.initials}</span>
//           </div>
//         )}
//         <div className="arch-specialty-tag">{person.specialty}</div>
//       </div>

//       <div className="arch-info">
//         <span className="arch-role" style={{ color: person.color }}>{person.role}</span>
//         <h4 className="arch-name">{person.name}</h4>
//         <p className="arch-bio">{person.bio}</p>
//       </div>
//     </div>
//   );
// }

// /* ─────────────────────────────
//    TEAM CARD — small grid with photo
// ───────────────────────────── */
// function TeamCard({ member, delay }) {
//   const ref = useRef(null);
//   const visible = useInView(ref);

//   return (
//     <div
//       ref={ref}
//       className={`team-card ${visible ? "tc-visible" : ""}`}
//       style={{ "--delay": `${delay}s`, "--ac": member.color }}
//     >
//       <div className="tc-photo-wrap">
//         <img
//           src={member.photo}
//           alt={member.name}
//           className="tc-photo"
//           loading="lazy"
//         />
//         <div className="tc-specialty">{member.specialty}</div>
//       </div>
//       <h4 className="tc-name">{member.name}</h4>
//       <span className="tc-role" style={{ color: member.color }}>{member.role}</span>
//       <p className="tc-bio">{member.bio}</p>
//     </div>
//   );
// }

// /* ─────────────────────────────
//    MAIN EXPORT
// ───────────────────────────── */
// export default function OurStory() {
//   const headRef = useRef(null);
//   const visible = useInView(headRef);

//   return (
//     <section id="our-story" className="ourstory-section">

//       <div className="os-bg-grid" />
//       <div className="os-bg-glow os-glow1" />
//       <div className="os-bg-glow os-glow2" />

//       {/* ── HEADER ── */}
//       <div ref={headRef} className={`os-header ${visible ? "oh-visible" : ""}`}>
//         <div className="section-tag">Our Story</div>
//         <h2 className="os-title">
//           The Vision Behind<br />
//           <span className="gold-accent">BuildGlory</span>
//         </h2>
//         <p className="os-subtitle">
//           From a single-room office in Gurgaon to Delhi NCR's most trusted architecture
//           &amp; interior design firm — every brick of our story is built on passion,
//           precision, and people.
//         </p>
//         <div className="os-stats">
//           {[
//             { val: "2011", label: "Founded" },
//             { val: "40+",  label: "Yrs Experience" },
//             { val: "500+", label: "Projects Done" },
//             { val: "15+",  label: "Team Members" },
//           ].map((s, i) => (
//             <div key={i} className="os-stat">
//               <span className="os-stat-val">{s.val}</span>
//               <span className="os-stat-label">{s.label}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── FOUNDERS ── */}
//       <div className="founders-section">
//         <div className="sub-section-title">
//           <span className="sst-line" /><span>Founding Team</span><span className="sst-line" />
//         </div>
//         <div className="founders-list">
//           {FOUNDERS.map((f, i) => <FounderCard key={i} person={f} index={i} />)}
//         </div>
//       </div>

//       {/* ── PRINCIPAL ARCHITECTS ── */}
//       <div className="architects-section">
//         <div className="sub-section-title">
//           <span className="sst-line" /><span>Principal Architects</span><span className="sst-line" />
//         </div>
//         <div className="architects-grid">
//           {ARCHITECTS.map((a, i) => <ArchitectCard key={i} person={a} delay={i * 0.18} />)}
//         </div>
//       </div>

//       {/* ── TEAM ── */}
//       <div className="team-section">
//         <div className="sub-section-title">
//           <span className="sst-line" /><span>Meet Our Team</span><span className="sst-line" />
//         </div>
//         <p className="team-intro">
//           At BuildGlory, every beautiful space begins with a brilliant team. Behind our
//           successful projects is a group of dedicated professionals who bring creativity,
//           technical skill, and passion to every design.
//         </p>
//         <div className="team-grid">
//           {TEAM.map((m, i) => <TeamCard key={i} member={m} delay={i * 0.1} />)}
//         </div>
//       </div>

//     </section>
//   );
// }





import { useEffect, useRef, useState } from "react";
import "../styles/OurStory.css";

/* ─────────────────────────────
   TEAM DATA — BuildGlory
───────────────────────────── */
const FOUNDERS = [
  {
    name: "Rahul Kumar Singh",
    role: "Founder & CEO",
    badge: "Visionary",
    quote: "A great architect doesn't just build walls — he builds feelings into those walls.",
    bio: "With over 15 years of architectural mastery, Rahul founded BuildGlory with one mission: to make extraordinary design accessible. A storyteller at heart, he blends modern design language with cultural roots — crafting spaces that feel like home from the very first glance.",
    photo: "/Rahul-Kumar-Singh.jpg",
    color: "#c9a84c",
  },
  {
    name: "Sanjeev Rathee",
    role: "Co-Founder",
    badge: "Strategist",
    quote: "Every project is a partnership — between our vision and your dream.",
    bio: "Sanjeev drives BuildGlory's growth strategy and client partnerships with 12+ years of industry expertise. His sharp business acumen and deep client relationships have made BuildGlory the most trusted name across Delhi NCR.",
    photo: "/Sanjeev-Rathee-2.jpg",
    color: "#4a90c4",
  },
];

/* Manju FIRST — higher priority */
// const ARCHITECTS = [
//   {
//     name: "Manju Patel",
//     role: "Principal Architect & Interior Designer",
//     specialty: "Structural Design & Lead",
//     bio: "As a seasoned interior designer and architect, Manju brings 10+ years of refined creativity to every project. She transforms interiors into immersive experiences — blending aesthetics, function, and emotion into every space she touches.",
//     photo: "/manju_patel.jpeg",
//     color: "#e8b4c8",
//     featured: true,
//   },
//   {
//     name: "Hemant Sharma",
//     role: "Principal Architect",
//     specialty: "Structural Design",
//     bio: "Hemant leads our structural design division with 10+ years of expertise. His buildings stand not just as structures but as landmarks — engineered for durability, designed for beauty.",
//     photo: "/hemant.jpeg",
//     initials: "HS",
//     color: "#27ae60",
//     featured: false,
//   },
// ];

const TEAM = [
  { name: "Manju Patel", role: "Principal Architect & Interior Designer Lead",   specialty: "10 yrs mastery",   photo: "/manju_patel.jpeg", color: "#9b59b6" },
  { name: "Hemanth ",        role: "Principal Architect",        specialty: "10 yrs on-site", photo: "/hemant.jpeg", color: "#1abc9c" },
  { name: "Shivani Rai",        role: "HR Manager",            specialty: "People & Culture",  photo: "/shivani.jpeg", color: "#e67e22" },
  { name: "MD Shad",            role: "Interior Designer",     specialty: "Creative Vision",   photo: "/md.jpg", color: "#c0392b" },
  { name: "Raja Singh",         role: "Digital Marketer",      specialty: "Growth Strategy",  photo: "/Raja-singh-scaled.jpg", color: "#8e44ad" },
   { name: "Pooja Adhikari",         role: "Digital Marketer",      specialty: "SEO",photo: "/pooja.jpeg", color: "#8e44ad" },
   { name: "Ashtha Shah",         role: "Digital Marketer",      specialty: "Content Creator",photo: "/Ashtha.jpeg", color: "#8e44ad" },

];

/* ─────────────────────────────
   useInView hook
───────────────────────────── */
function useInView(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

/* ─────────────────────────────
   FOUNDER CARD — big alternating
───────────────────────────── */
function FounderCard({ person, index }) {
  const ref = useRef(null);
  const visible = useInView(ref);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`founder-card ${visible ? "fc-visible" : ""} ${isEven ? "fc-left" : "fc-right"}`}
    >
      {/* Photo side */}
      <div className="fc-photo-wrap">
        <div className="fc-photo-frame" style={{ "--ac": person.color }}>
          <img
            src={person.photo}
            alt={person.name}
            className="fc-photo"
            loading="lazy"
          />
          <div className="fc-photo-shine" />
        </div>
        <div className="fc-badge-pill" style={{ background: person.color }}>
          {person.badge}
        </div>
        <div className="fc-name-plate">
          <span className="fc-plate-name">{person.name}</span>
          <span className="fc-plate-role" style={{ color: person.color }}>{person.role}</span>
        </div>
      </div>

      {/* Text side */}
      <div className="fc-content">
        <div className="fc-role-tag" style={{ "--ac": person.color }}>
          {person.role}
        </div>
        <h3 className="fc-name">{person.name}</h3>
        <p className="fc-bio">{person.bio}</p>
        <blockquote className="fc-quote" style={{ borderColor: person.color }}>
          <span className="fc-qq" style={{ color: person.color }}>"</span>
          {person.quote}
          <span className="fc-qq" style={{ color: person.color }}>"</span>
        </blockquote>
      </div>
    </div>
  );
}

/* ─────────────────────────────
   ARCHITECT CARD — Manju featured / Hemant normal
───────────────────────────── */
function ArchitectCard({ person, delay }) {
  const ref = useRef(null);
  const visible = useInView(ref);

  return (
    <div
      ref={ref}
      className={`arch-card ${person.featured ? "arch-featured" : ""} ${visible ? "ac-visible" : ""}`}
      style={{ "--delay": `${delay}s`, "--ac": person.color }}
    >
      {person.featured && <div className="arch-featured-tag">Lead Designer</div>}

      {/* Photo or initials */}
      <div className="arch-photo-wrap">
        {person.photo ? (
          <img src={person.photo} alt={person.name} className="arch-photo" loading="lazy" />
        ) : (
          <div className="arch-initials-avatar">
            <span>{person.initials}</span>
          </div>
        )}
        <div className="arch-specialty-tag">{person.specialty}</div>
      </div>

      <div className="arch-info">
        <span className="arch-role" style={{ color: person.color }}>{person.role}</span>
        <h4 className="arch-name">{person.name}</h4>
        <p className="arch-bio">{person.bio}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────
   TEAM CARD — small grid with photo
───────────────────────────── */
function TeamCard({ member, delay }) {
  const ref = useRef(null);
  const visible = useInView(ref);

  return (
    <div
      ref={ref}
      className={`team-card ${visible ? "tc-visible" : ""}`}
      style={{ "--delay": `${delay}s`, "--ac": member.color }}
    >
      <div className="tc-photo-wrap">
        <img
          src={member.photo}
          alt={member.name}
          className="tc-photo"
          loading="lazy"
        />
        <div className="tc-specialty">{member.specialty}</div>
      </div>
      <h4 className="tc-name">{member.name}</h4>
      <span className="tc-role" style={{ color: member.color }}>{member.role}</span>
      <p className="tc-bio">{member.bio}</p>
    </div>
  );
}

/* ─────────────────────────────
   MAIN EXPORT
───────────────────────────── */
export default function OurStory() {
  const headRef = useRef(null);
  const visible = useInView(headRef);

  return (
    <section id="our-story" className="ourstory-section">

      <div className="os-bg-grid" />
      <div className="os-bg-glow os-glow1" />
      <div className="os-bg-glow os-glow2" />

      {/* ── HEADER ── */}
      <div ref={headRef} className={`os-header ${visible ? "oh-visible" : ""}`}>
        <div className="section-tag">Our Story</div>
        <h2 className="os-title">
          The Vision Behind<br />
          <span className="gold-accent">BuildGlory</span>
        </h2>
        <p className="os-subtitle">
          From a single-room office in Gurgaon to Delhi NCR's most trusted architecture
          &amp; interior design firm — every brick of our story is built on passion,
          precision, and people.
        </p>
        <div className="os-stats">
          {[
            { val: "2011", label: "Founded" },
            { val: "40+",  label: "Yrs Experience" },
            { val: "500+", label: "Projects Done" },
            { val: "15+",  label: "Team Members" },
          ].map((s, i) => (
            <div key={i} className="os-stat">
              <span className="os-stat-val">{s.val}</span>
              <span className="os-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── FOUNDERS ── */}
      <div className="founders-section">
        <div className="sub-section-title">
          <span className="sst-line" /><span>Founding Team</span><span className="sst-line" />
        </div>
        <div className="founders-list">
          {FOUNDERS.map((f, i) => <FounderCard key={i} person={f} index={i} />)}
        </div>
      </div>

      {/* ── PRINCIPAL ARCHITECTS ── */}
      {/* <div className="architects-section">
        <div className="sub-section-title">
          <span className="sst-line" /><span>Principal Architects</span><span className="sst-line" />
        </div>
        <div className="architects-grid">
          {ARCHITECTS.map((a, i) => <ArchitectCard key={i} person={a} delay={i * 0.18} />)}
        </div>
      </div> */}

      {/* ── TEAM ── */}
      <div className="team-section">
        <div className="sub-section-title">
          <span className="sst-line" /><span>Meet Our Team</span><span className="sst-line" />
        </div>
        <p className="team-intro">
          At BuildGlory, every beautiful space begins with a brilliant team. Behind our
          successful projects is a group of dedicated professionals who bring creativity,
          technical skill, and passion to every design.
        </p>
        <div className="team-grid">
          {TEAM.map((m, i) => <TeamCard key={i} member={m} delay={i * 0.1} />)}
        </div>
      </div>

    </section>
  );
}
