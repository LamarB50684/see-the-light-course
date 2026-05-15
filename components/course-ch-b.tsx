import Image from "next/image"
import { Callout, KeyFact } from "@/components/callout"
import { ClockDiagram, TriangleDiagram, ContrastZoneBar, KelvinBar } from "@/components/diagrams"

// ── Image URLs ─────────────────────────────────────────────────────────────
const IMG = {
  hero: "https://galaxy-prod.tlcdn.com/gen/user_31iPhAyW4gI33CFp2iTeWeTunIo/c9ac2ca8-4f79-4d84-bb22-3ddd2616d052.jpeg",
  direction: "https://galaxy-prod.tlcdn.com/gen/user_31iPhAyW4gI33CFp2iTeWeTunIo/d11a7fe7-4d4e-4770-98cb-b5d06b5dbfc5.jpeg",
  contrast: "https://galaxy-prod.tlcdn.com/gen/user_31iPhAyW4gI33CFp2iTeWeTunIo/e75d4b66-1be1-4664-9dca-c8a508ecb23a.jpeg",
  color: "https://galaxy-prod.tlcdn.com/gen/user_31iPhAyW4gI33CFp2iTeWeTunIo/a1418e36-c6aa-4012-a380-6913ebb7bcf6.jpeg",
  hardLight: "https://galaxy-prod.tlcdn.com/gen/user_31iPhAyW4gI33CFp2iTeWeTunIo/0fe3a7db-38d6-4867-83f4-0725c07350a2.jpeg",
  softLight: "https://galaxy-prod.tlcdn.com/gen/user_31iPhAyW4gI33CFp2iTeWeTunIo/6bc56109-ade8-49b0-a2aa-b113b517de25.jpeg",
  backlit: "https://galaxy-prod.tlcdn.com/gen/user_31iPhAyW4gI33CFp2iTeWeTunIo/37e87608-9dbe-4a77-b62d-83706669421c.jpeg",
  scene: "https://galaxy-prod.tlcdn.com/gen/user_31iPhAyW4gI33CFp2iTeWeTunIo/715d3302-8c00-42cd-a687-a39b66e6d199.jpeg",
}

// ── Shared sub-components ───────────────────────────────────────────────────

function ChapterHeader({
  number, title, subtitle, imageUrl,
}: { number: string; title: string; subtitle: string; imageUrl: string }) {
  return (
    <div className="relative h-[420px] md:h-[520px] flex items-end overflow-hidden">
      <Image src={imageUrl} alt={title} fill className="object-cover" style={{ opacity: 0.38 }} sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent" />
      <div className="relative z-10 px-8 md:px-16 pb-14">
        <div
          className="text-[10px] tracking-[0.4em] uppercase text-[#C9A84C] mb-4"
          style={{ fontFamily: "monospace" }}
        >
          Chapter {number}
        </div>
        <h2
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-[#E8E2D9] leading-[1.05] mb-3"
        >
          {title}
        </h2>
        <p className="text-[#7A7470] text-lg font-light max-w-xl">{subtitle}</p>
      </div>
    </div>
  )
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-8 md:px-16 lg:px-20 py-16 max-w-[820px]">
      {children}
    </div>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[16.5px] text-[#B8B2A9] leading-[1.85] mb-5">{children}</p>
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="font-serif text-2xl md:text-3xl font-light text-[#E8E2D9] mt-14 mb-4 pb-3"
      style={{ borderBottom: "1px solid #1A1A1A" }}
    >
      {children}
    </h3>
  )
}

function AuditStep({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 mb-6">
      <div
        className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-bold mt-0.5"
        style={{ background: "rgba(201,168,76,0.10)", color: "#C9A84C", fontFamily: "monospace" }}
      >
        {num}
      </div>
      <div>
        <div className="text-[14px] font-semibold text-[#E8E2D9] mb-1">{title}</div>
        <div className="text-[15px] text-[#8A8480] leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

function SectionDivider() {
  return (
    <div className="border-t border-[#111] my-0" />
  )
}

function Objectives({ items }: { items: string[] }) {
  return (
    <div className="mb-12 p-6 rounded-xl border border-[#181818] bg-[#0A0A0A]">
      <div
        className="text-[9px] tracking-[0.35em] uppercase text-[#3A3A3A] mb-4"
        style={{ fontFamily: "monospace" }}
      >
        In this chapter you will learn
      </div>
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3 mb-2">
          <span className="text-[#C9A84C] mt-0.5 text-sm">◆</span>
          <span className="text-[14px] text-[#8A8480] leading-relaxed">{item}</span>
        </div>
      ))}
    </div>
  )
}

// ── CHAPTER THREE ───────────────────────────────────────────────────────────

export function ChapterThree() {
  return (
    <>
      <ChapterHeader
        number="03"
        title="Contrast — Reading Shadow Ratios"
        subtitle="The ratio that controls drama, mood, and the emotional register of every image."
        imageUrl={IMG.contrast}
      />
      <Body>
        <Objectives
          items={[
            "Identify four contrast zones by observation alone",
            "Control contrast ratio on location using available tools",
            "Match contrast level to the emotional intent of the image",
          ]}
        />

        <P>
          Once you have established direction, your second question is: how dramatic is the
          difference between the lit and shadow sides? This ratio — the lighting ratio or contrast
          ratio — determines the emotional temperature of the image more than any other single
          variable. High contrast reads as dramatic, gritty, and intense. Low contrast reads as
          soft, gentle, and approachable.
        </P>

        <ContrastZoneBar />

        <H3>How to Read Contrast</H3>
        <P>
          Most photographers instinctively look at the highlights. Invert this habit completely.
          The shadow side tells you everything. When you assess a scene, look specifically at the
          darkest area of your subject and ask two questions: Can you see detail there? And how
          does it compare in brightness to the lit side?
        </P>

        <div className="grid md:grid-cols-2 gap-4 my-8">
          <div className="rounded-xl overflow-hidden relative h-[260px]">
            <Image src={IMG.hardLight} alt="Hard light with sharp shadows" fill className="object-cover" sizes="50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4">
              <div className="text-[10px] font-mono font-bold text-[#E09B6B] tracking-wider mb-1">HARD LIGHT</div>
              <div className="text-[12px] text-[#E8E2D9]">Sharp shadow edges, high local contrast</div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden relative h-[260px]">
            <Image src={IMG.softLight} alt="Soft light with gentle shadows" fill className="object-cover" sizes="50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4">
              <div className="text-[10px] font-mono font-bold text-[#6BAE8B] tracking-wider mb-1">SOFT LIGHT</div>
              <div className="text-[12px] text-[#E8E2D9]">Gradual transitions, flattering graduation</div>
            </div>
          </div>
        </div>

        <H3>The Four Contrast Zones</H3>

        <div className="space-y-4">
          {[
            { zone: "Zone 1 — 1:1 Flat", color: "#6BAE8B", desc: "No meaningful shadows. Light comes from all directions equally. Overcast days, open shade, or large softboxes very close to subject. Use for clean commercial beauty, high-key aesthetics, and lifestyle imagery where shadow would compete with a busy scene." },
            { zone: "Zone 2 — 2:1 Gentle Modeling", color: "#C9A84C", desc: "Visible shadow with full detail throughout. The most common 'natural' portrait ratio — produces the sense of three-dimensionality without drama. Most golden-hour outdoor portraits naturally land in this zone. Commercially safe and universally flattering." },
            { zone: "Zone 3 — 4:1 Dramatic", color: "#E09B6B", desc: "The shadow side drops roughly two stops below the highlights. Detail exists in shadows but requires attention. This is where editorial portraiture begins — strong depth, character, and presence. Still commercially viable for lifestyle and fashion." },
            { zone: "Zone 4 — 8:1+ High Drama", color: "#E06B6B", desc: "Shadow side is three or more stops below highlights. Shadow detail is largely lost. Intentional and uncompromising. Used in fine art, dark editorial, and fashion. Not for general commercial use — requires intentionality and editorial context to read as skilled rather than failed." },
          ].map((item) => (
            <div key={item.zone} className="p-4 rounded-lg border border-[#181818]"
              style={{ background: `${item.color}05` }}>
              <div className="text-[12px] font-semibold mb-2" style={{ color: item.color, fontFamily: "monospace" }}>
                {item.zone}
              </div>
              <p className="text-[14px] text-[#7A7470] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <H3>Controlling Contrast on Location</H3>
        <P>
          You have more control over contrast than most beginners realize. The key tools are position,
          reflection, and occlusion.
        </P>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div>
            <div className="text-[11px] font-mono text-[#6BAE8B] tracking-widest mb-3">TO REDUCE CONTRAST</div>
            <ul className="space-y-2">
              {[
                "Move subject into open shade (sky becomes the fill)",
                "Add a reflector on the shadow side to bounce fill",
                "Position near a bright wall or ground that bounces upward",
                "Use subtle fill flash balanced 1–2 stops below ambient",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[14px] text-[#7A7470]">
                  <span className="text-[#6BAE8B] mt-1">›</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[11px] font-mono text-[#E06B6B] tracking-widest mb-3">TO INCREASE CONTRAST</div>
            <ul className="space-y-2">
              {[
                "Move subject farther from any fill source",
                "Block ambient on shadow side with a dark panel (negative fill)",
                "Use a smaller window or set the bounce angle",
                "Position subject closer to light while keeping fill distant",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[14px] text-[#7A7470]">
                  <span className="text-[#E06B6B] mt-1">›</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Callout type="principle">
          High contrast is not bad and low contrast is not good. They are tools. The failure
          is having one without intending it — capturing high contrast because you did not know
          how to reduce it, or getting flat light because you did not know how to add depth.
          Intent is everything.
        </Callout>
      </Body>
      <SectionDivider />
    </>
  )
}

// ── CHAPTER FOUR ────────────────────────────────────────────────────────────

export function ChapterFour() {
  return (
    <>
      <ChapterHeader
        number="04"
        title="Color — Reading Light Temperature"
        subtitle="Every source of light has color. Learning to read it changes everything."
        imageUrl={IMG.color}
      />
      <Body>
        <Objectives
          items={[
            "Read color temperature by eye across the key photographic range",
            "Identify and use the three most important natural light windows",
            "Recognize and resolve mixed light situations before they appear in your frame",
          ]}
        />

        <P>
          All light has color. This is not a flaw in some sources and a feature in others — it is a
          fundamental physical property of electromagnetic radiation. Learning to read it is learning
          to read the room. The color of light shapes skin tones, mood, and the entire emotional
          palette of your image. Ignoring it is like composing with your eyes half-closed.
        </P>

        <KelvinBar />

        <H3>The Kelvin Scale for Photographers</H3>
        <P>
          Color temperature is measured in Kelvin. Lower numbers are warmer (orange, amber). Higher
          numbers are cooler (blue, cyan). The relationship is counter-intuitive to beginners, but
          it becomes second nature quickly: 2700K is your grandmother&apos;s lamp; 6500K is a
          cloudy gray sky; 10,000K is blue midday shade.
        </P>

        <div className="space-y-3 my-8">
          {[
            { range: "1900–2500K", name: "Candle / Flame", feel: "Deep amber-orange. Intimate and dangerous. Almost cinematic in warmth.", ex: "Fireplace, candle, flame" },
            { range: "2700–3200K", name: "Tungsten / Incandescent", feel: "Warm orange-yellow. Classic interior domestic light. Flattering on warm skin tones.", ex: "Household bulbs, restaurant lighting" },
            { range: "3500–4200K", name: "Warm LED / Lower Golden Hour", feel: "Warm to neutral. The beginning of the magic window. Commercial and universally flattering.", ex: "Golden hour start, warm LED panels" },
            { range: "5000–5500K", name: "Daylight / Electronic Flash", feel: "White, neutral. The calibration reference point. Your camera's AWB targets this range.", ex: "Midday sun, studio flash" },
            { range: "6000–6500K", name: "Overcast / Open Shade", feel: "Slight blue cast. Clean and modern. Works for cool fashion aesthetics.", ex: "Cloudy days, shaded outdoor areas" },
            { range: "7000–10000K", name: "Blue Sky / Deep Shade", feel: "Distinctly blue, cold, atmospheric. Melancholic or futuristic depending on use.", ex: "Sky-lit shade, blue hour" },
          ].map((item) => (
            <div key={item.range} className="grid grid-cols-[120px_1fr] gap-4 py-3 border-b border-[#141414]">
              <div>
                <div className="text-[11px] font-mono text-[#C9A84C]">{item.range}</div>
                <div className="text-[12px] text-[#5A5550] mt-0.5">{item.name}</div>
              </div>
              <div>
                <p className="text-[14px] text-[#8A8480] leading-relaxed">{item.feel}</p>
                <p className="text-[12px] text-[#4A4A4A] mt-1">e.g. {item.ex}</p>
              </div>
            </div>
          ))}
        </div>

        <H3>The Three Natural Light Windows</H3>

        <div className="space-y-6 my-8">
          {[
            {
              name: "Golden Hour",
              time: "30–45 min after sunrise / before sunset",
              temp: "2500–3500K",
              color: "#C9A84C",
              desc: "The hour every photographer chases for good reason. The source is at its lowest angle in the sky, producing long raking shadows that reveal form, and warmth that flatters every skin tone. Contrast is manageable — the low sun creates long soft shadows rather than harsh vertical ones. The catch: it lasts 30–45 minutes, it moves fast, and you must arrive early. Scout before, shoot during.",
            },
            {
              name: "Blue Hour",
              time: "20–30 min before sunrise / after sunset",
              temp: "7000–10000K",
              color: "#6B9AE0",
              desc: "No direct sun, but the sky remains active — deep blue, even, and atmospheric. Contrast collapses almost entirely. This is the most underused window by intermediate photographers and produces images that feel cinematic and mysterious. Because the light is so diffuse and even, conventional position rules matter less. What matters more: exposure, depth, and the balance between ambient and any artificial sources in the frame.",
            },
            {
              name: "Midday",
              time: "10am–3pm (clear sky)",
              temp: "5500–6500K",
              color: "#E09B6B",
              desc: "Neutral to cool, near-vertical, high-contrast. The hardest light for portraits. Vertical angle creates deep eye socket shadows, double chins, and 'raccoon eyes.' The color is clinical. Your strategies: find open shade (north-facing walls, covered walkways, overhang), use tall structures to block overhead light and expose the face to reflected wall light, or lean into the harshness deliberately for gritty editorial work.",
            },
          ].map((item) => (
            <div key={item.name} className="p-6 rounded-xl border border-[#181818]"
              style={{ borderColor: `${item.color}20` }}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-[13px] font-bold" style={{ color: item.color }}>{item.name}</div>
                  <div className="text-[12px] text-[#4A4A4A] mt-0.5">{item.time}</div>
                </div>
                <div className="text-[11px] font-mono px-2 py-1 rounded"
                  style={{ background: `${item.color}15`, color: item.color }}>
                  {item.temp}
                </div>
              </div>
              <p className="text-[14px] text-[#7A7470] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <H3>Mixed Light — The Danger Zone</H3>
        <P>
          Mixed light occurs when two sources of different temperatures illuminate your subject
          simultaneously. The most common scenario: an interior room where tungsten lamps (3200K,
          orange) and a daylight window (6500K, blue) both strike your subject. Your camera can set
          only one white balance — if you target the window, the lamps go orange; if you target the
          lamps, the window turns blue.
        </P>

        <Callout type="warning" title="Mixed Light Warning">
          If you notice that your subject&apos;s lit side and shadow side are different COLORS —
          not just different brightnesses — you are in a mixed light situation. This is not
          correctable in post. Address it before you shoot.
        </Callout>

        <div className="my-6 space-y-3">
          {[
            "Eliminate the weaker source — close the blinds, turn off the lamp, move out of the zone",
            "Gel your artificial source — add CTO gel to match lamps to daylight, or CTB to match daylight to lamps",
            "Lean into it editorially — warm foreground subject against cool background window can read as intentional cinematic",
            "Reposition — sometimes the cleanest fix is simply moving the subject out of the mixed zone entirely",
          ].map((item, i) => (
            <div key={i} className="flex gap-3 text-[14px] text-[#7A7470]">
              <span className="text-[#C9A84C] shrink-0 font-mono text-[12px] mt-0.5">{String(i + 1).padStart(2, "0")}</span>
              {item}
            </div>
          ))}
        </div>
      </Body>
      <SectionDivider />
    </>
  )
}
