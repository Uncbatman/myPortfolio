// Looping 26-second motion showreel. Pure CSS and SVG: no libraries, no client JS.
// Hover pauses it. Visitors who prefer reduced motion see a still frame.
const T = 26;

const demos = [
  ["Cozy Interior KE", "Home decor, Mombasa"],
  ["Mombasa Road Furniture", "Furniture, Nairobi"],
  ["Auto Aesthetics Kenya", "Car wraps, Kiambu"],
  ["Celestial Dental Centre", "Dental clinic, Nairobi"],
  ["Kaliman Electric", "Electricals, Dar es Salaam"],
];

export default function Showreel() {
  const css: string[] = [];
  let n = 0;
  const pc = (t: number) => ((t / T) * 100).toFixed(3);
  const E = "cubic-bezier(.2,.8,.2,1)";
  // Animate from `from` to `to` between t0 and t1 (seconds), looping with the reel.
  const an = (t0: number, t1: number, from: string, to: string, ease = E) => {
    const id = `k${n++}`;
    css.push(`@keyframes ${id}{0%,${pc(t0)}%{${from}}${pc(t1)}%,100%{${to}}}.${id}{animation:${id} ${T}s infinite ${ease}}`);
    return id;
  };
  // A scene fades in at t0 and out at t1, crossfading with its neighbours.
  const sc = (t0: number, t1: number) => {
    const id = `s${n++}`;
    css.push(`@keyframes ${id}{0%,${pc(t0)}%{opacity:0}${pc(t0 + 0.5)}%,${pc(t1 - 0.5)}%{opacity:1}${pc(t1)}%,100%{opacity:0}}.${id}{animation:${id} ${T}s infinite linear}`);
    return id;
  };
  const pop = (t: number) =>
    an(t, t + 0.5, "opacity:0;transform:scale(.6)", "opacity:1;transform:none", "cubic-bezier(.3,1.5,.5,1)");
  const rise = (t: number) => an(t, t + 0.5, "opacity:0;transform:translateY(2cqw) scale(.92)", "opacity:1;transform:none");
  const up = (t: number, children: React.ReactNode, className = "") => (
    <span className="block overflow-hidden pb-[.12em]">
      <span className={`block ${an(t, t + 0.7, "transform:translateY(115%)", "transform:none")} ${className}`}>{children}</span>
    </span>
  );
  const chip = "rounded-full border border-[#2C292E] bg-[#19171A] px-[1.6cqw] py-[.8cqw] text-[1.5cqw] text-[#F2EFEF]";
  const head = "text-[4.6cqw] font-extrabold leading-none tracking-tighter";

  const code = [
    <><span className="text-[#FF6B6B]">on</span>(<span className="text-[#9ECE6A]">&quot;message&quot;</span>, <span className="text-[#FF6B6B]">async</span> (msg) =&gt; {"{"}</>,
    <>{"  "}<span className="text-[#FF6B6B]">const</span> reply = <span className="text-[#FF6B6B]">await</span> answer(msg.text);</>,
    <>{"  "}<span className="text-[#FF6B6B]">await</span> send(msg.from, reply);</>,
    <>{"  "}<span className="text-[#FF6B6B]">await</span> saveOrder(msg);</>,
    <>{"});"}</>,
  ];
  const bubbles: [boolean, string, number][] = [
    [true, "Hi, do you have the grey 3-seater?", 5.4],
    [false, "Yes, it’s in stock. Want photos and prices?", 6.3],
    [true, "Yes please. Deliver to Eastleigh?", 7.2],
    [false, "We deliver there. Order saved for the owner.", 8.1],
  ];
  const tickets = [
    ["Grey 3-seater", "Delivery to Eastleigh"],
    ["Dining set", "Customer pick-up"],
    ["Coffee table", "Delivery to Kiambu"],
  ];
  const steps = ["Customer asks", "WhatsApp receives", "Auto-reply answers", "Order saved"];

  const card = (name: string, what: string, i: number) => (
    <div key={`${name}${i}`} className="mr-[2.2cqw] w-[24cqw] shrink-0 rounded-[1.2cqw] border border-[#2C292E] bg-[#19171A] p-[1.6cqw]">
      <div className="mb-[1.2cqw] flex gap-[.5cqw]">
        {[0, 1, 2].map((d) => <span key={d} className="h-[.7cqw] w-[.7cqw] rounded-full bg-[#3A363C]" />)}
      </div>
      <p className="text-[1.9cqw] font-bold leading-tight">{name}</p>
      <p className="mt-[.3cqw] text-[1.3cqw] text-[#A8A2A6]">{what}</p>
      <span className="mt-[1.4cqw] inline-block rounded-full bg-[#D12A2A] px-[1.2cqw] py-[.5cqw] text-[1.2cqw] font-semibold text-white">Order on WhatsApp</span>
    </div>
  );
  const lane = (shift: number, cls: string) => (
    <div className={`flex w-max ${cls}`} style={{ marginLeft: `${-shift * 3}cqw` }}>
      {[...demos.slice(shift), ...demos.slice(0, shift), ...demos.slice(shift), ...demos.slice(0, shift)].map(([a, b], i) => card(a, b, i))}
    </div>
  );

  const s1 = sc(0, 5), s2 = sc(4.5, 10.5), s3 = sc(10, 15), s4 = sc(14.5, 19.5), s5 = sc(19, 23), s6 = sc(22.5, 26);

  const body = (
    <>
      {/* Always-on background */}
      <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(#2C292E55 1px,transparent 1px),linear-gradient(90deg,#2C292E55 1px,transparent 1px)", backgroundSize: "8cqw 8cqw", animation: `drift ${T}s linear infinite`, maskImage: "radial-gradient(ellipse at 35% 40%,#000 15%,transparent 75%)" }} />
      <div className="absolute left-[8cqw] top-[2cqw] h-[34cqw] w-[34cqw] rounded-full bg-[#D12A2A] opacity-25 blur-[8cqw]" style={{ animation: `orb ${T}s ease-in-out infinite` }} />

      {/* 1. Title */}
      <div className={`scene first ${s1}`}>
        <div className="absolute left-[6cqw] top-[17cqw]">
          {up(0.3, "Adam Mbori", "text-[11cqw] font-extrabold leading-[.95] tracking-tighter")}
          <div className="mt-[1.2cqw]">{up(0.9, "Founder of Growth Solutions by Adam", "text-[2.6cqw] text-[#A8A2A6]")}</div>
          <div className={`mt-[2cqw] h-[.5cqw] w-[26cqw] origin-left bg-[#D12A2A] ${an(1.2, 2, "transform:scaleX(0)", "transform:none")}`} />
          <div className="mt-[2.4cqw] flex flex-col items-start gap-[.9cqw]">
            {["WhatsApp sales systems", "Websites for small businesses", "Automation tools"].map((c, i) => (
              <span key={c} className={`${chip} ${pop(2 + i * 0.35)}`}>{c}</span>
            ))}
          </div>
        </div>
        <svg viewBox="-50 -50 100 100" className={`absolute right-[5cqw] top-[14cqw] h-[38cqw] w-[38cqw] ${pop(0.2)}`}>
          <circle r="18" fill="none" stroke="#2C292E" strokeWidth=".4" />
          <circle r="30" fill="none" stroke="#2C292E" strokeWidth=".4" strokeDasharray="1 2" />
          <circle r="42" fill="none" stroke="#2C292E" strokeWidth=".4" />
          <g className="spin nb"><circle cx="30" r="2.4" fill="#D12A2A" /><circle cx="-30" r="1.2" fill="#F2EFEF" /></g>
          <g className="spinr nb"><circle cx="-42" r="1.6" fill="#F2EFEF" /><circle cy="42" r="2.2" fill="#D12A2A" /></g>
          <circle r="12" fill="none" stroke="#D12A2A" strokeWidth=".6" className="pulse nb" />
          <text textAnchor="middle" dominantBaseline="central" fontSize="22" fontWeight="800" fill="#F2EFEF">A</text>
        </svg>
      </div>

      {/* 2. Chat to orders */}
      <div className={`scene ${s2}`}>
        <div className="absolute left-[6cqw] top-[5cqw]">{up(4.8, "Customers message. Orders appear.", head)}</div>
        <div className="absolute left-[6cqw] top-[15cqw] flex w-[36cqw] flex-col gap-[1.4cqw] rounded-[2.4cqw] border border-[#2C292E] bg-[#19171A] p-[2cqw]">
          {bubbles.map(([me, text, t]) => (
            <p key={text} className={`max-w-[78%] px-[1.6cqw] py-[1cqw] text-[1.6cqw] ${rise(t)} ${me ? "self-end rounded-[1.4cqw] rounded-br-[.3cqw] bg-[#144D37]" : "self-start rounded-[1.4cqw] rounded-bl-[.3cqw] bg-[#2A272C]"}`}>{text}</p>
          ))}
        </div>
        <div className="absolute left-[48cqw] top-[15cqw] flex w-[46cqw] flex-col gap-[1.4cqw]">
          {tickets.map(([a, b], i) => (
            <div key={a} className={`flex items-center justify-between rounded-[1.2cqw] border border-[#2C292E] bg-[#19171A] px-[2cqw] py-[1.6cqw] ${an(8.2 + i * 0.7, 8.8 + i * 0.7, "opacity:0;transform:translateX(-14cqw)", "opacity:1;transform:none")}`}>
              <div><p className="text-[2cqw] font-bold">{a}</p><p className="text-[1.4cqw] text-[#A8A2A6]">{b}</p></div>
              <svg viewBox="0 0 24 24" className="h-[3.4cqw] w-[3.4cqw]" fill="none" stroke="#D12A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M7 12.5l3.5 3.5L17 9" pathLength={1} strokeDasharray={1} className={an(8.7 + i * 0.7, 9.2 + i * 0.7, "stroke-dashoffset:1", "stroke-dashoffset:0")} />
              </svg>
            </div>
          ))}
          <p className="text-[1.2cqw] text-[#A8A2A6]">Illustrative example</p>
        </div>
      </div>

      {/* 3. Pipeline */}
      <div className={`scene ${s3}`}>
        <div className="absolute left-[6cqw] top-[5cqw]">{up(10.4, "How a sale moves", head)}</div>
        <svg viewBox="0 0 100 56.25" className="absolute inset-0 h-full w-full">
          {[0, 1, 2].map((i) => (
            <path key={i} d={`M${20.5 + i * 24} 30H${31.5 + i * 24}`} fill="none" stroke="#3A363C" strokeWidth=".5" />
          ))}
          {[0, 1, 2].map((i) => (
            <path key={`d${i}`} d={`M${20.5 + i * 24} 30H${31.5 + i * 24}`} fill="none" stroke="#D12A2A" strokeWidth=".5" pathLength={1} strokeDasharray={1} className={an(11.2 + i * 0.3, 11.7 + i * 0.3, "stroke-dashoffset:1", "stroke-dashoffset:0")} />
          ))}
          {steps.map((s, i) => (
            <g key={s} className={`nb ${pop(10.8 + i * 0.3)}`}>
              <circle cx={14 + i * 24} cy="30" r="6.5" stroke="#2C292E" strokeWidth=".5" className={i === 3 ? an(13.5, 13.8, "fill:#19171A", "fill:#D12A2A") : ""} fill="#19171A" />
              <text x={14 + i * 24} y="30" textAnchor="middle" dominantBaseline="central" fontSize="4" fontWeight="800" fill="#F2EFEF">{i + 1}</text>
              <text x={14 + i * 24} y="41" textAnchor="middle" fontSize="1.9" fill="#A8A2A6">{s}</text>
            </g>
          ))}
          {[12, 12.5, 13].map((t) => (
            <circle key={t} cx="14" cy="30" r="1.3" fill="#D12A2A" className={an(t, t + 1.5, "opacity:0;transform:translateX(0)", "opacity:1;transform:translateX(72px)", "cubic-bezier(.5,0,.5,1)")} />
          ))}
        </svg>
        <div className="absolute bottom-[5cqw] left-[6cqw] text-[2.6cqw] text-[#A8A2A6]">{up(13.6, "No customer waits. No order gets lost.")}</div>
      </div>

      {/* 4. Websites wall */}
      <div className={`scene ${s4}`}>
        <div className="absolute inset-[-12cqw] flex flex-col gap-[2.2cqw] pt-[8cqw]" style={{ transform: "rotate(-7deg) scale(1.05)" }}>
          <div className="overflow-hidden">{lane(0, "laneL")}</div>
          <div className="overflow-hidden">{lane(2, "laneR")}</div>
          <div className="overflow-hidden">{lane(4, "laneL")}</div>
        </div>
        <div className="absolute inset-y-0 left-0 w-[62cqw]" style={{ background: "linear-gradient(90deg,#0F0E10 45%,transparent)" }} />
        <div className="absolute left-[6cqw] top-[16cqw] w-[44cqw]">{up(14.9, "Websites for real businesses", head)}</div>
      </div>

      {/* 5. Code */}
      <div className={`scene ${s5}`}>
        <div className="absolute left-[6cqw] top-[5cqw]">{up(19.3, "The code behind it", head)}</div>
        <div className={`absolute left-[6cqw] top-[16cqw] w-[54cqw] rounded-[1.4cqw] border border-[#2C292E] bg-[#19171A] p-[2.4cqw] font-[family-name:var(--font-geist-mono)] text-[2cqw] leading-[1.7] ${rise(19.5)}`}>
          <div className="mb-[1.6cqw] flex gap-[.6cqw]">{["#D12A2A", "#3A363C", "#3A363C"].map((c, i) => <span key={i} className="h-[1cqw] w-[1cqw] rounded-full" style={{ background: c }} />)}</div>
          {code.map((l, i) => (
            <div key={i} className={`overflow-hidden whitespace-pre ${an(19.7 + i * 0.45, 20.1 + i * 0.45, "width:0", "width:100%", "steps(32,end)")}`}>{l}</div>
          ))}
          <span className="inline-block h-[2cqw] w-[.9cqw] translate-y-[.3cqw] bg-[#D12A2A]" style={{ animation: "blink 1s steps(1) infinite" }} />
        </div>
        <div className="absolute left-[64cqw] top-[16cqw] flex flex-col items-start gap-[1.4cqw]">
          {["Next.js", "Vercel", "Meta APIs", "Node.js"].map((c, i) => (
            <span key={c} className={`${chip} ${pop(21.4 + i * 0.25)}`}>{c}</span>
          ))}
        </div>
      </div>

      {/* 6. Outro */}
      <div className={`scene ${s6}`}>
        <div className={`absolute inset-0 bg-[#D12A2A] ${an(22.6, 23.4, "clip-path:inset(0 100% 0 0)", "clip-path:inset(0 0 0 0)", "cubic-bezier(.7,0,.2,1)")}`} />
        <div className="absolute left-[6cqw] top-[15cqw] w-[84cqw] text-white">
          {up(23.3, "Let’s put your business on WhatsApp.", "text-[7.4cqw] font-extrabold leading-[1] tracking-tighter")}
          <div className="mt-[3cqw] text-[2.6cqw] font-semibold">{up(24, "adamfounder23@gmail.com")}</div>
          <div className="mt-[.6cqw] text-[1.8cqw] italic text-white/80">{up(24.3, "Growth Solutions by Adam")}</div>
        </div>
      </div>

      {/* Showreel chrome */}
      <div className="absolute left-[2.5cqw] top-[2cqw] z-20 flex items-center gap-[.8cqw] text-[1.3cqw] text-white/70">
        <span className="h-[.9cqw] w-[.9cqw] rounded-full bg-[#D12A2A] ring-1 ring-white/40" style={{ animation: "blink 1.2s steps(1) infinite" }} />
        Adam Mbori showreel 2026
      </div>
      <div className="absolute bottom-0 left-0 z-20 h-[.5cqw] w-full origin-left bg-white/50" style={{ animation: `bar ${T}s linear infinite` }} />
    </>
  );

  return (
    <div role="img" aria-label="Looping motion showreel: Adam Mbori builds WhatsApp sales systems, websites and automation tools for small businesses." className="reel relative aspect-video w-full overflow-hidden rounded-2xl border border-[#2C292E] bg-[#0F0E10] text-[#F2EFEF]">
      <style>{`
        .reel *{box-sizing:border-box}
        .scene{position:absolute;inset:0;opacity:0}
        .nb{transform-box:fill-box;transform-origin:center}
        .spin{animation:spin ${T}s linear infinite}.spinr{animation:spin ${T / 2}s linear infinite reverse}
        .pulse{animation:pulse 2s ease-out infinite}
        .laneL{animation:laneL ${T}s linear infinite}.laneR{animation:laneR ${T}s linear infinite}
        @keyframes spin{to{transform:rotate(360deg)}}
        @keyframes pulse{from{transform:scale(1);opacity:1}to{transform:scale(1.9);opacity:0}}
        @keyframes blink{50%{opacity:0}}
        @keyframes drift{to{background-position:8cqw 8cqw}}
        @keyframes orb{0%,100%{transform:translate(0,0)}25%{transform:translate(30cqw,6cqw)}50%{transform:translate(18cqw,26cqw)}75%{transform:translate(-8cqw,14cqw)}}
        @keyframes laneL{to{transform:translateX(-50%)}}
        @keyframes laneR{from{transform:translateX(-50%)}to{transform:none}}
        @keyframes bar{from{transform:scaleX(0)}to{transform:scaleX(1)}}
        .reel:hover *{animation-play-state:paused!important}
        @media (prefers-reduced-motion:reduce){.reel *{animation:none!important}.scene.first{opacity:1}}
        ${css.join("")}
      `}</style>
      <div className="h-full w-full" style={{ containerType: "inline-size" }}>
        <div className="relative h-full w-full" aria-hidden="true">{body}</div>
      </div>
    </div>
  );
}
