// SVG diagrams — pure presentational, no client directive needed

export function ClockDiagram() {
  const cx = 220, cy = 220, r = 160

  // Pre-computed positions: angle in degrees (SVG convention: 0=right,90=down,270=up)
  const toXY = (deg: number, radius: number) => ({
    x: cx + radius * Math.cos((deg * Math.PI) / 180),
    y: cy + radius * Math.sin((deg * Math.PI) / 180),
  })

  const positions = [
    { deg: 270, color: "#C9A84C", label: "BACKLIGHT", sub: "Rim / Silhouette" },
    { deg: 315, color: "#6B9AE0", label: "45° ZONE", sub: "Classic Portrait" },
    { deg: 0,   color: "#E09B6B", label: "SIDE / SPLIT", sub: "50/50 Dramatic" },
    { deg: 45,  color: "#A07FD6", label: "REMBRANDT", sub: "Triangle on Cheek" },
    { deg: 180, color: "#E09B6B", label: "SIDE / SPLIT", sub: "Other Side" },
    { deg: 225, color: "#6B9AE0", label: "45° ZONE", sub: "Other Side" },
  ]

  // Tick marks
  const ticks = Array.from({ length: 60 }, (_, i) => {
    const { x: x1, y: y1 } = toXY(i * 6, r + 8)
    const { x: x2, y: y2 } = toXY(i * 6, r + (i % 5 === 0 ? 20 : 13))
    return { x1, y1, x2, y2, major: i % 5 === 0 }
  })

  return (
    <div className="my-10">
      <p className="text-[10px] tracking-[0.3em] uppercase text-[#5A5550] text-center mb-4" style={{ fontFamily: "monospace" }}>
        The Photographer's Clock — Light Position System
      </p>
      <svg viewBox="0 0 440 460" className="w-full max-w-[480px] mx-auto block">
        {/* Background */}
        <circle cx={cx} cy={cy} r="210" fill="#0A0A0A" />

        {/* Tick marks */}
        {ticks.map((t, i) => (
          <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
            stroke={t.major ? "#2A2A2A" : "#181818"} strokeWidth={t.major ? 1.5 : 0.8} />
        ))}

        {/* Clock ring */}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#1C1C1C" strokeWidth="1" strokeDasharray="2 6" />

        {/* Subject zone */}
        <circle cx={cx} cy={cy} r="55" fill="#111" stroke="#222" strokeWidth="1" />

        {/* Dashed lines from each position toward center */}
        {positions.map((p, i) => {
          const outer = toXY(p.deg, r - 8)
          const inner = toXY(p.deg, 56)
          return (
            <line key={i} x1={outer.x} y1={outer.y} x2={inner.x} y2={inner.y}
              stroke={p.color} strokeWidth="1" strokeDasharray="3 5" opacity="0.25" />
          )
        })}

        {/* Subject silhouette */}
        <circle cx={cx} cy={cy - 16} r="15" fill="#1A1A1A" stroke="#2E2E2E" strokeWidth="1.5" />
        <path d={`M${cx - 22} ${cy + 22} Q${cx - 22} ${cy + 4} ${cx} ${cy + 1} Q${cx + 22} ${cy + 4} ${cx + 22} ${cy + 22}`}
          fill="#1A1A1A" stroke="#2E2E2E" strokeWidth="1.5" />
        <text x={cx} y={cy + 42} textAnchor="middle" fontSize="8" fill="#3A3A3A"
          style={{ fontFamily: "monospace" }}>SUBJECT</text>

        {/* Position dots */}
        {positions.map((p, i) => {
          const { x, y } = toXY(p.deg, r)
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="14" fill={p.color} opacity="0.08" />
              <circle cx={x} cy={y} r="7" fill={p.color} />
            </g>
          )
        })}

        {/* Labels */}
        {/* 12 o'clock — BACKLIGHT */}
        <text x={220} y={22} textAnchor="middle" fontSize="9" fill="#C9A84C" fontWeight="600" style={{ fontFamily: "monospace" }}>BACKLIGHT</text>
        <text x={220} y={34} textAnchor="middle" fontSize="7" fill="#7A6030">Rim / Silhouette</text>

        {/* 1:30 — 45° zone right */}
        <text x={357} y={85} textAnchor="start" fontSize="9" fill="#6B9AE0" fontWeight="600" style={{ fontFamily: "monospace" }}>45° ZONE</text>
        <text x={357} y={97} textAnchor="start" fontSize="7" fill="#506080">Classic Portrait</text>

        {/* 3 o'clock — SIDE/SPLIT right */}
        <text x={396} y={214} textAnchor="start" fontSize="9" fill="#E09B6B" fontWeight="600" style={{ fontFamily: "monospace" }}>SIDE/SPLIT</text>
        <text x={396} y={226} textAnchor="start" fontSize="7" fill="#806040">50/50 Dramatic</text>

        {/* 4:30 — REMBRANDT */}
        <text x={350} y={353} textAnchor="start" fontSize="9" fill="#A07FD6" fontWeight="600" style={{ fontFamily: "monospace" }}>REMBRANDT</text>
        <text x={350} y={365} textAnchor="start" fontSize="7" fill="#705090">Triangle on Cheek</text>

        {/* Camera at 6 o'clock */}
        <rect x={178} y={398} width="84" height="22" rx="3" fill="rgba(107,174,139,0.12)" stroke="#6BAE8B" strokeWidth="0.7" />
        <text x={220} y={414} textAnchor="middle" fontSize="9" fill="#6BAE8B" fontWeight="600" style={{ fontFamily: "monospace" }}>▲ CAMERA</text>

        {/* 9 o'clock — SIDE/SPLIT left */}
        <text x={44} y={214} textAnchor="end" fontSize="9" fill="#E09B6B" fontWeight="600" style={{ fontFamily: "monospace" }}>SIDE/SPLIT</text>
        <text x={44} y={226} textAnchor="end" fontSize="7" fill="#806040">50/50 Dramatic</text>

        {/* 10:30 — 45° zone left */}
        <text x={83} y={85} textAnchor="end" fontSize="9" fill="#6B9AE0" fontWeight="600" style={{ fontFamily: "monospace" }}>45° ZONE</text>
        <text x={83} y={97} textAnchor="end" fontSize="7" fill="#506080">Classic Portrait</text>
      </svg>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
        {[
          { color: "#C9A84C", label: "Backlight" },
          { color: "#6B9AE0", label: "45° Zone" },
          { color: "#E09B6B", label: "Side/Split" },
          { color: "#A07FD6", label: "Rembrandt" },
          { color: "#6BAE8B", label: "Camera Position" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-[11px] text-[#5A5550]">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function TriangleDiagram() {
  return (
    <div className="my-10">
      <p className="text-[10px] tracking-[0.3em] uppercase text-[#5A5550] text-center mb-4" style={{ fontFamily: "monospace" }}>
        The Photographer's Triangle — The Three Vertices of Every Portrait
      </p>
      <svg viewBox="0 0 440 340" className="w-full max-w-[480px] mx-auto block">
        <rect width="440" height="340" fill="#0A0A0A" />

        {/* Triangle edges */}
        <line x1={220} y1={40} x2={60} y2={300} stroke="#2A2A2A" strokeWidth="1.5" strokeDasharray="6 4" />
        <line x1={220} y1={40} x2={380} y2={300} stroke="#2A2A2A" strokeWidth="1.5" strokeDasharray="6 4" />
        <line x1={60} y1={300} x2={380} y2={300} stroke="#2A2A2A" strokeWidth="1.5" strokeDasharray="6 4" />

        {/* Rotate annotations on edges */}
        <text x={118} y={180} textAnchor="middle" fontSize="8" fill="#3A3A3A" transform="rotate(-58, 118, 180)"
          style={{ fontFamily: "monospace" }}>LIGHT→SUBJECT DISTANCE</text>
        <text x={322} y={180} textAnchor="middle" fontSize="8" fill="#3A3A3A" transform="rotate(58, 322, 180)"
          style={{ fontFamily: "monospace" }}>CAMERA→SUBJECT AXIS</text>
        <text x={220} y={318} textAnchor="middle" fontSize="8" fill="#3A3A3A"
          style={{ fontFamily: "monospace" }}>LIGHT→CAMERA ANGLE</text>

        {/* LIGHT SOURCE vertex */}
        <circle cx={220} cy={40} r="28" fill="#0E0E0E" stroke="#C9A84C" strokeWidth="1.5" />
        <text x={220} y={36} textAnchor="middle" fontSize="14" fill="#C9A84C">☀</text>
        <text x={220} y={47} textAnchor="middle" fontSize="7.5" fill="#C9A84C" fontWeight="700"
          style={{ fontFamily: "monospace" }}>LIGHT</text>
        <text x={220} y={12} textAnchor="middle" fontSize="7" fill="#7A6030"
          style={{ fontFamily: "monospace" }}>fixed in natural light</text>

        {/* SUBJECT vertex */}
        <circle cx={60} cy={300} r="28" fill="#0E0E0E" stroke="#E09B6B" strokeWidth="1.5" />
        <text x={60} y={297} textAnchor="middle" fontSize="13" fill="#E09B6B">◎</text>
        <text x={60} y={308} textAnchor="middle" fontSize="7.5" fill="#E09B6B" fontWeight="700"
          style={{ fontFamily: "monospace" }}>SUBJECT</text>
        <text x={60} y={334} textAnchor="middle" fontSize="7" fill="#7A5030"
          style={{ fontFamily: "monospace" }}>you move them</text>

        {/* CAMERA vertex */}
        <circle cx={380} cy={300} r="28" fill="#0E0E0E" stroke="#6B9AE0" strokeWidth="1.5" />
        <text x={380} y={297} textAnchor="middle" fontSize="13" fill="#6B9AE0">⊡</text>
        <text x={380} y={308} textAnchor="middle" fontSize="7.5" fill="#6B9AE0" fontWeight="700"
          style={{ fontFamily: "monospace" }}>CAMERA</text>
        <text x={380} y={334} textAnchor="middle" fontSize="7" fill="#304870"
          style={{ fontFamily: "monospace" }}>you move yourself</text>

        {/* Center label */}
        <text x={220} y={196} textAnchor="middle" fontSize="10" fill="#333"
          style={{ fontFamily: "monospace" }}>Rotating any vertex</text>
        <text x={220} y={210} textAnchor="middle" fontSize="10" fill="#333"
          style={{ fontFamily: "monospace" }}>changes the image</text>
      </svg>

      <p className="text-center text-[13px] text-[#5A5550] mt-3 leading-relaxed max-w-md mx-auto">
        Every portrait is defined by this triangle. The light is fixed — you move your subject and yourself.
      </p>
    </div>
  )
}

export function ContrastZoneBar() {
  const zones = [
    { ratio: "1:1", label: "FLAT", desc: "No shadows, evenly lit", color: "#6BAE8B" },
    { ratio: "2:1", label: "GENTLE", desc: "Soft modeling, flattering", color: "#C9A84C" },
    { ratio: "4:1", label: "DRAMATIC", desc: "Strong shadow side, editorial", color: "#E09B6B" },
    { ratio: "8:1+", label: "HIGH DRAMA", desc: "Deep shadows, lost detail", color: "#E06B6B" },
  ]
  return (
    <div className="my-8 grid grid-cols-2 md:grid-cols-4 gap-3">
      {zones.map((z) => (
        <div key={z.ratio} className="rounded-lg p-4 border"
          style={{ borderColor: `${z.color}30`, background: `${z.color}08` }}>
          <div className="text-[11px] font-mono font-semibold tracking-wider mb-1" style={{ color: z.color }}>
            {z.ratio}
          </div>
          <div className="text-[13px] font-semibold text-[#E8E2D9] mb-1">{z.label}</div>
          <div className="text-[12px] text-[#5A5550] leading-snug">{z.desc}</div>
        </div>
      ))}
    </div>
  )
}

export function KelvinBar() {
  const temps = [
    { k: "1900K", label: "Candlelight", color: "#FF6020", desc: "Flame, deep amber" },
    { k: "3200K", label: "Tungsten", color: "#FFAA40", desc: "Incandescent bulbs" },
    { k: "4200K", label: "Golden Hr", color: "#FFCC70", desc: "Magic window" },
    { k: "5500K", label: "Daylight", color: "#FFEEDD", desc: "Neutral white" },
    { k: "6500K", label: "Overcast", color: "#DDEEFF", desc: "Cloud diffuse" },
    { k: "10000K", label: "Blue Sky", color: "#88BBFF", desc: "Deep shade" },
  ]
  return (
    <div className="my-8">
      <div className="flex rounded-lg overflow-hidden h-3 mb-4"
        style={{ background: "linear-gradient(to right, #FF4500, #FF8800, #FFCC44, #FFFFFF, #CCE8FF, #6699FF)" }} />
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
        {temps.map((t) => (
          <div key={t.k} className="text-center">
            <div className="w-3 h-3 rounded-full mx-auto mb-1" style={{ backgroundColor: t.color }} />
            <div className="text-[10px] font-mono font-bold text-[#E8E2D9]">{t.k}</div>
            <div className="text-[10px] text-[#5A5550]">{t.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
