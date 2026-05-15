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

// ── CHAPTER FIVE ─────────────────────────────────────────────────────────────

export function ChapterFive() {
  return (
    <>
      <ChapterHeader
        number="05"
        title="Quality — Hard vs. Soft Light"
        subtitle="The edge where light and shadow meet is the most expressive variable in photography."
        imageUrl={IMG.hardLight}
      />
      <Body>
        <Objectives
          items={[
            "Understand the physics that make light hard or soft",
            "Identify quality by observation using the shadow-edge test",
            "Find and create soft light in any outdoor or indoor environment",
          ]}
        />

        <P>
          Quality in lighting means one specific thing: the character of the shadow edge. Is it
          crisp and abrupt, or gradual and feathered? This single variable — more than contrast,
          more than color — determines whether an image feels harsh or approachable, documentary or
          romantic, gritty or commercial.
        </P>

        <KeyFact>
          "The larger the apparent size of the light source relative to the subject, the softer
          the light. It is physics, not magic."
        </KeyFact>

        <H3>The Physics</H3>
        <P>
          The sun is 864,000 miles in diameter. But it sits 93 million miles away. As seen from
          Earth, it subtends just 0.5° of arc — a tiny point in a vast sky. This is why direct
          sunlight is hard light. Not because it is the sun, but because from your subject&apos;s
          perspective it appears as a small source.
        </P>
        <P>
          Now place a 6-foot diffusion panel 3 feet from your subject. That panel subtends roughly
          70° of arc — an enormous apparent size. Light from this source wraps around the contours
          of the subject and produces gradual, feathered shadow transitions. That is soft light.
        </P>
        <P>
          This is also why "shoot in open shade" works. The visible sky becomes your light source —
          not a small point, but a vast dome subtending nearly 180° of arc. The apparent size is
          immense. The result is deeply soft illumination.
        </P>

        <H3>Comparison — Hard vs. Soft</H3>

        <div className="grid md:grid-cols-2 gap-5 my-8">
          <div>
            <div className="relative rounded-xl overflow-hidden h-[320px]">
              <Image src={IMG.hardLight} alt="Hard light example" fill className="object-cover" sizes="40vw" />
            </div>
            <div className="mt-3">
              <div className="text-[11px] font-mono text-[#E09B6B] font-bold tracking-wider mb-1">HARD LIGHT</div>
              <ul className="text-[13px] text-[#5A5550] space-y-1">
                <li>◆ Sharp, defined shadow edges</li>
                <li>◆ High local contrast on curved surfaces</li>
                <li>◆ Reveals texture aggressively</li>
                <li>◆ Mood: intense, gritty, editorial</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="relative rounded-xl overflow-hidden h-[320px]">
              <Image src={IMG.softLight} alt="Soft light example" fill className="object-cover" sizes="40vw" />
            </div>
            <div className="mt-3">
              <div className="text-[11px] font-mono text-[#6BAE8B] font-bold tracking-wider mb-1">SOFT LIGHT</div>
              <ul className="text-[13px] text-[#5A5550] space-y-1">
                <li>◆ Gradual, feathered shadow transitions</li>
                <li>◆ Low local contrast, smooth tonal range</li>
                <li>◆ Smooths and flatters skin texture</li>
                <li>◆ Mood: romantic, commercial, approachable</li>
              </ul>
            </div>
          </div>
        </div>

        <H3>The Shadow-Edge Test</H3>
        <P>
          Hold your hand at arm&apos;s length in the light where your subject will stand. Look
          at the shadow your hand casts on a nearby surface or on your own body.
        </P>

        <div className="space-y-3 my-6">
          {[
            { label: "Crisp, abrupt edge (1–2mm)", verdict: "Hard light", color: "#E09B6B", action: "High contrast; decide whether your sensor can hold shadow detail" },
            { label: "Soft, graduated edge (1–2 inch transition zone)", verdict: "Medium quality", color: "#C9A84C", action: "Large window, bright overcast, or bounced flash. Very workable." },
            { label: "No visible shadow edge at all", verdict: "Near-flat", color: "#6BAE8B", action: "Overcast sky or open shade. Maximum softness. Use pose for depth." },
          ].map((item) => (
            <div key={item.label} className="flex gap-3 p-3 rounded-lg border border-[#181818]">
              <div className="w-1.5 shrink-0 rounded-full" style={{ background: item.color }} />
              <div className="flex-1">
                <div className="text-[13px] text-[#E8E2D9] font-medium">{item.label}</div>
                <div className="text-[12px] font-mono mt-0.5" style={{ color: item.color }}>{item.verdict}</div>
                <div className="text-[12px] text-[#5A5550] mt-1">{item.action}</div>
              </div>
            </div>
          ))}
        </div>

        <H3>Finding Soft Light Outdoors</H3>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          {[
            { title: "Open shade (north side)", desc: "In the northern Hemisphere, north-facing areas receive only reflected sky light — direct sun never touches them. Large, even, cool, and very forgiving." },
            { title: "Overcast days", desc: "Cloud cover diffuses the entire sun into a vast dome. Nature&apos;s softbox. Note: direction collapses, so position matters more, not less." },
            { title: "Backlit + sky fill", desc: "Place subject with sun behind them. Rim light separates; open sky in front provides large, even, soft frontal fill. Beautiful combination." },
            { title: "Wall bounce", desc: "Face subject toward a large light-colored wall. The wall becomes a secondary source — reflects ambient back as wide, soft fill." },
          ].map((item) => (
            <div key={item.title} className="p-4 rounded-lg bg-[#0C0C0C] border border-[#181818]">
              <div className="text-[13px] font-semibold text-[#C9A84C] mb-2">{item.title}</div>
              <p className="text-[13px] text-[#6A6A6A] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <Callout type="technique" title="Creating Soft Light from Hard">
          When you cannot find soft light: (1) create shade — use yourself, an assistant, or a scrim between the sun and subject; (2) use a diffusion panel (¼ or ½-stop silk held between source and subject); (3) go inside — a large window provides genuinely soft light on most clear days; (4) bounce the light off a reflector at greater distance to increase apparent source size.
        </Callout>
      </Body>
      <SectionDivider />
    </>
  )
}

// ── CHAPTER SIX ──────────────────────────────────────────────────────────────

export function ChapterSix() {
  return (
    <>
      <ChapterHeader
        number="06"
        title="Position & Pose from Light"
        subtitle="Where to stand, where to place your subject — decided entirely by what the light is doing."
        imageUrl={IMG.backlit}
      />
      <Body>
        <Objectives
          items={[
            "Understand the triangle relationship between light, subject, and camera",
            "Apply six camera positions to any lighting scenario",
            "Direct pose vocabulary based on light direction — not habit",
          ]}
        />

        <P>
          This is where all four audit findings converge into a single decision. You know the
          geometry (direction). You know the drama (contrast). You know the palette (color). You
          know the character (quality). Now: where do you stand, and how does your subject move?
        </P>

        <TriangleDiagram />

        <H3>The Six Camera Positions</H3>
        <P>
          Your camera can occupy six meaningful positions relative to the light source. Each
          changes the image fundamentally. Move between them before committing — the best position
          is rarely obvious from where you first stand.
        </P>

        <div className="space-y-4">
          {[
            {
              num: "01",
              name: "Shoot INTO the Light",
              desc: "You face the source. Your subject is between you and the light — front-lit and well-illuminated. The background is bright. Use when you want the subject in full light with the scene behind them. Excellent for golden hour portraits where the environment matters as much as the person.",
            },
            {
              num: "02",
              name: "Shoot WITH the Light",
              desc: "Light behind you, over your shoulder. Flat, even, shadowless illumination. Best for clean detail shots, close-up beauty, and scenes where the background needs to read clearly. Subjects often squint toward the source — account for this.",
            },
            {
              num: "03",
              name: "45° to the Light — Classic",
              desc: "Your camera is at roughly 45° to the light axis. The most versatile position. Meaningful shadow depth and modeling while the subject is still well-lit. Works for 90% of portrait situations. This is the position to default to when you are uncertain.",
            },
            {
              num: "04",
              name: "90° to the Light — Side",
              desc: "Maximum drama. You shoot across the light — one half of the subject blazes, one half falls to shadow. Use for strong editorial work, when you want form to dominate over detail, or when the dark background side contains an important compositional element.",
            },
            {
              num: "05",
              name: "Shoot from Below",
              desc: "Low angle, shooting upward. Shifts the catchlight to the upper iris. Creates an elongating perspective on the face. Removes ground clutter — sky or a clean upper wall becomes the background. Powerful for environmental portraits with sky context.",
            },
            {
              num: "06",
              name: "Shoot from Above",
              desc: "High angle, shooting down. Minimizes double-chin and neck shadows. Creates intimacy and a confessional register. Combined with flat light above — used in editorial beauty. With side light from above — creates a beautiful directional overhead pattern.",
            },
          ].map((item) => (
            <div
              key={item.num}
              className="flex gap-5 py-5 border-b border-[#141414] group"
            >
              <div
                className="text-[28px] font-serif font-light shrink-0 leading-none mt-0.5"
                style={{ color: "rgba(201,168,76,0.2)", fontFamily: "var(--font-cormorant)" }}
              >
                {item.num}
              </div>
              <div>
                <div className="text-[14px] font-semibold text-[#E8E2D9] mb-2">{item.name}</div>
                <p className="text-[14px] text-[#7A7470] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <H3>Pose Decisions That Follow Light Direction</H3>
        <P>
          Pose is not about flattery in a vacuum — it is about placing the body and face in the
          optimal relationship to the light that already exists. When you understand this, posing
          becomes logical rather than stylistic.
        </P>

        <div className="space-y-5 my-6">
          {[
            {
              light: "When side-lit (3 or 9 o&apos;clock)",
              pose: "Rotate the body toward the light, but turn the face away from it. This creates a long, slimming sweep of light across the near side of the body. Never let the subject face squarely into side light — it splits the face 50/50 and usually unflatters.",
              color: "#E09B6B",
            },
            {
              light: "When backlit (12 o&apos;clock)",
              pose: "Have the subject turn slightly away from camera direction, then look back. This lets the rim light kiss the jawline and near shoulder. Chin slightly down prevents the rim from washing out the forehead.",
              color: "#C9A84C",
            },
            {
              light: "When in Rembrandt zone (4:30)",
              pose: "Light falls on the 'short side' of the face — the side turning slightly away from camera. The triangle appears on the shadowed cheekbone. Walk around the subject millimeter by millimeter until the triangle appears, then lock in.",
              color: "#A07FD6",
            },
            {
              light: "When front-lit (6 o&apos;clock)",
              pose: "No shadows means no inherent depth. Depth must come entirely from pose. Never shoot a front-lit subject square to camera. Body angles, hand positions, and head tilts are the only dimensional tools you have.",
              color: "#6BAE8B",
            },
          ].map((item) => (
            <div
              key={item.light}
              className="p-5 rounded-xl border"
              style={{ borderColor: `${item.color}20`, background: `${item.color}05` }}
            >
              <div
                className="text-[11px] font-mono font-bold tracking-wider mb-2"
                style={{ color: item.color }}
              >
                {item.light}
              </div>
              <p className="text-[14px] text-[#7A7470] leading-relaxed">{item.pose}</p>
            </div>
          ))}
        </div>

        <Callout type="principle" title="The Catchlight Rule">
          In any portrait, the ideal catchlight position is between 10 o&apos;clock and 2 o&apos;clock
          in the iris — upper quadrant. Below-center catchlights look unnatural and lifeless.
          A centered catchlight makes the eye feel flat. Find the position where the white point
          lands in the upper portion of the eye, and that is your lock-in.
        </Callout>
      </Body>
      <SectionDivider />
    </>
  )
}

// ── CHAPTER SEVEN ────────────────────────────────────────────────────────────

export function ChapterSeven() {
  return (
    <>
      <ChapterHeader
        number="07"
        title="The Scene Arrival Protocol"
        subtitle="A step-by-step field system you will run on every location, every time."
        imageUrl={IMG.scene}
      />
      <Body>
        <Objectives
          items={[
            "Execute a complete location survey in under 2 minutes",
            "Identify the sweet spot, danger zones, and optimal subject position at any location",
            "Commit to triangle position before raising the camera",
          ]}
        />

        <P>
          This chapter formalizes the entire system into a step-by-step protocol you run every time
          you arrive at a new location or scene. Follow this consciously until it becomes automatic.
          Then follow it automatically until it becomes intuition. The interval between those two
          stages is roughly 20 locations.
        </P>

        <KeyFact>
          "The moment you can walk into a location and immediately see which spot has beautiful
          soft window light at a 45° angle — that moment you stop reacting to light and start
          orchestrating it."
        </KeyFact>

        <H3>The Five-Step Protocol</H3>

        <div className="space-y-6 my-8">
          {[
            {
              step: "01",
              title: "The Visual Survey",
              time: "30 seconds",
              color: "#C9A84C",
              desc: "Before touching your camera, walk the space. No shooting. Look for: primary light source (point at it and name it), secondary bounce sources, deep shadows and whether they have detail, color consistency or mixed sources, reflective surfaces (floors, walls, water, sand) that create unintentional fill.",
            },
            {
              step: "02",
              title: "The Shadow Edge Test",
              time: "15 seconds",
              color: "#6B9AE0",
              desc: "Hold your hand at arm&apos;s length in the zone where your subject will stand. Look at the shadow your hand casts on a nearby surface. Sharp edge = hard light, plan for contrast. Soft edge = soft light, forgiving. No shadow = flat ambient, you&apos;ll need pose to create depth.",
            },
            {
              step: "03",
              title: "The Color Read",
              time: "10 seconds",
              color: "#6BAE8B",
              desc: "Find a neutral surface — white wall, gray sidewalk, or your own hand. Look at its actual color under this light. Orange tint = warm, sub-4000K. White = neutral, AWB will work. Blue tint = cool, above 6000K. Two colors on one surface = mixed light situation, address before shooting.",
            },
            {
              step: "04",
              title: "The Position Walk",
              time: "60 seconds",
              color: "#A07FD6",
              desc: "Walk around the shooting area watching quality and direction change. Identify 2–3 candidate positions for your subject. For each: what clock zone is the light? Is there a catchlight opportunity in the eye? Does the background work? Can you tweak contrast by small repositions?",
            },
            {
              step: "05",
              title: "Lock In Your Triangle",
              time: "30 seconds",
              color: "#E09B6B",
              desc: "Commit to three specific decisions: (1) where exactly your subject stands, (2) where you will stand, (3) what first pose direction you will give. These three commitments — subject position, camera position, and opening pose — are the lock-in. Write them or state them. Then shoot.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex gap-5 p-6 rounded-xl border border-[#181818] bg-[#0A0A0A]"
            >
              <div className="shrink-0">
                <div
                  className="text-[22px] font-serif font-light leading-none mb-1"
                  style={{ color: item.color, fontFamily: "var(--font-cormorant)" }}
                >
                  {item.step}
                </div>
                <div
                  className="text-[9px] font-mono text-[#3A3A3A] whitespace-nowrap"
                >
                  {item.time}
                </div>
              </div>
              <div>
                <div
                  className="text-[13px] font-semibold mb-2"
                  style={{ color: item.color }}
                >
                  {item.title}
                </div>
                <p className="text-[14px] text-[#6A6A6A] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <H3>The Complete Field Evaluation Form</H3>
        <P>
          Write this down at your first 20 locations. Then don&apos;t write it. Just ask.
        </P>

        <div className="my-6 p-6 rounded-xl border border-[#C9A84C]/20 bg-[#0C0C0C] font-mono text-[13px]">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#C9A84C] mb-5">
            Field Evaluation Cheat Sheet
          </div>
          {[
            { label: "DIRECTION", placeholder: "_____ o&apos;clock position" },
            { label: "CONTRAST", placeholder: "Zone _____ (1=flat · 2=gentle · 3=dramatic · 4=high)" },
            { label: "COLOR", placeholder: "Warm / Neutral / Cool / Mixed — approx _____ K" },
            { label: "QUALITY", placeholder: "Hard / Medium / Soft" },
            { label: "SUBJECT POSITION", placeholder: "_______________________________________" },
            { label: "CAMERA POSITION", placeholder: "_______________________________________" },
            { label: "FIRST POSE DIRECTION", placeholder: "_______________________________________" },
          ].map((item) => (
            <div key={item.label} className="flex gap-3 py-2.5 border-b border-[#181818] last:border-0">
              <span className="text-[#C9A84C] w-40 shrink-0 text-[11px]">{item.label}</span>
              <span className="text-[#3A3A3A]">{item.placeholder}</span>
            </div>
          ))}
        </div>

        <Callout type="exercise" title="20-Location Challenge">
          At each of your next 20 shoots or practice sessions, run the full five-step protocol
          out loud before picking up the camera. Time yourself — the goal is under 2 minutes
          for the whole sequence. Track what you notice that you would have missed before.
          At location 20, you will not need the timer.
        </Callout>
      </Body>
      <SectionDivider />
    </>
  )
}
