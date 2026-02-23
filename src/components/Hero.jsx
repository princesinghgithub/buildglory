import { useEffect, useState } from "react";
import "../styles/Hero.css";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* Stars data */
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    cx: (i * 139.5 + 11) % 800,
    cy: (i * 97.3  + 7)  % 350,
    r:  0.4 + (i % 3) * 0.5,
    dur: 1.5 + (i % 4) * 0.6,
    delay: (i * 0.22) % 3,
  }));

  /* Falling bricks */
  const bricks = [
    { x: 490, delay: "0s",   dur: "2.2s", fill: "#c8750a" },
    { x: 504, delay: "0.9s", dur: "2.6s", fill: "#a05508" },
    { x: 477, delay: "1.7s", dur: "2.0s", fill: "#d4900a" },
    { x: 496, delay: "2.5s", dur: "2.3s", fill: "#b06010" },
  ];

  return (
    <section className="hero-section">

      {/* ════════════════════════════════════════
          LEFT — Text content
          ════════════════════════════════════════ */}
      <div className="hero-left" style={{ transform: `translateY(${scrollY * -0.08}px)` }}>

        <div className="hero-badge">
          <span className="badge-dot" />
          Premium Architecture &amp; Interior Design
        </div>

        <h1 className="hero-title">
          Building Your<br />
          <span className="gold-word">Dream Space</span><br />
          With Precision
        </h1>

        <p className="hero-desc">
          From foundation to finish — BuildGlory crafts extraordinary
          residential &amp; commercial spaces with 40+ years of expertise
          across Delhi NCR &amp; Gurgaon.
        </p>

        <div className="hero-btns">
          <a href="#contact" className="btn-primary-hero">
            Start Your Project <span>→</span>
          </a>
          <a href="#services" className="btn-secondary-hero">
            Explore Services
          </a>
        </div>

        <div className="hero-stats">
          {[
            { icon: "🏆", val: "500+", label: "Projects" },
            { icon: "⚡", val: "40",   label: "Day Delivery" },
            { icon: "✅", val: "5yr",  label: "Warranty" },
            { icon: "🏙️", val: "15+",  label: "Cities" },
          ].map((s, i) => (
            <div key={i} className="stat-chip">
              <span className="sc-icon">{s.icon}</span>
              <span className="sc-val">{s.val}</span>
              <span className="sc-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════
          RIGHT — Full Construction Animation SVG
          ════════════════════════════════════════ */}
      <div className="hero-right">
        <svg
          className="construction-svg"
          viewBox="0 0 800 620"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="skyG" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%"   stopColor="#020610" />
              <stop offset="60%"  stopColor="#06122a" />
              <stop offset="100%" stopColor="#0d1f3c" />
            </linearGradient>
            <linearGradient id="gGround" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1a2510" />
              <stop offset="100%" stopColor="#0d1208" />
            </linearGradient>
            <linearGradient id="gGold1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#d4a017" />
              <stop offset="100%" stopColor="#8b6500" />
            </linearGradient>
            <linearGradient id="gGold2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#c9920a" />
              <stop offset="100%" stopColor="#7a5500" />
            </linearGradient>
            <linearGradient id="gGold3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%"   stopColor="#e8b820" />
              <stop offset="100%" stopColor="#c9a010" />
            </linearGradient>
            <linearGradient id="gCable" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%"   stopColor="#ccc" stopOpacity="1" />
              <stop offset="100%" stopColor="#ccc" stopOpacity=".2" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="sglow">
              <feGaussianBlur stdDeviation="2" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          {/* ── SKY ── */}
          <rect width="800" height="620" fill="url(#skyG)" />

          {/* ── STARS ── */}
          {stars.map(s => (
            <circle key={s.id} cx={s.cx} cy={s.cy} r={s.r} fill="white">
              <animate attributeName="opacity" values=".1;1;.1"
                dur={`${s.dur}s`} begin={`${s.delay}s`} repeatCount="indefinite" />
            </circle>
          ))}

          {/* ── MOON ── */}
          <circle cx="700" cy="65" r="40" fill="rgba(255,230,80,.07)">
            <animate attributeName="r"       values="40;52;40" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values=".07;.16;.07" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="700" cy="65" r="36" fill="#f5e272" filter="url(#glow)" />
          <circle cx="718" cy="50" r="30" fill="#04080f" />

          {/* ── GROUND ── */}
          <rect x="0" y="540" width="800" height="80" fill="url(#gGround)" />
          <rect x="0" y="537" width="800" height="6"  fill="#2a3815" />

          {/* ── ROAD ── */}
          <rect x="0" y="548" width="800" height="45" fill="#1a1a1a" />
          {Array.from({ length: 9 }).map((_, i) => (
            <rect key={i} x={i * 100} y="568" width="65" height="4" fill="#333" rx="2">
              <animateTransform attributeName="transform" type="translate"
                values="0,0;-100,0" dur="2s" repeatCount="indefinite"/>
            </rect>
          ))}

          {/* ── CITY SILHOUETTE (far bg) ── */}
          <g fill="#071020" opacity=".5">
            <rect x="0"   y="430" width="55"  height="115" />
            <rect x="50"  y="405" width="38"  height="140" />
            <rect x="83"  y="450" width="45"  height="95"  />
            <rect x="660" y="420" width="50"  height="125" />
            <rect x="705" y="400" width="42"  height="145" />
            <rect x="742" y="440" width="58"  height="105" />
          </g>

          {/* ── BACKGROUND BUILDINGS ── */}
          {/* Left */}
          <g opacity=".6">
            <rect x="28" y="380" width="95" height="165" fill="#111e2e" />
            <rect x="28" y="374" width="95" height="9" fill="#1a2a40" />
            {[0,1,2,3].map(r=>[0,1,2].map(c=>(
              <rect key={`${r}${c}`} x={35+c*28} y={384+r*36}
                width={18} height={24} rx="2" fill={r*3+c===5?"#fffde7":"#1565c0"} opacity=".55">
                <animate attributeName="opacity"
                  values={r*3+c===5?".55;.05;.55":".45;.45;.45"}
                  dur={`${4+r+c}s`} begin={`${r*.4}s`} repeatCount="indefinite"/>
              </rect>
            )))}
          </g>
          {/* Right */}
          <g opacity=".55">
            <rect x="668" y="400" width="88" height="145" fill="#0f1a28" />
            <rect x="668" y="394" width="88" height="9" fill="#182436" />
            {[0,1,2].map(r=>[0,1,2].map(c=>(
              <rect key={`${r}${c}`} x={676+c*26} y={404+r*40}
                width={18} height={26} rx="2" fill="#4fc3f7" opacity=".4">
                <animate attributeName="opacity"
                  values={r+c===3?".55;.05;.55":".38;.38;.38"}
                  dur={`${5+r}s`} begin={`${c*.8}s`} repeatCount="indefinite"/>
              </rect>
            )))}
          </g>

          {/* ── TREES ── */}
          {[
            {x:168,y:535,s:.85},{x:198,y:528,s:.7},{x:225,y:532,s:.75},
            {x:580,y:530,s:.8},{x:610,y:524,s:.9},{x:642,y:528,s:.72},
          ].map((t,i)=>(
            <g key={i} transform={`translate(${t.x},${t.y}) scale(${t.s})`}>
              <rect x="-4" y="8"   width="8"  height="30" fill="#4a3020" rx="2"/>
              <ellipse cx="0" cy="8"   rx="22" ry="16" fill="#1b4d10"/>
              <ellipse cx="0" cy="0"   rx="17" ry="13" fill="#236614"/>
              <ellipse cx="0" cy="-9"  rx="12" ry="10" fill="#2e7d32"/>
              <ellipse cx="0" cy="-17" rx="7"  ry="7"  fill="#388e3c"/>
            </g>
          ))}

          {/* ── SCAFFOLD ── */}
          <g opacity=".75">
            <rect x="270" y="165" width="8" height="380" fill="#6a7060" rx="2"/>
            <rect x="522" y="165" width="8" height="380" fill="#6a7060" rx="2"/>
            {[165,235,305,375,445].map((y,i)=>(
              <g key={i}>
                <rect x="270" y={y} width="260" height="6" fill="#8a7060" rx="2"/>
                <line x1="270" y1={y} x2="310" y2={y+45} stroke="#5a5045" strokeWidth="2.5"/>
                <line x1="530" y1={y} x2="490" y2={y+45} stroke="#5a5045" strokeWidth="2.5"/>
              </g>
            ))}
            {/* Planks */}
            <rect x="275" y="228" width="250" height="7" fill="#a08060" rx="2"/>
            <rect x="275" y="298" width="250" height="7" fill="#a08060" rx="2"/>
            <rect x="275" y="368" width="250" height="7" fill="#a08060" rx="2"/>
          </g>

          {/* ════════════════════════════
              MAIN BUILDING
              ════════════════════════════ */}

          {/* Foundation */}
          <rect x="278" y="528" width="244" height="16" fill="#5a4008" rx="2"/>

          {/* Floor 1 */}
          <g>
            <animateTransform attributeName="transform" type="translate"
              values="0,35;0,0" dur=".7s" begin=".1s" fill="freeze"/>
            <rect x="282" y="468" width="236" height="62" fill="url(#gGold1)"/>
            <rect x="282" y="468" width="236" height="6"  fill="#e8c030"/>
            <rect x="282" y="524" width="236" height="4"  fill="#6b4800"/>
            {[0,1,2,3,4,5].map(i=>(
              <g key={i}>
                <rect x={292+i*36} y={477} width={22} height={36} rx="2" fill="#0a1628"/>
                <rect x={292+i*36} y={477} width={22} height={36} rx="2" fill="#fffde7" opacity="0">
                  <animate attributeName="opacity"
                    values={i%2===0?"0;.5;0":".38;.38;.38"}
                    dur={`${4+i}s`} begin={`${i*.35}s`} repeatCount="indefinite"/>
                </rect>
              </g>
            ))}
          </g>

          {/* Floor 2 */}
          <g>
            <animateTransform attributeName="transform" type="translate"
              values="0,40;0,0" dur=".7s" begin=".55s" fill="freeze"/>
            <rect x="290" y="406" width="220" height="64" fill="url(#gGold2)"/>
            <rect x="290" y="406" width="220" height="6"  fill="#e0b828"/>
            <rect x="290" y="464" width="220" height="4"  fill="#6b4800"/>
            {[0,1,2,3,4].map(i=>(
              <rect key={i} x={300+i*40} y={415} width={24} height={36} rx="2" fill="#4fc3f7" opacity=".4">
                <animate attributeName="opacity" values=".4;.06;.4"
                  dur={`${5+i}s`} begin={`${i*.5}s`} repeatCount="indefinite"/>
              </rect>
            ))}
          </g>

          {/* Floor 3 */}
          <g>
            <animateTransform attributeName="transform" type="translate"
              values="0,45;0,0" dur=".7s" begin="1s" fill="freeze"/>
            <rect x="298" y="346" width="204" height="62" fill="url(#gGold1)"/>
            <rect x="298" y="346" width="204" height="6"  fill="#e8c030"/>
            {[0,1,2,3].map(i=>(
              <rect key={i} x={310+i*46} y={356} width={26} height={36} rx="2" fill="#fffde7" opacity=".0">
                <animate attributeName="opacity" values="0;.45;0"
                  dur={`${6+i}s`} begin={`${i*.6}s`} repeatCount="indefinite"/>
              </rect>
            ))}
          </g>

          {/* Floor 4 */}
          <g>
            <animateTransform attributeName="transform" type="translate"
              values="0,45;0,0" dur=".7s" begin="1.45s" fill="freeze"/>
            <rect x="308" y="290" width="184" height="58" fill="url(#gGold2)"/>
            <rect x="308" y="290" width="184" height="6"  fill="#e0b828"/>
            {[0,1,2,3].map(i=>(
              <rect key={i} x={318+i*42} y={300} width={24} height={34} rx="2" fill="#4fc3f7" opacity=".4">
                <animate attributeName="opacity" values=".4;.05;.4"
                  dur={`${7+i}s`} begin={`${i*.7}s`} repeatCount="indefinite"/>
              </rect>
            ))}
          </g>

          {/* Floor 5 - top / under construction */}
          <g>
            <animateTransform attributeName="transform" type="translate"
              values="0,45;0,0" dur=".7s" begin="1.9s" fill="freeze"/>
            <rect x="320" y="248" width="160" height="44" fill="url(#gGold3)"/>
            <rect x="320" y="248" width="160" height="5"  fill="#f0d040"/>
            {/* Bricks being placed on top */}
            {Array.from({length:7}).map((_,i)=>(
              <rect key={i} x={326+i*21} y={239} width={18} height={10} rx="2"
                fill={i%2===0?"#c8750a":"#a05508"} opacity="0">
                <animate attributeName="opacity" values="0;1" dur=".35s"
                  begin={`${2.2+i*.22}s`} fill="freeze"/>
                <animateTransform attributeName="transform" type="translate"
                  values="0,-18;0,0" dur=".35s" begin={`${2.2+i*.22}s`} fill="freeze"/>
              </rect>
            ))}
          </g>

          {/* Sign */}
          <rect x="358" y="502" width="84" height="22" rx="3" fill="#c9a84c"/>
          <rect x="360" y="504" width="80" height="18" rx="2" fill="#8b6500"/>
          <text x="400" y="517" textAnchor="middle" fill="#f5e88a"
            fontSize="9" fontFamily="Georgia,serif" fontWeight="bold" letterSpacing="2">BUILDGLORY</text>

          {/* ════════════════════════════
              CRANE
              ════════════════════════════ */}
          <g>
            <animateTransform attributeName="transform" type="rotate"
              values="0 620 200; 1.8 620 200; 0 620 200; -1.5 620 200; 0 620 200"
              dur="5s" repeatCount="indefinite"/>
            {/* Mast */}
            <rect x="613" y="200" width="13" height="345" fill="#d4980a" rx="2"/>
            {/* Jib */}
            <rect x="460" y="200" width="165" height="11" fill="#d4980a" rx="2"/>
            {/* Struts */}
            <line x1="619" y1="200" x2="540" y2="255" stroke="#b07c10" strokeWidth="4"/>
            <line x1="619" y1="200" x2="668" y2="255" stroke="#b07c10" strokeWidth="4"/>
            {/* CWT */}
            <rect x="625" y="207" width="42" height="26" rx="3" fill="#9a6a08"/>
            {/* Cable */}
            <g>
              <animateTransform attributeName="transform" type="rotate"
                values="0 520 211; 5 520 211; 0 520 211; -4 520 211; 0 520 211"
                dur="5s" repeatCount="indefinite"/>
              <line x1="520" y1="211" x2="520" y2="335"
                stroke="url(#gCable)" strokeWidth="2.5"/>
              {/* Hook */}
              <g>
                <animateTransform attributeName="transform" type="translate"
                  values="0,0;6,5;0,0;-5,3;0,0" dur="5s" repeatCount="indefinite"/>
                <rect x="511" y="332" width="18" height="12" rx="3" fill="#555"/>
                <rect x="508" y="344" width="24" height="18" rx="3" fill="#90a4ae"/>
                {/* Sand */}
                <rect x="517" y="362" width="7" height="0" rx="3" fill="#c8a050" opacity=".8">
                  <animate attributeName="height" values="0;30;30;0" dur="1.6s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0;.8;.8;0" dur="1.6s" repeatCount="indefinite"/>
                </rect>
                <ellipse cx="520" cy="395" rx="12" ry="4" fill="rgba(200,160,80,.4)" opacity="0">
                  <animate attributeName="opacity" values="0;.5;0" dur="1.6s" begin=".3s" repeatCount="indefinite"/>
                  <animate attributeName="rx" values="4;12;4" dur="1.6s" begin=".3s" repeatCount="indefinite"/>
                </ellipse>
              </g>
            </g>
          </g>

          {/* Falling bricks from crane */}
          {bricks.map((b,i)=>(
            <rect key={i} x={b.x} y={220} width={20} height={9} rx="2" fill={b.fill} opacity="0">
              <animate attributeName="opacity" values="0;1;1;0"
                dur={b.dur} begin={b.delay} repeatCount="indefinite"/>
              <animateTransform attributeName="transform" type="translate"
                values="0,0;3,110;5,130" dur={b.dur} begin={b.delay} repeatCount="indefinite"/>
              <animateTransform attributeName="transform" type="rotate"
                values="0;30;40" dur={b.dur} begin={b.delay} repeatCount="indefinite" additive="sum"/>
            </rect>
          ))}

          {/* ── DUST PUFFS ── */}
          {[{cx:322,cy:245,d:"0s",dur:"2s"},{cx:478,cy:242,d:".7s",dur:"2.4s"},{cx:400,cy:244,d:"1.4s",dur:"1.8s"}].map((p,i)=>(
            <circle key={i} cx={p.cx} cy={p.cy} r="3" fill="rgba(210,190,140,.45)">
              <animate attributeName="r"       values="2;20;24"   dur={p.dur} begin={p.d} repeatCount="indefinite"/>
              <animate attributeName="opacity" values=".6;.3;0"   dur={p.dur} begin={p.d} repeatCount="indefinite"/>
            </circle>
          ))}

          {/* ════════════════════════════
              WORKERS — all via SMIL
              ════════════════════════════ */}

          {/* WORKER 1 — MISTRY (top scaffold, rocks) */}
          <g>
            <animateTransform attributeName="transform" type="rotate"
              values="-5 302 368; 4 302 368; -5 302 368" dur=".9s" repeatCount="indefinite"/>
            <ellipse cx="302" cy="342" rx="14" ry="7" fill="#f39c12"/>
            <rect x="288" y="346" width="28" height="3" fill="#d4860a" rx="1"/>
            <circle cx="302" cy="356" r="11" fill="#c8906a"/>
            <circle cx="299" cy="355" r="1.5" fill="#555"/>
            <rect x="295" y="367" width="14" height="20" fill="#2980b9" rx="3"/>
            <rect x="276" y="371" width="20" height="5" fill="#c8906a" rx="2"/>
            <rect x="263" y="368" width="15" height="5" fill="#bbb" rx="2"/>
            <rect x="257" y="366" width="8"  height="6" fill="#999" rx="1"/>
            <rect x="309" y="371" width="16" height="5" fill="#c8906a" rx="2"/>
            <rect x="295" y="387" width="6"  height="15" fill="#1a252f" rx="2"/>
            <rect x="303" y="387" width="6"  height="15" fill="#1a252f" rx="2"/>
          </g>

          {/* WORKER 2 — PAINTER (right scaffold, slides) */}
          <g>
            <animateTransform attributeName="transform" type="translate"
              values="0,0;16,0;0,0" dur="1.4s" repeatCount="indefinite"/>
            <ellipse cx="500" cy="298" rx="14" ry="7" fill="#9b59b6"/>
            <rect x="486" y="302" width="28" height="3" fill="#7d3c98" rx="1"/>
            <circle cx="500" cy="311" r="11" fill="#d4a070"/>
            <rect x="493" y="322" width="14" height="20" fill="#c0392b" rx="3"/>
            <rect x="474" y="326" width="20" height="5" fill="#d4a070" rx="2"/>
            <rect x="456" y="318" width="18" height="18" fill="#1565c0" rx="2"/>
            <rect x="458" y="315" width="14" height="6"  fill="#0d47a1" rx="1"/>
            <rect x="507" y="326" width="18" height="5"  fill="#d4a070" rx="2"/>
            <rect x="523" y="318" width="6"  height="20" fill="#6d4c41" rx="1"/>
            <rect x="520" y="314" width="12" height="6"  fill="#9e9e9e" rx="1"/>
            <rect x="493" y="342" width="6"  height="16" fill="#1a1a2e" rx="2"/>
            <rect x="501" y="342" width="6"  height="16" fill="#1a1a2e" rx="2"/>
          </g>

          {/* WORKER 3 — HAMMER (ground left, swings) */}
          <g>
            <animateTransform attributeName="transform" type="rotate"
              values="-22 235 505; 6 235 505; -22 235 505" dur=".32s" repeatCount="indefinite"/>
            <ellipse cx="235" cy="482" rx="14" ry="7" fill="#27ae60"/>
            <rect x="221" y="486" width="28" height="3" fill="#1e8449" rx="1"/>
            <circle cx="235" cy="495" r="11" fill="#c8906a"/>
            <rect x="228" y="506" width="14" height="20" fill="#8e44ad" rx="3"/>
            <rect x="244" y="500" width="22" height="10" fill="#546e7a" rx="3"/>
            <rect x="248" y="510" width="5"  height="16" fill="#6d4c41" rx="1"/>
            <rect x="213" y="510" width="16" height="5"  fill="#c8906a" rx="2"/>
            <rect x="228" y="526" width="6"  height="16" fill="#1a237e" rx="2"/>
            <rect x="236" y="526" width="6"  height="16" fill="#1a237e" rx="2"/>
          </g>

          {/* WORKER 4 — CARRIER (walks left←right) */}
          <g>
            <animateTransform attributeName="transform" type="translate"
              values="600,0;-60,0;-60,0;600,0"
              keyTimes="0;0.4;0.52;1"
              dur="7s" repeatCount="indefinite"/>
            <rect x="120" y="462" width="32" height="20" fill="#8d6e63" rx="3"/>
            <rect x="122" y="464" width="28" height="16" fill="#795548" rx="2"/>
            <text x="136" y="476" textAnchor="middle" fill="#a0856a" fontSize="6" fontWeight="bold">CEMENT</text>
            <ellipse cx="136" cy="482" rx="14" ry="7" fill="#e74c3c"/>
            <rect x="122" y="486" width="28" height="3" fill="#c0392b" rx="1"/>
            <circle cx="136" cy="496" r="11" fill="#d4a070"/>
            <rect x="140" y="482" width="13" height="5" fill="#d4a070" rx="2"/>
            <rect x="129" y="507" width="14" height="20" fill="#e67e22" rx="3"/>
            <g>
              <animateTransform attributeName="transform" type="rotate"
                values="-20 122 510;20 122 510;-20 122 510" dur=".5s" repeatCount="indefinite"/>
              <rect x="114" y="508" width="17" height="5" fill="#d4a070" rx="2"/>
            </g>
            <g>
              <animateTransform attributeName="transform" type="rotate"
                values="-15 132 527;15 132 527;-15 132 527" dur=".5s" repeatCount="indefinite"/>
              <rect x="129" y="527" width="6" height="16" fill="#1a1a2e" rx="2"/>
            </g>
            <g>
              <animateTransform attributeName="transform" type="rotate"
                values="15 140 527;-15 140 527;15 140 527" dur=".5s" repeatCount="indefinite"/>
              <rect x="137" y="527" width="6" height="16" fill="#1a1a2e" rx="2"/>
            </g>
          </g>

          {/* WORKER 5 — WHEELBARROW (pushes right→left) */}
          <g>
            <animateTransform attributeName="transform" type="translate"
              values="-80,0;520,0;520,0;-80,0"
              keyTimes="0;0.4;0.55;1"
              dur="8s" repeatCount="indefinite"/>
            <polygon points="240,510 292,510 284,530 248,530" fill="#8d6e63"/>
            <ellipse cx="266" cy="512" rx="24" ry="8" fill="#c8a050" opacity=".9"/>
            <line x1="240" y1="510" x2="222" y2="494" stroke="#5d4037" strokeWidth="4" strokeLinecap="round"/>
            <line x1="292" y1="510" x2="310" y2="494" stroke="#5d4037" strokeWidth="4" strokeLinecap="round"/>
            <g>
              <animateTransform attributeName="transform" type="rotate"
                values="0 266 542;360 266 542" dur="1s" repeatCount="indefinite"/>
              <circle cx="266" cy="542" r="13" fill="#111" stroke="#555" strokeWidth="2.5"/>
              <line x1="253" y1="542" x2="279" y2="542" stroke="#777" strokeWidth="2"/>
              <line x1="266" y1="529" x2="266" y2="555" stroke="#777" strokeWidth="2"/>
            </g>
            {/* pusher */}
            <ellipse cx="314" cy="474" rx="13" ry="7" fill="#f39c12"/>
            <rect x="301" y="478" width="26" height="3" fill="#d68910" rx="1"/>
            <circle cx="314" cy="487" r="11" fill="#f0c080"/>
            <rect x="307" y="498" width="14" height="18" fill="#3498db" rx="3"/>
            <rect x="294" y="501" width="15" height="5" fill="#f0c080" rx="2"/>
            <rect x="321" y="501" width="15" height="5" fill="#f0c080" rx="2"/>
            <g>
              <animateTransform attributeName="transform" type="rotate"
                values="-14 310 516;14 310 516;-14 310 516" dur=".5s" repeatCount="indefinite"/>
              <rect x="307" y="516" width="6" height="15" fill="#1a1a2e" rx="2"/>
            </g>
            <g>
              <animateTransform attributeName="transform" type="rotate"
                values="14 318 516;-14 318 516;14 318 516" dur=".5s" repeatCount="indefinite"/>
              <rect x="315" y="516" width="6" height="15" fill="#1a1a2e" rx="2"/>
            </g>
          </g>

          {/* ── CEMENT TRUCK ── */}
          <g>
            <animateTransform attributeName="transform" type="translate"
              values="-200,0;0,0;0,0;-800,0"
              keyTimes="0;0.2;0.65;1"
              dur="12s" repeatCount="indefinite"/>
            <rect x="20" y="490" width="130" height="50" fill="#e67e22" rx="5"/>
            <rect x="20" y="477" width="55"  height="43" fill="#d35400" rx="5"/>
            <rect x="26" y="482" width="36"  height="24" fill="#85c1e9" rx="2" opacity=".85"/>
            <rect x="18" y="503" width="6"   height="10" fill="#f9e04b" rx="2" filter="url(#sglow)"/>
            <ellipse cx="115" cy="492" rx="28" ry="22" fill="#f0a020"/>
            <g>
              <animateTransform attributeName="transform" type="rotate"
                values="0 115 492;360 115 492" dur="1.2s" repeatCount="indefinite"/>
              <line x1="115" y1="470" x2="115" y2="514" stroke="#b07010" strokeWidth="3"/>
              <line x1="87"  y1="492" x2="143" y2="492" stroke="#b07010" strokeWidth="3"/>
              <line x1="95"  y1="472" x2="135" y2="512" stroke="#b07010" strokeWidth="2.5"/>
              <line x1="135" y1="472" x2="95"  y2="512" stroke="#b07010" strokeWidth="2.5"/>
            </g>
            {[0,1,2].map(i=>(
              <circle key={i} cx="146" cy="477" r={4+i*2} opacity="0" fill="#bbb">
                <animate attributeName="cy"      values="477;455;440" dur={`${1.3+i*.3}s`} begin={`${i*.35}s`} repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0;.4;0"      dur={`${1.3+i*.3}s`} begin={`${i*.35}s`} repeatCount="indefinite"/>
                <animate attributeName="r"       values={`${4+i*2};${7+i*3};${11+i*4}`} dur={`${1.3+i*.3}s`} begin={`${i*.35}s`} repeatCount="indefinite"/>
              </circle>
            ))}
            {[45,118].map((wx,i)=>(
              <g key={i}>
                <g>
                  <animateTransform attributeName="transform" type="rotate"
                    values={`0 ${wx} 542;360 ${wx} 542`} dur=".8s" repeatCount="indefinite"/>
                  <circle cx={wx} cy="542" r="16" fill="#1c2833"/>
                  <line x1={wx-16} y1="542" x2={wx+16} y2="542" stroke="#717d7e" strokeWidth="3"/>
                  <line x1={wx}    y1="526" x2={wx}    y2="558" stroke="#717d7e" strokeWidth="3"/>
                </g>
                <circle cx={wx} cy="542" r="6" fill="#2d3f4a"/>
              </g>
            ))}
          </g>

          {/* ── LAMP POSTS ── */}
          {[220,430,590].map((lx,i)=>(
            <g key={i}>
              <rect x={lx} y="480" width="5" height="65" fill="#445" rx="2"/>
              <rect x={lx-15} y="476" width="36" height="8" fill="#334" rx="4"/>
              <circle cx={lx+2} cy="478" r="8" fill="#fffde7" filter="url(#sglow)">
                <animate attributeName="opacity" values=".75;1;.75" dur="3s" begin={`${i*.8}s`} repeatCount="indefinite"/>
              </circle>
            </g>
          ))}

          {/* ── GOLDEN HORIZON GLOW ── */}
          <ellipse cx="400" cy="548" rx="300" ry="55" fill="rgba(201,168,76,.07)"/>
        </svg>
      </div>

      {/* ── SCROLL CARET ── */}
      <div className="scroll-caret">
        <div className="caret-line"/>
        <span>SCROLL</span>
      </div>
    </section>
  );
}
