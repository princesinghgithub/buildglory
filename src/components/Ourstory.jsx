// import { useEffect, useRef, useState } from "react";
// import "../styles/Ourstory.css";

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
//     photo: "/Sanjeev-Rathee-2.jpeg",
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
import "../styles/Ourstory.css";

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
    photo: "/Sanjeev-Rathee-2.jpeg",
    color: "#4a90c4",
  },
];

const TEAM = [
  { name: "Shailendra Kumar Jain", role: "Principal Architect",            specialty: "35+ yrs experience",  photo: "/shailendra.jpeg" },
  { name: "Manju Patel",           role: "Principal Architect & Interior Designer Lead", specialty: "10 yrs mastery",      photo: "/manju_patel.jpeg" },
  { name: "Hemanth Kumar",         role: "Principal Architect",            specialty: "10 yrs on-site",      photo: "/hemant.jpeg" },
  { name: "Sudhir Kumar",          role: "Civil Engineer",                 specialty: "15 yrs on-site",      photo: "/sudhir.jpg" },
  { name: "Vedika",                role: "Junior Architect",               specialty: "Space Planning",      photo: "/vedika.jpeg" },
  { name: "Shivani Rai",           role: "HR Manager",                     specialty: "People & Culture",    photo: "/shivani.jpeg" },
  { name: "Priyanka Kunwar",       role: "Performance Marketer",           specialty: "Ad Campaigns",        photo: "/priyanka.jpeg" },
  { name: "Nikhil",                role: "Digital Marketing Specialist",   specialty: "SEO & Social",        photo: "/nikhil.jpeg" },
  { name: "Priti Jha",             role: "Content Creation & Anchor",      specialty: "Storytelling",        photo: "/priti.jpeg" },
  { name: "Reena Verma",           role: "Social Media Executive",         specialty: "Audience Engagement", photo: "/reena.jpeg" },
];

const STATS = [
  { from: 1995, to: 2011, suffix: "",  label: "Founded" },
  { from: 0,    to: 40,   suffix: "+", label: "Yrs Experience" },
  { from: 0,    to: 500,  suffix: "+", label: "Projects Done" },
  { from: 0,    to: 15,   suffix: "+", label: "Team Members" },
];

const DISCIPLINES = [
  "Architecture", "Interior Design", "Space Planning",
  "Turnkey Projects", "3D Visualisation", "Project Management",
];

/* ─────────────────────────────
   Hooks
───────────────────────────── */
function useInView(ref, threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

/* Mouse-driven 3D tilt + glare position, written straight to CSS vars (no re-render) */
function useTilt(max = 8) {
  const ref = useRef(null);
  const onPointerMove = (e) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${(0.5 - y) * max}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * max}deg`);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };
  const onPointerLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };
  return { ref, onPointerMove, onPointerLeave };
}

/* ─────────────────────────────
   Small pieces
───────────────────────────── */
function CountUp({ from, to, suffix, start }) {
  const [n, setN] = useState(from);
  useEffect(() => {
    if (!start) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dur = reduced ? 1 : 2000;
    const t0 = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setN(Math.round(from + (to - from) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, from, to]);
  return <>{n}{suffix}</>;
}

function SplitWords({ text, start = 0, gold = false }) {
  return text.split(" ").map((w, i) => (
    <span key={i} className="sw">
      <span className={`sw-in ${gold ? "sw-gold" : ""}`} style={{ "--i": start + i }}>{w}</span>
    </span>
  ));
}

function Corners() {
  return (
    <>
      <span className="corner tl" /><span className="corner tr" />
      <span className="corner bl" /><span className="corner br" />
    </>
  );
}

/* Architectural floor plan that draws itself in the background */
function Blueprint({ active }) {
  const lines = [
    <rect key="a" x="10" y="10" width="380" height="280" />,
    <line key="b" x1="10" y1="120" x2="180" y2="120" />,
    <line key="c" x1="180" y1="10" x2="180" y2="200" />,
    <line key="d" x1="180" y1="200" x2="260" y2="200" />,
    <line key="e" x1="300" y1="200" x2="390" y2="200" />,
    <path key="f" d="M260 200 L260 160 A40 40 0 0 1 300 200" />,
    <line key="g" x1="260" y1="10" x2="260" y2="120" />,
    <rect key="h" x="40" y="150" width="100" height="110" />,
    <rect key="i" x="50" y="160" width="80" height="26" />,
    <circle key="j" cx="320" cy="70" r="30" />,
    <rect key="k" x="200" y="30" width="40" height="70" />,
    <path key="l" d="M290 215 V285 M305 215 V285 M320 215 V285 M335 215 V285 M350 215 V285 M365 215 V285" />,
    <path key="m" d="M10 -8 H390 M10 -14 V-2 M390 -14 V-2" />,
    <path key="n" d="M402 10 V290 M396 10 H408 M396 290 H408" />,
  ];
  return (
    <svg className={`os-blueprint ${active ? "is-in" : ""}`} viewBox="-20 -24 440 330" aria-hidden="true">
      {lines.map((el, i) => (
        <el.type key={el.key} {...el.props} className="bp" pathLength="1" style={{ "--i": i }} />
      ))}
    </svg>
  );
}

function SectionTitle({ kicker, title, accent }) {
  const ref = useRef(null);
  const visible = useInView(ref, 0.4);
  return (
    <div ref={ref} className={`os-sub ${visible ? "is-in" : ""}`}>
      <span className="os-sub-kicker">{kicker}</span>
      <h3 className="os-sub-title">{title} <em>{accent}</em></h3>
      <span className="os-sub-rule" />
    </div>
  );
}

function Marquee() {
  const items = [...DISCIPLINES, ...DISCIPLINES];
  return (
    <div className="os-marquee" aria-hidden="true">
      <div className="os-marquee-track">
        {items.map((d, i) => (
          <span key={i} className="os-marquee-item">
            {d}<span className="os-marquee-star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────
   FOUNDER — big alternating spread
───────────────────────────── */
function FounderCard({ person, index }) {
  const ref = useRef(null);
  const visible = useInView(ref, 0.2);
  const tilt = useTilt(7);

  return (
    <article
      ref={ref}
      className={`founder ${index % 2 ? "founder--flip" : ""} ${visible ? "is-in" : ""}`}
      style={{ "--ac": person.color }}
    >
      <div className="founder-media">
        <span className="founder-index">{String(index + 1).padStart(2, "0")}</span>
        <div className="founder-frame" {...tilt}>
          <div className="founder-photo-clip">
            <div className="founder-zoom">
              <img src={person.photo} alt={person.name} loading="lazy" />
            </div>
            <div className="founder-glare" />
          </div>
          <div className="founder-curtain" />
          <Corners />
        </div>
        <div className="founder-badge">{person.badge}</div>
      </div>

      <div className="founder-content">
        <span className="founder-role">{person.role}</span>
        <h3 className="founder-name">{person.name}</h3>
        <span className="founder-rule" />
        <p className="founder-bio">{person.bio}</p>
        <blockquote className="founder-quote">{person.quote}</blockquote>
      </div>
    </article>
  );
}

/* ─────────────────────────────
   TEAM MEMBER — tall portrait card
───────────────────────────── */
function TeamCard({ member, index }) {
  const ref = useRef(null);
  const visible = useInView(ref);
  const tilt = useTilt(10);

  return (
    <div
      ref={ref}
      className={`member ${visible ? "is-in" : ""}`}
      style={{ "--d": `${(index % 4) * 0.1}s` }}
    >
      <div className="member-card" {...tilt}>
        <div className="member-photo">
          <div className="member-zoom">
            <img src={member.photo} alt={member.name} loading="lazy" />
          </div>
          <div className="member-shade" />
          <div className="member-glare" />
        </div>
        <span className="member-num">{String(index + 1).padStart(2, "0")}</span>
        <div className="member-info">
          <div className="member-spec"><span>{member.specialty}</span></div>
          <h4 className="member-name">{member.name}</h4>
          <span className="member-line" />
          <span className="member-role">{member.role}</span>
        </div>
        <Corners />
      </div>
    </div>
  );
}

/* ─────────────────────────────
   MAIN EXPORT
───────────────────────────── */
export default function OurStory() {
  const headRef = useRef(null);
  const visible = useInView(headRef, 0.25);

  return (
    <section id="our-story" className="ourstory-section">

      <div className="os-bg-grid" />
      <div className="os-bg-glow os-glow1" />
      <div className="os-bg-glow os-glow2" />
      <Blueprint active={visible} />

      {/* ── HEADER ── */}
      <div ref={headRef} className={`os-header ${visible ? "is-in" : ""}`}>
        <div className="os-eyebrow">
          <span className="os-eyebrow-line" />Our Story<span className="os-eyebrow-line" />
        </div>
        <h2 className="os-title">
          <SplitWords text="The Vision Behind" />
          <br />
          <SplitWords text="BuildGlory" start={3} gold />
        </h2>
        <p className="os-subtitle">
          From a single-room office in Gurgaon to Delhi NCR's most trusted architecture
          &amp; interior design firm — every brick of our story is built on passion,
          precision, and people.
        </p>
        <div className="os-stats">
          {STATS.map((s, i) => (
            <div key={i} className="os-stat" style={{ "--i": i }}>
              <span className="os-stat-val">
                <CountUp from={s.from} to={s.to} suffix={s.suffix} start={visible} />
              </span>
              <span className="os-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <Marquee />

      {/* ── FOUNDERS ── */}
      <div className="founders-section">
        <SectionTitle kicker="The Minds Behind" title="Founding" accent="Team" />
        <div className="founders-list">
          {FOUNDERS.map((f, i) => <FounderCard key={f.name} person={f} index={i} />)}
        </div>
      </div>

      {/* ── TEAM ── */}
      <div className="team-section">
        <SectionTitle kicker="Architects · Designers · Makers" title="Meet Our" accent="Team" />
        <p className="team-intro">
          At BuildGlory, every beautiful space begins with a brilliant team. Behind our
          successful projects is a group of dedicated professionals who bring creativity,
          technical skill, and passion to every design.
        </p>
        <div className="team-grid">
          {TEAM.map((m, i) => <TeamCard key={m.name} member={m} index={i} />)}
        </div>
      </div>

    </section>
  );
}
