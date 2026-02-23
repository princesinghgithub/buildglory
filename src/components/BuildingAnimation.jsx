// // import "../styles/BuildingAnimation.css";

// // // Reusable window row component
// // function WindowRow({ count, startX, y, gap, winW = 30, winH = 33, delay = 0 }) {
// //   return (
// //     <>
// //       {Array.from({ length: count }).map((_, i) => (
// //         <rect
// //           key={i}
// //           x={startX + i * gap}
// //           y={y}
// //           width={winW}
// //           height={winH}
// //           fill="url(#glassGrad)"
// //           className="window-pane"
// //           style={{ animationDelay: `${delay + i * 0.05}s` }}
// //         />
// //       ))}
// //     </>
// //   );
// // }

// // // Blinking lit windows
// // function LitWindows() {
// //   const lights = [
// //     { x: 199, y: 385, delay: 0 },
// //     { x: 295, y: 385, delay: 1 },
// //     { x: 391, y: 385, delay: 2 },
// //     { x: 487, y: 385, delay: 0.5 },
// //     { x: 210, y: 340, delay: 1.5 },
// //     { x: 310, y: 340, delay: 0.2 },
// //     { x: 410, y: 340, delay: 2.2 },
// //     { x: 220, y: 295, delay: 0.8 },
// //     { x: 320, y: 295, delay: 1.8 },
// //   ];
// //   return (
// //     <>
// //       {lights.map((l, i) => (
// //         <rect
// //           key={i}
// //           x={l.x}
// //           y={l.y}
// //           width={30}
// //           height={33}
// //           fill="#fffde7"
// //           opacity="0"
// //           filter="url(#glow)"
// //           className="lit-window"
// //           style={{ animationDelay: `${l.delay}s` }}
// //         />
// //       ))}
// //     </>
// //   );
// // }

// // // Stars background
// // function Stars() {
// //   const starData = [
// //     { cx: 50, cy: 30, r: 1.2 }, { cx: 120, cy: 15, r: 0.8 }, { cx: 200, cy: 45, r: 1 },
// //     { cx: 300, cy: 20, r: 1.5 }, { cx: 400, cy: 10, r: 0.9 }, { cx: 500, cy: 35, r: 1.1 },
// //     { cx: 620, cy: 25, r: 0.7 }, { cx: 720, cy: 50, r: 1.3 }, { cx: 780, cy: 15, r: 0.9 },
// //     { cx: 80, cy: 70, r: 0.6 }, { cx: 160, cy: 80, r: 1.0 }, { cx: 250, cy: 60, r: 0.8 },
// //     { cx: 450, cy: 75, r: 1.2 }, { cx: 550, cy: 55, r: 0.7 }, { cx: 650, cy: 80, r: 1.0 },
// //     { cx: 750, cy: 70, r: 0.8 }, { cx: 35, cy: 100, r: 0.9 }, { cx: 340, cy: 90, r: 1.1 },
// //   ];
// //   return (
// //     <>
// //       {starData.map((s, i) => (
// //         <circle
// //           key={i}
// //           cx={s.cx} cy={s.cy} r={s.r}
// //           fill="white"
// //           className={`star star-${i % 3}`}
// //           style={{ animationDelay: `${(i * 0.3) % 3}s` }}
// //         />
// //       ))}
// //     </>
// //   );
// // }

// // // Dust particles at top of building
// // function DustParticles() {
// //   return (
// //     <>
// //       {Array.from({ length: 8 }).map((_, i) => (
// //         <circle
// //           key={i}
// //           cx={200 + i * 50}
// //           cy={212}
// //           r={i % 2 === 0 ? 2 : 3}
// //           fill="#d4a020"
// //           className={`dust dust-${i % 4}`}
// //           style={{ animationDelay: `${i * 0.25}s` }}
// //         />
// //       ))}
// //     </>
// //   );
// // }

// // export default function BuildingAnimation() {
// //   return (
// //     <div className="building-scene">
// //       <svg
// //         viewBox="0 0 800 500"
// //         xmlns="http://www.w3.org/2000/svg"
// //         className="building-svg"
// //       >
// //         <defs>
// //           <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
// //             <stop offset="0%" stopColor="#060d1f" />
// //             <stop offset="100%" stopColor="#12295c" />
// //           </linearGradient>
// //           <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
// //             <stop offset="0%" stopColor="#4fc3f7" stopOpacity="0.55" />
// //             <stop offset="100%" stopColor="#0277bd" stopOpacity="0.25" />
// //           </linearGradient>
// //           <filter id="glow">
// //             <feGaussianBlur stdDeviation="4" result="coloredBlur" />
// //             <feMerge>
// //               <feMergeNode in="coloredBlur" />
// //               <feMergeNode in="SourceGraphic" />
// //             </feMerge>
// //           </filter>
// //           <filter id="softGlow">
// //             <feGaussianBlur stdDeviation="2" result="blur" />
// //             <feMerge>
// //               <feMergeNode in="blur" />
// //               <feMergeNode in="SourceGraphic" />
// //             </feMerge>
// //           </filter>
// //         </defs>

// //         {/* Sky */}
// //         <rect width="800" height="500" fill="url(#skyGrad)" />

// //         {/* Stars */}
// //         <Stars />

// //         {/* Moon */}
// //         <circle cx="700" cy="55" r="32" fill="#f5e88a" opacity="0.9" filter="url(#glow)" />
// //         <circle cx="716" cy="44" r="27" fill="#12295c" />

// //         {/* ===== CRANE ===== */}
// //         <g className="crane">
// //           {/* Vertical mast */}
// //           <rect x="579" y="70" width="14" height="330" fill="#d49818" rx="2" />
// //           {/* Horizontal jib */}
// //           <rect x="465" y="70" width="220" height="12" fill="#d49818" rx="2" />
// //           {/* Support struts */}
// //           <line x1="586" y1="70" x2="510" y2="130" stroke="#b07c10" strokeWidth="4" />
// //           <line x1="586" y1="70" x2="650" y2="130" stroke="#b07c10" strokeWidth="4" />
// //           {/* Cable */}
// //           <line x1="545" y1="82" x2="545" y2="210" stroke="#aaa" strokeWidth="2.5" className="crane-cable" />
// //           {/* Hook */}
// //           <rect x="534" y="205" width="22" height="16" rx="4" fill="#555" className="crane-hook" />
// //           <path d="M537 221 Q545 232 553 221" stroke="#444" strokeWidth="2.5" fill="none" className="crane-hook" />
// //           {/* Counter weight */}
// //           <rect x="658" y="78" width="35" height="28" rx="3" fill="#9a6a08" />
// //         </g>

// //         {/* ===== BUILDING ===== */}
// //         <g className="building">

// //           {/* Foundation */}
// //           <rect x="148" y="418" width="424" height="22" rx="2" fill="#6b4f08" />

// //           {/* Floor 1 */}
// //           <rect x="155" y="375" width="410" height="46" fill="#9a7218" className="floor floor-1" />
// //           <rect x="155" y="375" width="410" height="5" fill="#c09030" />
// //           <WindowRow count={7} startX={172} y={382} gap={55} winW={32} winH={32} delay={0.3} />

// //           {/* Floor 2 */}
// //           <rect x="163" y="329" width="394" height="49" fill="#ab8020" className="floor floor-2" />
// //           <rect x="163" y="329" width="394" height="5" fill="#d0a030" />
// //           <WindowRow count={6} startX={182} y={336} gap={60} winW={32} winH={36} delay={0.7} />

// //           {/* Floor 3 */}
// //           <rect x="172" y="284" width="376" height="48" fill="#bc8e28" className="floor floor-3" />
// //           <rect x="172" y="284" width="376" height="5" fill="#deb840" />
// //           <WindowRow count={5} startX={194} y={291} gap={68} winW={32} winH={36} delay={1.1} />

// //           {/* Floor 4 */}
// //           <rect x="182" y="242" width="356" height="45" fill="#aa8020" className="floor floor-4" />
// //           <rect x="182" y="242" width="356" height="5" fill="#cca030" />
// //           <WindowRow count={4} startX={208} y={249} gap={82} winW={32} winH={32} delay={1.5} />

// //           {/* Floor 5 - partial */}
// //           <rect x="192" y="215" width="336" height="30" fill="#9a7218" className="floor floor-5" />

// //           {/* Construction bricks being placed on top */}
// //           <g className="bricks-row">
// //             {Array.from({ length: 7 }).map((_, i) => (
// //               <rect
// //                 key={i}
// //                 x={200 + i * 46}
// //                 y={208}
// //                 width={38}
// //                 height={11}
// //                 rx={2}
// //                 fill={i % 2 === 0 ? "#c9a030" : "#a07820"}
// //                 className={`brick brick-${i}`}
// //                 style={{ animationDelay: `${2 + i * 0.2}s` }}
// //               />
// //             ))}
// //           </g>

// //           {/* Lit windows overlay */}
// //           <LitWindows />
// //         </g>

// //         {/* ===== SCAFFOLDING ===== */}
// //         <g className="scaffolding" opacity="0.75">
// //           {/* Left pole */}
// //           <rect x="138" y="215" width="10" height="225" fill="#7a7a7a" rx="2" />
// //           {/* Right pole */}
// //           <rect x="572" y="215" width="10" height="225" fill="#7a7a7a" rx="2" />
// //           {/* Horizontal planks */}
// //           {[215, 258, 300, 342, 383].map((y, i) => (
// //             <rect key={i} x="138" y={y} width="444" height="5" fill="#8a8a8a" />
// //           ))}
// //           {/* Diagonal braces */}
// //           <line x1="138" y1="215" x2="193" y2="258" stroke="#666" strokeWidth="3" />
// //           <line x1="193" y1="215" x2="138" y2="258" stroke="#666" strokeWidth="3" />
// //           <line x1="572" y1="215" x2="517" y2="258" stroke="#666" strokeWidth="3" />
// //           <line x1="517" y1="215" x2="572" y2="258" stroke="#666" strokeWidth="3" />
// //           {/* Planks hanging */}
// //           <rect x="200" y="250" width="320" height="8" fill="#a08060" rx="2" />
// //           <rect x="200" y="295" width="320" height="8" fill="#a08060" rx="2" />
// //         </g>

// //         {/* Dust particles */}
// //         <DustParticles />

// //         {/* ===== WORKER 1 — Carrying bricks ===== */}
// //         <g className="worker worker-walk">
// //           {/* Hard hat */}
// //           <ellipse cx="100" cy="388" rx="15" ry="8" fill="#f39c12" />
// //           <rect x="93" y="388" width="14" height="3" fill="#d4860a" />
// //           {/* Head */}
// //           <circle cx="100" cy="396" r="11" fill="#f0c080" />
// //           {/* Body */}
// //           <rect x="93" y="407" width="14" height="22" fill="#e65c00" rx="3" />
// //           {/* Left arm */}
// //           <rect x="83" y="410" width="10" height="5" fill="#f0c080" rx="2" />
// //           {/* Right arm + bricks */}
// //           <rect x="107" y="408" width="12" height="5" fill="#f0c080" rx="2" />
// //           <rect x="118" y="404" width="28" height="12" fill="#c0392b" rx="2" />
// //           <line x1="122" y1="404" x2="122" y2="416" stroke="#a93226" strokeWidth="1.5" />
// //           <line x1="132" y1="404" x2="132" y2="416" stroke="#a93226" strokeWidth="1.5" />
// //           {/* Legs */}
// //           <rect x="93" y="429" width="6" height="12" fill="#2c3e50" rx="2" className="leg-left" />
// //           <rect x="101" y="429" width="6" height="12" fill="#2c3e50" rx="2" className="leg-right" />
// //         </g>

// //         {/* ===== WORKER 2 — Hammering on scaffold ===== */}
// //         <g className="worker worker-hammer" style={{ transformOrigin: "680px 380px" }}>
// //           {/* Hard hat */}
// //           <ellipse cx="680" cy="373" rx="15" ry="8" fill="#e74c3c" />
// //           {/* Head */}
// //           <circle cx="680" cy="381" r="11" fill="#d4a070" />
// //           {/* Body */}
// //           <rect x="673" y="392" width="14" height="22" fill="#2980b9" rx="3" />
// //           {/* Hammer arm */}
// //           <rect x="659" y="394" width="14" height="5" fill="#d4a070" rx="2" />
// //           {/* Hammer */}
// //           <rect x="646" y="388" width="16" height="10" fill="#546e7a" rx="2" className="hammer-head" />
// //           <rect x="657" y="393" width="16" height="4" fill="#6d4c41" rx="1" />
// //           {/* Other arm */}
// //           <rect x="687" y="396" width="10" height="5" fill="#d4a070" rx="2" />
// //           {/* Legs */}
// //           <rect x="673" y="414" width="6" height="12" fill="#1a237e" rx="2" />
// //           <rect x="681" y="414" width="6" height="12" fill="#1a237e" rx="2" />
// //         </g>

// //         {/* ===== WORKER 3 — On scaffold, mixing cement ===== */}
// //         <g className="worker worker-mix">
// //           {/* Hard hat */}
// //           <ellipse cx="360" cy="247" rx="14" ry="7" fill="#27ae60" />
// //           {/* Head */}
// //           <circle cx="360" cy="255" r="10" fill="#c8a078" />
// //           {/* Body */}
// //           <rect x="353" y="265" width="14" height="20" fill="#8e44ad" rx="3" />
// //           {/* Arms mixing */}
// //           <rect x="340" y="268" width="13" height="5" fill="#c8a078" rx="2" className="arm-mix-left" />
// //           <rect x="367" y="268" width="13" height="5" fill="#c8a078" rx="2" className="arm-mix-right" />
// //           {/* Cement bucket */}
// //           <rect x="380" y="262" width="20" height="18" fill="#90a4ae" rx="3" />
// //           <rect x="382" y="260" width="16" height="4" fill="#78909c" rx="2" />
// //           {/* Legs */}
// //           <rect x="353" y="285" width="5" height="10" fill="#1b2631" rx="2" />
// //           <rect x="362" y="285" width="5" height="10" fill="#1b2631" rx="2" />
// //         </g>

// //         {/* ===== CEMENT MIXER TRUCK ===== */}
// //         <g className="cement-truck">
// //           {/* Truck body */}
// //           <rect x="15" y="400" width="100" height="38" fill="#e67e22" rx="6" />
// //           {/* Cabin */}
// //           <rect x="15" y="393" width="38" height="22" fill="#d35400" rx="4" />
// //           {/* Windshield */}
// //           <rect x="19" y="396" width="24" height="14" fill="#85c1e9" rx="2" />
// //           {/* Headlight */}
// //           <rect x="14" y="408" width="5" height="8" fill="#f9e04b" rx="2" />
// //           {/* Drum */}
// //           <ellipse cx="80" cy="408" rx="22" ry="18" fill="#f0a020" />
// //           <g className="drum-spin" style={{ transformOrigin: "80px 408px" }}>
// //             <line x1="80" y1="390" x2="80" y2="426" stroke="#c07810" strokeWidth="4" />
// //             <line x1="58" y1="408" x2="102" y2="408" stroke="#c07810" strokeWidth="4" />
// //             <line x1="65" y1="393" x2="95" y2="423" stroke="#c07810" strokeWidth="3" />
// //             <line x1="95" y1="393" x2="65" y2="423" stroke="#c07810" strokeWidth="3" />
// //           </g>
// //           {/* Exhaust smoke */}
// //           <circle cx="108" cy="393" r="4" fill="#aaa" opacity="0.5" className="smoke smoke-1" />
// //           <circle cx="112" cy="386" r="5" fill="#bbb" opacity="0.3" className="smoke smoke-2" />
// //           {/* Wheels */}
// //           <circle cx="35" cy="438" r="9" fill="#1c2833" />
// //           <circle cx="35" cy="438" r="4.5" fill="#717d7e" />
// //           <circle cx="90" cy="438" r="9" fill="#1c2833" />
// //           <circle cx="90" cy="438" r="4.5" fill="#717d7e" />
// //         </g>

// //         {/* Ground */}
// //         <rect x="0" y="437" width="800" height="63" fill="#111408" />
// //         <rect x="0" y="434" width="800" height="7" fill="#1e2b10" />

// //         {/* Road dashes */}
// //         {Array.from({ length: 7 }).map((_, i) => (
// //           <rect key={i} x={40 + i * 110} y="455" width="65" height="5" fill="#333" rx="2" />
// //         ))}

// //         {/* GloriBuild label on building */}
// //         <text
// //           x="360" y="467"
// //           textAnchor="middle"
// //           fill="#c9a84c"
// //           fontSize="13"
// //           fontFamily="serif"
// //           fontWeight="bold"
// //           letterSpacing="3"
// //         >
// //           G L O R I B U I L D
// //         </text>
// //       </svg>
// //     </div>
// //   );
// // }


// import "../styles/BuildingAnimation.css";

// /* ─── Stars ─── */
// function Stars() {
//   const stars = [
//     {cx:30,cy:18,r:1.0},{cx:80,cy:8,r:0.7},{cx:140,cy:28,r:1.3},
//     {cx:200,cy:12,r:0.8},{cx:260,cy:35,r:1.1},{cx:320,cy:8,r:0.9},
//     {cx:380,cy:22,r:1.4},{cx:440,cy:6,r:0.7},{cx:500,cy:30,r:1.0},
//     {cx:560,cy:14,r:0.8},{cx:620,cy:28,r:1.2},{cx:680,cy:10,r:0.6},
//     {cx:740,cy:32,r:1.0},{cx:780,cy:18,r:0.8},{cx:60,cy:55,r:0.7},
//     {cx:160,cy:65,r:1.1},{cx:280,cy:48,r:0.9},{cx:420,cy:60,r:0.7},
//     {cx:540,cy:52,r:1.0},{cx:660,cy:68,r:0.8},{cx:760,cy:58,r:1.1},
//     {cx:110,cy:90,r:0.6},{cx:350,cy:78,r:0.9},{cx:590,cy:85,r:0.7},
//   ];
//   return (
//     <>
//       {stars.map((s,i)=>(
//         <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="white"
//           className={`star star-${i%3}`}
//           style={{animationDelay:`${(i*0.28)%3}s`}}/>
//       ))}
//     </>
//   );
// }

// /* ─── Window Row ─── */
// function WindowRow({count,startX,y,gap,winW=30,winH=32,delay=0,litPattern}){
//   return(
//     <>
//       {Array.from({length:count}).map((_,i)=>{
//         const isLit = litPattern ? litPattern[i%litPattern.length] : i%2===0;
//         return(
//           <rect key={i} x={startX+i*gap} y={y} width={winW} height={winH}
//             fill={isLit?"url(#litWin)":"url(#glassGrad)"}
//             className={`window-pane ${isLit?'window-lit':''}`}
//             style={{animationDelay:`${delay+i*0.06}s`}}
//             rx="2"/>
//         );
//       })}
//     </>
//   );
// }

// /* ─── Falling Bricks from crane ─── */
// function FallingBricks(){
//   const bricks=[
//     {x:490,y:100,w:32,h:12,delay:'0s',  dur:'2.2s'},
//     {x:510,y:80, w:28,h:10,delay:'0.7s',dur:'2.5s'},
//     {x:475,y:95, w:30,h:11,delay:'1.3s',dur:'2.0s'},
//     {x:502,y:88, w:26,h:10,delay:'2.1s',dur:'2.3s'},
//   ];
//   return(
//     <>
//       {bricks.map((b,i)=>(
//         <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} rx="2"
//           fill={i%2===0?"#c8750a":"#a05508"}
//           className="falling-brick"
//           style={{'--delay':b.delay,'--dur':b.dur}}/>
//       ))}
//     </>
//   );
// }

// /* ─── Sand / Cement pour from bucket ─── */
// function CementPour(){
//   return(
//     <g className="cement-pour-group">
//       {/* Bucket on crane hook */}
//       <rect x="480" y="185" width="26" height="20" rx="3" fill="#90a4ae" className="crane-hook"/>
//       <rect x="482" y="183" width="22" height="5" rx="2" fill="#78909c" className="crane-hook"/>
//       {/* Pour stream */}
//       <rect x="490" y="205" width="6" height="35" rx="3"
//         fill="url(#sandGrad)" className="sand-stream"/>
//       {/* Splat at bottom of pour */}
//       <ellipse cx="493" cy="242" rx="10" ry="4" fill="rgba(180,140,60,.4)"
//         className="sand-splat"/>
//     </g>
//   );
// }

// /* ─── Dust Puffs ─── */
// function DustPuffs(){
//   const puffs=[
//     {cx:175,cy:205,delay:'0s',  dur:'1.8s'},
//     {cx:220,cy:208,delay:'0.5s',dur:'2.2s'},
//     {cx:555,cy:205,delay:'0.9s',dur:'1.6s'},
//     {cx:600,cy:208,delay:'1.4s',dur:'2.0s'},
//     {cx:390,cy:204,delay:'0.3s',dur:'1.9s'},
//   ];
//   return(
//     <>
//       {puffs.map((p,i)=>(
//         <circle key={i} cx={p.cx} cy={p.cy} r="6" fill="rgba(210,190,140,.35)"
//           className="dust-puff"
//           style={{'--delay':p.delay,'--dur':p.dur}}/>
//       ))}
//     </>
//   );
// }

// /* ─── Worker: Mistry (laying bricks on top scaffold) ─── */
// function WorkerMistry(){
//   return(
//     <g className="worker worker-mistry">
//       {/* Hard hat */}
//       <ellipse cx="248" cy="195" rx="14" ry="7" fill="#27ae60"/>
//       <rect x="236" y="198" width="24" height="3" fill="#1e8449" rx="1"/>
//       {/* Head */}
//       <circle cx="248" cy="207" r="10" fill="#c8906a"/>
//       {/* Eye */}
//       <circle cx="244" cy="206" r="1.5" fill="#333"/>
//       {/* Body */}
//       <rect x="241" y="217" width="14" height="20" fill="#2980b9" rx="3"/>
//       {/* Left arm — holding trowel outward */}
//       <rect x="226" y="220" width="15" height="5" fill="#c8906a" rx="2"/>
//       {/* Trowel */}
//       <rect x="216" y="217" width="12" height="4" fill="#aaa" rx="1"/>
//       <rect x="212" y="216" width="6" height="6" fill="#888" rx="1"/>
//       {/* Right arm down */}
//       <rect x="255" y="220" width="12" height="5" fill="#c8906a" rx="2"/>
//       {/* Legs */}
//       <rect x="241" y="237" width="5" height="10" fill="#1a252f" rx="2"/>
//       <rect x="250" y="237" width="5" height="10" fill="#1a252f" rx="2"/>
//     </g>
//   );
// }

// /* ─── Worker: Carrier (walks left-right with cement bag) ─── */
// function WorkerCarrier(){
//   return(
//     <g className="worker worker-carrier">
//       {/* Hard hat */}
//       <ellipse cx="75" cy="388" rx="14" ry="7" fill="#e74c3c"/>
//       <rect x="63" y="391" width="24" height="3" fill="#c0392b" rx="1"/>
//       {/* Head */}
//       <circle cx="75" cy="399" r="10" fill="#d4a070"/>
//       {/* Cement bag on shoulder */}
//       <rect x="78" y="387" width="30" height="18" rx="3" fill="#8d6e63"/>
//       <rect x="80" y="389" width="26" height="14" rx="2" fill="#795548"/>
//       <text x="82" y="400" fontSize="5" fill="#a0856a" fontFamily="Arial" fontWeight="bold">CEMENT</text>
//       {/* Right arm holding bag */}
//       <rect x="82" y="396" width="12" height="5" fill="#d4a070" rx="2"/>
//       {/* Body */}
//       <rect x="68" y="409" width="14" height="22" fill="#e67e22" rx="3"/>
//       {/* Left arm swinging */}
//       <rect x="56" y="412" width="12" height="5" fill="#d4a070" rx="2" className="swing-arm"/>
//       {/* Legs */}
//       <rect x="68" y="431" width="6" height="14" fill="#1a1a2e" rx="2" className="leg-left"/>
//       <rect x="76" y="431" width="6" height="14" fill="#1a1a2e" rx="2" className="leg-right"/>
//     </g>
//   );
// }

// /* ─── Worker: Hammer man (right side ground) ─── */
// function WorkerHammer(){
//   return(
//     <g className="worker worker-hammer">
//       {/* Hard hat */}
//       <ellipse cx="665" cy="388" rx="14" ry="7" fill="#f39c12"/>
//       <rect x="653" y="391" width="24" height="3" fill="#d68910" rx="1"/>
//       {/* Head */}
//       <circle cx="665" cy="399" r="10" fill="#c8906a"/>
//       {/* Body */}
//       <rect x="658" y="409" width="14" height="22" fill="#27ae60" rx="3"/>
//       {/* Hammer raised arm */}
//       <rect x="666" y="402" width="5" height="18" fill="#c8906a" rx="2"/>
//       {/* Hammer head */}
//       <rect x="658" y="399" width="18" height="9" fill="#546e7a" rx="2"/>
//       <rect x="666" y="408" width="5" height="4" fill="#6d4c41"/>
//       {/* Left arm */}
//       <rect x="648" y="412" width="12" height="5" fill="#c8906a" rx="2"/>
//       {/* Legs */}
//       <rect x="658" y="431" width="6" height="14" fill="#1a237e" rx="2"/>
//       <rect x="666" y="431" width="6" height="14" fill="#1a237e" rx="2"/>
//     </g>
//   );
// }

// /* ─── Worker: Scaffold Painter (right scaffold) ─── */
// function WorkerScaffold(){
//   return(
//     <g className="worker worker-scaffold">
//       {/* Hard hat */}
//       <ellipse cx="570" cy="248" rx="13" ry="7" fill="#9b59b6"/>
//       <rect x="559" y="251" width="22" height="3" fill="#7d3c98" rx="1"/>
//       {/* Head */}
//       <circle cx="570" cy="259" r="10" fill="#d4a070"/>
//       {/* Body */}
//       <rect x="563" y="269" width="14" height="20" fill="#c0392b" rx="3"/>
//       {/* Right arm — brush outward */}
//       <rect x="577" y="272" width="14" height="5" fill="#d4a070" rx="2"/>
//       {/* Paint brush */}
//       <rect x="589" y="269" width="5" height="14" fill="#6d4c41" rx="1"/>
//       <rect x="587" y="268" width="9" height="5" fill="#9e9e9e" rx="1"/>
//       {/* Left arm */}
//       <rect x="551" y="272" width="13" height="5" fill="#d4a070" rx="2"/>
//       {/* Paint bucket */}
//       <rect x="546" y="263" width="14" height="12" rx="2" fill="#1565c0"/>
//       <rect x="548" y="261" width="10" height="4" rx="1" fill="#0d47a1"/>
//       {/* Legs */}
//       <rect x="563" y="289" width="5" height="10" fill="#1a1a2e" rx="2"/>
//       <rect x="572" y="289" width="5" height="10" fill="#1a1a2e" rx="2"/>
//     </g>
//   );
// }

// /* ─── Worker: Wheelbarrow pusher ─── */
// function WorkerWheelbarrow(){
//   return(
//     <g className="worker worker-wheelbarrow">
//       {/* Wheelbarrow body */}
//       <polygon points="320,420 390,420 400,440 310,440" fill="#8d6e63"/>
//       {/* Load (sand) */}
//       <ellipse cx="355" cy="424" rx="35" ry="10" fill="#c8a050" opacity=".85"/>
//       {/* Left handle */}
//       <line x1="320" y1="420" x2="300" y2="405" stroke="#5d4037" strokeWidth="5" strokeLinecap="round"/>
//       {/* Right handle */}
//       <line x1="390" y1="420" x2="410" y2="405" stroke="#5d4037" strokeWidth="5" strokeLinecap="round"/>
//       {/* Wheel */}
//       <circle cx="355" cy="447" r="11" fill="#111" stroke="#555" strokeWidth="3"/>
//       <circle cx="355" cy="447" r="4" fill="#777"/>
//       {/* Worker pushing */}
//       <ellipse cx="415" cy="393" rx="13" ry="7" fill="#e74c3c"/>
//       <rect x="403" y="396" width="22" height="3" fill="#c0392b" rx="1"/>
//       <circle cx="415" cy="403" r="10" fill="#f0c080"/>
//       <rect x="408" y="413" width="14" height="20" fill="#3498db" rx="3"/>
//       <rect x="397" y="407" width="12" height="5" fill="#f0c080" rx="2"/>
//       <rect x="422" y="407" width="12" height="5" fill="#f0c080" rx="2"/>
//       <rect x="408" y="433" width="6" height="12" fill="#1a1a2e" rx="2" className="leg-left"/>
//       <rect x="416" y="433" width="6" height="12" fill="#1a1a2e" rx="2" className="leg-right"/>
//     </g>
//   );
// }

// /* ─── Main Export ─── */
// export default function BuildingAnimation() {
//   return (
//     <div className="building-scene">
//       <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" className="building-svg">
//         <defs>
//           <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
//             <stop offset="0%" stopColor="#04080f"/>
//             <stop offset="100%" stopColor="#0e2248"/>
//           </linearGradient>
//           <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#4fc3f7" stopOpacity=".45"/>
//             <stop offset="100%" stopColor="#0277bd" stopOpacity=".2"/>
//           </linearGradient>
//           <linearGradient id="litWin" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#fff9c4" stopOpacity=".9"/>
//             <stop offset="100%" stopColor="#f9a825" stopOpacity=".5"/>
//           </linearGradient>
//           <linearGradient id="sandGrad" x1="0%" y1="0%" x2="0%" y2="100%">
//             <stop offset="0%" stopColor="#c8a050" stopOpacity=".9"/>
//             <stop offset="100%" stopColor="#c8a050" stopOpacity="0"/>
//           </linearGradient>
//           <filter id="glow">
//             <feGaussianBlur stdDeviation="4" result="blur"/>
//             <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
//           </filter>
//           <filter id="softGlow">
//             <feGaussianBlur stdDeviation="2" result="blur"/>
//             <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
//           </filter>
//         </defs>

//         {/* ── Sky ── */}
//         <rect width="800" height="500" fill="url(#skyGrad)"/>
//         <Stars/>

//         {/* ── Moon ── */}
//         <circle cx="710" cy="52" r="34" fill="#f5e88a" opacity=".9" filter="url(#glow)"/>
//         <circle cx="727" cy="40" r="28" fill="#0e2248"/>

//         {/* ── Crane ── */}
//         <g className="crane">
//           {/* Mast */}
//           <rect x="580" y="65" width="14" height="375" fill="#d4980a" rx="2"/>
//           {/* Horizontal jib */}
//           <rect x="450" y="65" width="240" height="13" fill="#d4980a" rx="2"/>
//           {/* Support struts */}
//           <line x1="587" y1="65" x2="505" y2="135" stroke="#b07c10" strokeWidth="4"/>
//           <line x1="587" y1="65" x2="665" y2="135" stroke="#b07c10" strokeWidth="4"/>
//           {/* Counter weight */}
//           <rect x="666" y="72" width="38" height="30" rx="3" fill="#9a6a08"/>
//           {/* Main cable */}
//           <line x1="495" y1="78" x2="495" y2="195" stroke="#bbb" strokeWidth="2.5" className="crane-cable"/>
//           {/* Hook + load */}
//           <rect x="483" y="190" width="24" height="16" rx="4" fill="#555" className="crane-hook"/>
//           <path d="M486 206 Q495 218 504 206" stroke="#444" strokeWidth="2.5" fill="none" className="crane-hook"/>
//         </g>

//         {/* ── Cement pour (from crane hook) ── */}
//         <CementPour/>

//         {/* ── Falling bricks ── */}
//         <FallingBricks/>

//         {/* ── Building ── */}
//         <g>
//           {/* Foundation */}
//           <rect x="148" y="418" width="424" height="22" rx="2" fill="#6b4f08"/>

//           {/* Floor 1 */}
//           <rect x="152" y="374" width="416" height="46" fill="#9a7218" className="floor floor-1" rx="1"/>
//           <rect x="152" y="374" width="416" height="5" fill="#c09030"/>
//           <WindowRow count={7} startX={170} y={381} gap={56} winW={32} winH={32} delay={0.2} litPattern={[1,0,1,1,0,1,0]}/>

//           {/* Floor 2 */}
//           <rect x="160" y="328" width="400" height="48" fill="#ab8020" className="floor floor-2" rx="1"/>
//           <rect x="160" y="328" width="400" height="5" fill="#d0a030"/>
//           <WindowRow count={6} startX={180} y={336} gap={62} winW={32} winH={34} delay={0.6} litPattern={[0,1,1,0,1,1]}/>

//           {/* Floor 3 */}
//           <rect x="170" y="283" width="380" height="47" fill="#bc8e28" className="floor floor-3" rx="1"/>
//           <rect x="170" y="283" width="380" height="5" fill="#deb840"/>
//           <WindowRow count={5} startX={192} y={291} gap={70} winW={32} winH={34} delay={1.0} litPattern={[1,0,1,0,1]}/>

//           {/* Floor 4 */}
//           <rect x="180" y="240" width="360" height="45" fill="#aa8020" className="floor floor-4" rx="1"/>
//           <rect x="180" y="240" width="360" height="5" fill="#cca030"/>
//           <WindowRow count={4} startX={206} y={248} gap={85} winW={32} winH={32} delay={1.4} litPattern={[1,1,0,1]}/>

//           {/* Floor 5 partial */}
//           <rect x="192" y="213" width="336" height="29" fill="#9a7218" className="floor floor-5" rx="1"/>

//           {/* Bricks being placed */}
//           <g className="bricks-row">
//             {Array.from({length:8}).map((_,i)=>(
//               <rect key={i}
//                 x={198+i*42} y={207}
//                 width={36} height={11} rx={2}
//                 fill={i%2===0?"#c9a030":"#a07820"}
//                 className={`brick brick-${i}`}
//                 style={{animationDelay:`${1.8+i*0.18}s`}}/>
//             ))}
//           </g>
//         </g>

//         {/* ── Scaffolding ── */}
//         <g opacity=".72">
//           <rect x="136" y="210" width="10" height="230" fill="#7a7a7a" rx="2"/>
//           <rect x="574" y="210" width="10" height="230" fill="#7a7a7a" rx="2"/>
//           {[210,254,298,342,385].map((y,i)=>(
//             <rect key={i} x="136" y={y} width="448" height="5" fill="#8a8a8a"/>
//           ))}
//           <line x1="136" y1="210" x2="192" y2="254" stroke="#666" strokeWidth="3"/>
//           <line x1="192" y1="210" x2="136" y2="254" stroke="#666" strokeWidth="3"/>
//           <line x1="574" y1="210" x2="518" y2="254" stroke="#666" strokeWidth="3"/>
//           <line x1="518" y1="210" x2="574" y2="254" stroke="#666" strokeWidth="3"/>
//           {/* Wooden planks */}
//           <rect x="200" y="248" width="322" height="9" fill="#a08060" rx="2"/>
//           <rect x="200" y="292" width="322" height="9" fill="#a08060" rx="2"/>
//         </g>

//         {/* ── Dust puffs (construction noise) ── */}
//         <DustPuffs/>

//         {/* ── Workers ── */}
//         <WorkerMistry/>
//         <WorkerCarrier/>
//         <WorkerHammer/>
//         <WorkerScaffold/>
//         <WorkerWheelbarrow/>

//         {/* ── Cement Mixer Truck ── */}
//         <g className="cement-truck">
//           {/* Body */}
//           <rect x="14" y="400" width="106" height="38" fill="#e67e22" rx="5"/>
//           {/* Cabin */}
//           <rect x="14" y="392" width="40" height="24" fill="#d35400" rx="4"/>
//           {/* Windshield */}
//           <rect x="18" y="396" width="26" height="15" fill="#85c1e9" rx="2" opacity=".85"/>
//           {/* Headlight */}
//           <rect x="13" y="410" width="5" height="8" fill="#f9e04b" rx="1" filter="url(#softGlow)"/>
//           {/* Drum */}
//           <ellipse cx="81" cy="408" rx="24" ry="20" fill="#f0a020"/>
//           <g className="drum-spin" style={{transformOrigin:"81px 408px"}}>
//             <line x1="81" y1="388" x2="81" y2="428" stroke="#b07010" strokeWidth="4"/>
//             <line x1="57" y1="408" x2="105" y2="408" stroke="#b07010" strokeWidth="4"/>
//             <line x1="64" y1="391" x2="98" y2="425" stroke="#b07010" strokeWidth="3"/>
//             <line x1="98" y1="391" x2="64" y2="425" stroke="#b07010" strokeWidth="3"/>
//           </g>
//           {/* Exhaust smoke */}
//           <circle cx="110" cy="393" r="4" fill="#bbb" opacity=".5" className="smoke smoke-1"/>
//           <circle cx="114" cy="385" r="5.5" fill="#ccc" opacity=".3" className="smoke smoke-2"/>
//           <circle cx="118" cy="376" r="7" fill="#ddd" opacity=".15" className="smoke smoke-2" style={{animationDelay:'.4s'}}/>
//           {/* Wheels */}
//           <circle cx="36"  cy="438" r="10" fill="#1c2833"/>
//           <circle cx="36"  cy="438" r="5"  fill="#717d7e"/>
//           <circle cx="92"  cy="438" r="10" fill="#1c2833"/>
//           <circle cx="92"  cy="438" r="5"  fill="#717d7e"/>
//         </g>

//         {/* ── Ground ── */}
//         <rect x="0" y="437" width="800" height="63" fill="#0f1208"/>
//         <rect x="0" y="434" width="800" height="7" fill="#1e2b10"/>

//         {/* Road dashes */}
//         {Array.from({length:7}).map((_,i)=>(
//           <rect key={i} x={30+i*115} y="455" width="70" height="5" fill="#2a2a2a" rx="2"/>
//         ))}

//         {/* GloriBuild sign on building */}
//         <text x="360" y="467" textAnchor="middle"
//           fill="#c9a84c" fontSize="13" fontFamily="Georgia,serif"
//           fontWeight="bold" letterSpacing="4">
//            B U I L D G L O R I
//         </text>
//       </svg>
//     </div>
//   );
// }

import "../styles/BuildingAnimation.css";

/* ── Isometric Box helper ── */
function IsoBox({ x, y, w, h, d, topColor, leftColor, rightColor, className = "" }) {
  const top   = [[x,y],[x+w,y-w*0.5],[x+w+d,y-w*0.5+d*0.5],[x+d,y+d*0.5]];
  const left  = [[x,y],[x+d,y+d*0.5],[x+d,y+d*0.5+h],[x,y+h]];
  const right = [[x+w,y-w*0.5],[x+w+d,y-w*0.5+d*0.5],[x+w+d,y-w*0.5+d*0.5+h],[x+w,y-w*0.5+h]];
  const pts   = (arr) => arr.map(p=>p.join(",")).join(" ");
  return (
    <g className={className}>
      <polygon points={pts(left)}  fill={leftColor}  />
      <polygon points={pts(right)} fill={rightColor} />
      <polygon points={pts(top)}   fill={topColor}   />
    </g>
  );
}

/* ── Stars ── */
function Stars() {
  const s=[{cx:30,cy:15,r:1},{cx:95,cy:8,r:.7},{cx:160,cy:25,r:1.2},{cx:230,cy:10,r:.8},
           {cx:310,cy:30,r:1},{cx:470,cy:18,r:.9},{cx:550,cy:8,r:1.1},{cx:620,cy:28,r:.7},
           {cx:690,cy:14,r:1},{cx:750,cy:32,r:.8},{cx:55,cy:55,r:.6},{cx:145,cy:62,r:1},
           {cx:380,cy:48,r:.8},{cx:510,cy:58,r:.9},{cx:720,cy:55,r:.7},{cx:800,cy:22,r:1},
           {cx:420,cy:72,r:.6},{cx:280,cy:65,r:.9},{cx:660,cy:42,r:.8}];
  return <>{s.map((p,i)=><circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill="white" className={`star star-${i%3}`} style={{animationDelay:`${(i*.28)%3}s`}}/>)}</>;
}

/* ── Iso Ground ── */
function IsoGround() {
  return (
    <g>
      <polygon points="30,480 400,290 770,480 400,670" fill="#c8d8e8" opacity=".75"/>
      <polygon points="30,480 770,480 770,455 30,455"  fill="#b8c8d4" opacity=".5"/>
      <polygon points="370,290 430,290 430,670 370,670" fill="#b8c8d4" opacity=".5"/>
      {[0,1,2,3,4,5].map(i=><line key={i} x1={80+i*125} y1={467} x2={115+i*125} y2={467}
        stroke="#a0b0bc" strokeWidth="3" strokeDasharray="8,6"/>)}
    </g>
  );
}

/* ── Small background buildings ── */
function SmallBuildings() {
  return (
    <g className="small-buildings">
      <IsoBox x={45} y={275} w={65} h={120} d={38} topColor="#b0bec5" leftColor="#546e7a" rightColor="#607d8b" className="iso-floor iso-floor-bg1"/>
      {[0,1,2,3].map(r=>[0,1].map(c=><rect key={`${r}${c}`} x={50+c*26} y={182+r*27} width={16} height={16} rx="1" fill={r+c===2?"#fffde7":"#4fc3f7"} opacity=".5" className={`iso-window win-blink-${(r+c)%3}`}/>))}
      <IsoBox x={540} y={285} w={75} h={80} d={42} topColor="#90a4ae" leftColor="#37474f" rightColor="#455a64" className="iso-floor iso-floor-bg2"/>
      <IsoBox x={110} y={345} w={50} h={36} d={32} topColor="#a5d6a7" leftColor="#2e7d32" rightColor="#388e3c" className="iso-floor iso-floor-bg3"/>
      <polygon points="110,345 160,320 142,329 92,354" fill="#66bb6a" opacity=".9"/>
      <IsoBox x={570} y={355} w={95} h={50} d={48} topColor="#b0bec5" leftColor="#455a64" rightColor="#546e7a" className="iso-floor iso-floor-bg4"/>
    </g>
  );
}

/* ── Trees ── */
function IsoTree({x,y,s=1}) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`} className="iso-tree">
      <rect x={-4} y={10} width={8} height={14} fill="#795548" rx="2"/>
      <ellipse cx={0} cy={14} rx={15} ry={8} fill="#1b5e20"/>
      <ellipse cx={0} cy={7}  rx={12} ry={7} fill="#2e7d32"/>
      <ellipse cx={0} cy={1}  rx={8}  ry={5} fill="#388e3c"/>
    </g>
  );
}

/* ── Main Building ── */
function MainBuilding() {
  return (
    <g className="main-building">
      <IsoBox x={255} y={315} w={145} h={52} d={72} topColor="#c9a84c" leftColor="#8b6914" rightColor="#a07820" className="iso-floor iso-floor-1"/>
      <IsoBox x={263} y={260} w={137} h={50} d={68} topColor="#d4b455" leftColor="#9a7520" rightColor="#b08828" className="iso-floor iso-floor-2"/>
      <IsoBox x={271} y={207} w={129} h={48} d={64} topColor="#dfc060" leftColor="#a08028" rightColor="#bc9430" className="iso-floor iso-floor-3"/>
      <IsoBox x={279} y={156} w={121} h={44} d={60} topColor="#c9a84c" leftColor="#8b6914" rightColor="#a07820" className="iso-floor iso-floor-4"/>

      {/* Windows floor1 left */}
      {[0,1,2].map(i=><rect key={i} x={264+i*22} y={321} width={14} height={20} rx="1" fill="#4fc3f7" opacity=".6" className={`iso-window win-blink-${i%3}`}/>)}
      {/* Windows floor2 left */}
      {[0,1,2].map(i=><rect key={i} x={272+i*21} y={267} width={13} height={18} rx="1" fill="#fffde7" opacity=".7" className={`iso-window win-blink-${(i+1)%3}`}/>)}
      {/* Windows floor3 */}
      {[0,1].map(i=><rect key={i} x={280+i*30} y={214} width={14} height={18} rx="1" fill="#4fc3f7" opacity=".55" className={`iso-window win-blink-${(i+2)%3}`}/>)}
      {/* Windows right face */}
      {[0,1].map(i=><rect key={i} x={393+i*18} y={302+i*8} width={13} height={18} rx="1" fill="#fffde7" opacity=".6" className={`iso-window win-blink-${i%3}`}/>)}

      {/* Scaffold left */}
      <rect x={248} y={158} width={6} height={178} fill="#888" opacity=".7"/>
      {[165,212,263,315].map((y,i)=><rect key={i} x={248} y={y} width={28} height={5} fill="#a08060" opacity=".8"/>)}
      {/* Scaffold right */}
      <rect x={411} y={158} width={6} height={178} fill="#888" opacity=".7"/>
      {[165,212,263,315].map((y,i)=><rect key={i} x={383} y={y} width={35} height={5} fill="#a08060" opacity=".8"/>)}
    </g>
  );
}

/* ── Crane ── */
function IsoCrane() {
  return (
    <g className="iso-crane">
      <rect x={442} y={95} width={13} height={250} fill="#d4980a" rx="2"/>
      <rect x={315} y={95} width={140} height={11} fill="#d4980a" rx="2"/>
      <line x1={455} y1={95} x2={362} y2={140} stroke="#b07c10" strokeWidth="3"/>
      <rect x={455} y={102} width={36} height={24} rx="2" fill="#9a6a08"/>
      <line x1={362} y1={106} x2={362} y2={215} stroke="#ccc" strokeWidth="2.5" className="crane-cable"/>
      <rect x={353} y={212} width={18} height={12} rx="3" fill="#666" className="crane-hook-elem"/>
      <rect x={350} y={224} width={22} height={18} rx="2" fill="#90a4ae" className="crane-hook-elem"/>
      <line x1={361} y1={242} x2={358} y2={268} stroke="#c8a050" strokeWidth="5" opacity=".75" className="sand-drip" strokeLinecap="round"/>
      <ellipse cx={358} cy={272} rx={10} ry={4} fill="rgba(200,160,80,.4)" className="sand-splat"/>
    </g>
  );
}

/* ── Falling bricks ── */
function FallingDebris() {
  const items=[{x:355,y:128,w:24,h:10,c:"#c8750a",delay:"0s",dur:"2.2s"},{x:368,y:112,w:20,h:8,c:"#a05508",delay:"0.9s",dur:"2.6s"},{x:342,y:120,w:22,h:9,c:"#d4900a",delay:"1.6s",dur:"2.0s"},{x:360,y:105,w:18,h:8,c:"#b06010",delay:"2.3s",dur:"2.4s"}];
  return <>{items.map((b,i)=><rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} rx="2" fill={b.c} className="falling-debris" style={{"--delay":b.delay,"--dur":b.dur}}/>)}</>;
}

/* ── Dust clouds ── */
function DustClouds() {
  const c=[{cx:278,cy:160,delay:"0s",dur:"2s"},{cx:393,cy:154,delay:".7s",dur:"2.4s"},{cx:335,cy:157,delay:"1.3s",dur:"1.8s"}];
  return <>{c.map((p,i)=><circle key={i} cx={p.cx} cy={p.cy} r="8" fill="rgba(210,190,140,.35)" className="dust-cloud" style={{"--delay":p.delay,"--dur":p.dur}}/>)}</>;
}

/* ── Workers ── */
function WorkerMistry({x,y}) {
  return (
    <g className="iso-worker iso-mistry" transform={`translate(${x},${y})`}>
      <ellipse cx={0} cy={-34} rx={11} ry={6} fill="#f39c12"/>
      <rect x={-11} y={-31} width={22} height={3} fill="#d4860a" rx="1"/>
      <circle cx={0} cy={-23} r={9} fill="#c8906a"/>
      <rect x={-6} y={-14} width={12} height={17} fill="#2980b9" rx="2"/>
      <rect x={-17} y={-10} width={13} height={4} fill="#c8906a" rx="2"/>
      <rect x={-24} y={-13} width={9} height={4} fill="#bbb" rx="1"/>
      <rect x={7} y={-10} width={11} height={4} fill="#c8906a" rx="2"/>
      <rect x={-6} y={3} width={5} height={13} fill="#1a252f" rx="2"/>
      <rect x={2} y={3} width={5} height={13} fill="#1a252f" rx="2"/>
    </g>
  );
}
function WorkerCarrier({x,y}) {
  return (
    <g className="iso-worker iso-carrier" transform={`translate(${x},${y})`}>
      <ellipse cx={0} cy={-38} rx={11} ry={6} fill="#e74c3c"/>
      <rect x={-11} y={-35} width={22} height={3} fill="#c0392b" rx="1"/>
      <rect x={3} y={-44} width={24} height={14} rx="3" fill="#8d6e63"/>
      <rect x={5} y={-42} width={20} height={10} rx="2" fill="#795548"/>
      <circle cx={0} cy={-27} r={9} fill="#d4a070"/>
      <rect x={7} y={-30} width={11} height={4} fill="#d4a070" rx="2"/>
      <rect x={-6} y={-15} width={12} height={17} fill="#e67e22" rx="2"/>
      <rect x={-17} y={-11} width={13} height={4} fill="#d4a070" rx="2"/>
      <rect x={-6} y={2} width={5} height={13} fill="#1a1a2e" rx="2" className="leg-l"/>
      <rect x={2} y={2} width={5} height={13} fill="#1a1a2e" rx="2" className="leg-r"/>
    </g>
  );
}
function WorkerHammer({x,y}) {
  return (
    <g className="iso-worker iso-hammerer" transform={`translate(${x},${y})`}>
      <ellipse cx={0} cy={-38} rx={11} ry={6} fill="#27ae60"/>
      <rect x={-11} y={-35} width={22} height={3} fill="#1e8449" rx="1"/>
      <circle cx={0} cy={-27} r={9} fill="#c8906a"/>
      <rect x={-6} y={-15} width={12} height={17} fill="#8e44ad" rx="2"/>
      <rect x={5} y={-34} width={4} height={22} fill="#c8906a" rx="2" className="hammer-arm"/>
      <rect x={-2} y={-37} width={17} height={8} fill="#546e7a" rx="2" className="hammer-head-iso"/>
      <rect x={-17} y={-11} width={13} height={4} fill="#c8906a" rx="2"/>
      <rect x={-6} y={2} width={5} height={13} fill="#1a1a2e" rx="2"/>
      <rect x={2} y={2} width={5} height={13} fill="#1a1a2e" rx="2"/>
    </g>
  );
}
function WorkerWheelbarrow({x,y}) {
  return (
    <g className="iso-worker iso-barrow" transform={`translate(${x},${y})`}>
      <polygon points="-22,0 22,0 15,20 -15,20" fill="#8d6e63"/>
      <ellipse cx={0} cy={3} rx={20} ry={7} fill="#c8a050" opacity=".85"/>
      <line x1={-22} y1={0} x2={-30} y2={-14} stroke="#5d4037" strokeWidth="4" strokeLinecap="round"/>
      <line x1={22} y1={0} x2={30} y2={-14} stroke="#5d4037" strokeWidth="4" strokeLinecap="round"/>
      <circle cx={0} cy={27} r={10} fill="#111" stroke="#555" strokeWidth="2"/>
      <circle cx={0} cy={27} r={4} fill="#777"/>
      <ellipse cx={35} cy={-24} rx={10} ry={5} fill="#f39c12"/>
      <circle cx={35} cy={-15} r={8} fill="#f0c080"/>
      <rect x={29} y={-7} width={12} height={14} fill="#3498db" rx="2"/>
      <rect x={18} y={-4} width={13} height={4} fill="#f0c080" rx="2"/>
      <rect x={41} y={-4} width={12} height={4} fill="#f0c080" rx="2"/>
      <rect x={29} y={7} width={5} height={11} fill="#1a1a2e" rx="2" className="leg-l"/>
      <rect x={36} y={7} width={5} height={11} fill="#1a1a2e" rx="2" className="leg-r"/>
    </g>
  );
}
function WorkerPainter({x,y}) {
  return (
    <g className="iso-worker iso-painter" transform={`translate(${x},${y})`}>
      <ellipse cx={0} cy={-38} rx={11} ry={6} fill="#9b59b6"/>
      <rect x={-11} y={-35} width={22} height={3} fill="#7d3c98" rx="1"/>
      <circle cx={0} cy={-27} r={9} fill="#d4a070"/>
      <rect x={-6} y={-15} width={12} height={17} fill="#c0392b" rx="2"/>
      <rect x={7} y={-12} width={14} height={4} fill="#d4a070" rx="2"/>
      <rect x={20} y={-15} width={6} height={16} fill="#6d4c41" rx="1"/>
      <rect x={18} y={-17} width={10} height={5} fill="#9e9e9e" rx="1"/>
      <rect x={-18} y={-11} width={13} height={4} fill="#d4a070" rx="2"/>
      <rect x={-6} y={2} width={5} height={13} fill="#1a1a2e" rx="2"/>
      <rect x={2} y={2} width={5} height={13} fill="#1a1a2e" rx="2"/>
    </g>
  );
}

/* ── Cement Truck (isometric) ── */
function IsoCementTruck() {
  return (
    <g className="iso-truck">
      <IsoBox x={95} y={395} w={95} h={32} d={48} topColor="#e67e22" leftColor="#c0580a" rightColor="#d4680a"/>
      <IsoBox x={95} y={378} w={42} h={32} d={48} topColor="#d35400" leftColor="#a03e00" rightColor="#bc4800"/>
      <rect x={98} y={381} width={28} height={20} rx="2" fill="#85c1e9" opacity=".8"/>
      <ellipse cx={163} cy={379} rx={24} ry={15} fill="#f0a020"/>
      <ellipse cx={163} cy={379} rx={19} ry={12} fill="#d4880a"/>
      <g className="truck-drum-spin" style={{transformOrigin:"163px 379px"}}>
        <line x1={163} y1={367} x2={163} y2={391} stroke="#b07010" strokeWidth="3"/>
        <line x1={139} y1={379} x2={187} y2={379} stroke="#b07010" strokeWidth="3"/>
        <line x1={146} y1={371} x2={180} y2={387} stroke="#b07010" strokeWidth="2"/>
        <line x1={180} y1={371} x2={146} y2={387} stroke="#b07010" strokeWidth="2"/>
      </g>
      <ellipse cx={113} cy={423} rx={13} ry={7} fill="#1c2833"/>
      <ellipse cx={113} cy={423} rx={7}  ry={4} fill="#717d7e"/>
      <ellipse cx={172} cy={437} rx={13} ry={7} fill="#1c2833"/>
      <ellipse cx={172} cy={437} rx={7}  ry={4} fill="#717d7e"/>
      <circle cx={192} cy={376} r={4} fill="#bbb" opacity=".5" className="smoke smoke-1"/>
      <circle cx={196} cy={367} r={5} fill="#ccc" opacity=".3" className="smoke smoke-2"/>
    </g>
  );
}

/* ══════════════════════════════════════════
   MAIN EXPORT
   ══════════════════════════════════════════ */
export default function BuildingAnimation() {
  return (
    <div className="building-scene">
      <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" className="building-svg">
        <defs>
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#04080f"/>
            <stop offset="70%"  stopColor="#0a1628"/>
            <stop offset="100%" stopColor="#0d1e3a"/>
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="2" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Sky */}
        <rect width="800" height="500" fill="url(#skyGrad)"/>
        <Stars/>

        {/* Moon */}
        <circle cx="700" cy="50" r="35" fill="#f5e88a" opacity=".9" filter="url(#glow)"/>
        <circle cx="718" cy="38" r="29" fill="#0a1628"/>

        {/* Ambient glow at horizon */}
        <ellipse cx="400" cy="430" rx="360" ry="70" fill="rgba(201,168,76,.05)"/>

        {/* Ground */}
        <IsoGround/>

        {/* Back buildings */}
        <SmallBuildings/>

        {/* Trees */}
        <IsoTree x={155} y={372} s={0.9}/>
        <IsoTree x={188} y={360} s={0.75}/>
        <IsoTree x={592} y={368} s={0.85}/>
        <IsoTree x={625} y={353} s={0.7}/>
        <IsoTree x={228} y={422} s={0.8}/>

        {/* Crane */}
        <IsoCrane/>

        {/* Falling bricks */}
        <FallingDebris/>

        {/* Dust */}
        <DustClouds/>

        {/* Main building */}
        <MainBuilding/>

        {/* Cement truck */}
        <IsoCementTruck/>

        {/* Workers */}
        <WorkerMistry x={255} y={272}/>
        <WorkerPainter x={418} y={292}/>
        <WorkerCarrier x={530} y={418}/>
        <WorkerHammer x={188} y={405}/>
        <WorkerWheelbarrow x={248} y={445}/>

        {/* Signboard */}
        <rect x={296} y={330} width={82} height={24} rx="3" fill="#c9a84c"/>
        <rect x={298} y={332} width={78} height={20} rx="2" fill="#8b6914"/>
        <text x={337} y={346} textAnchor="middle" fill="#f5e88a" fontSize="9"
          fontFamily="Georgia,serif" fontWeight="bold" letterSpacing="1.5">
          BUILDGLORY
        </text>
        <rect x={334} y={354} width={4} height={28} fill="#888"/>

        {/* Lamp posts */}
        <rect x={208} y={372} width={4} height={55} fill="#555"/>
        <ellipse cx={210} cy={372} rx={14} ry={6} fill="#666"/>
        <circle cx={210} cy={372} r={6} fill="#fffde7" filter="url(#softGlow)" className="lamp-glow"/>
        <rect x={572} y={377} width={4} height={55} fill="#555"/>
        <ellipse cx={574} cy={377} rx={14} ry={6} fill="#666"/>
        <circle cx={574} cy={377} r={6} fill="#fffde7" filter="url(#softGlow)" className="lamp-glow"/>
      </svg>
    </div>
  );
}
