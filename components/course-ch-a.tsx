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

// ── CHAPTER ONE ─────────────────────────────────────────────────────────────

export function ChapterOne() {
  return (
    <>
      <ChapterHeader
        number="01"
        title="The 5-Second Light Audit"
        subtitle="A repeatable mental checklist for every scene, every time."
        imageUrl={IMG.hero}
      />
      <Body>
        <Objectives
          items={[
            "Understand why light evaluation must happen before camera settings",
            "Memorize the five audit questions in their correct sequence",
            "Apply the system as a reflex on any location, in any light",
          ]}
        />

        <P>
          Every working photographer develops a mental shortcut — a rapid-fire checklist they run
          the moment they step into a new environment. The 5-Second Light Audit is that system,
          formalized and made teachable. You will not always have the luxury of scouting a location
          days in advance or adjusting the environment before you shoot. What you always have is the
          ability to read what is there and respond intelligently.
        </P>
        <P>
          Most beginners are taught aperture, shutter speed, and ISO first. This is understandable
          — those settings are concrete, adjustable dials. But they are responses to light, not
          decisions about light. The photographer who reaches for their settings first is
          reacting. The photographer who reads the light first is composing.
        </P>

        <KeyFact>
          "Aperture, shutter, and ISO respond to light. They do not define it. Run the audit
          first — then adjust your settings."
        </KeyFact>

        <H3>The Five Questions</H3>
        <P>
          The audit asks five questions, in this sequence, taking roughly one second each. The order
          matters — each answer narrows your options until only a handful of great positions remain.
        </P>

        <AuditStep num="1" title="DIRECTION — Where does the light come from?">
          Physically point at the primary source. Name it: "window at my two o&apos;clock,"
          "sun at the horizon behind her," "overhead fluorescent." Direction is the geometry of
          the scene — everything else follows from it.
        </AuditStep>
        <AuditStep num="2" title="CONTRAST — How dramatic are the shadows?">
          Look at the shadow side of your subject or a nearby surface. Is there a clean shadow?
          Is there detail in it, or is it pure black? The ratio between lit and shadowed areas
          determines the emotional temperature of your image.
        </AuditStep>
        <AuditStep num="3" title="COLOR — What is the light&apos;s temperature?">
          Find a neutral surface — white wall, gray sidewalk, your own hand in the light.
          Does it read orange-amber? Blue-cool? Neutral white? Color temperature shapes skin
          tones, mood, and your white balance decision.
        </AuditStep>
        <AuditStep num="4" title="QUALITY — Hard or soft?">
          Hold your hand up and observe the shadow it casts. Is the shadow edge sharp and
          defined (hard light) or gradual and feathered (soft light)? This single quality
          governs texture, flattery, and feel.
        </AuditStep>
        <AuditStep num="5" title="POSITION — Where should I stand?">
          Based on everything above: choose exactly where your subject will stand and where you
          will place your camera. This is the decision that integrates all four findings.
        </AuditStep>

        <Callout type="principle">
          These five questions are not analytical — they are observational. With practice, you run
          them simultaneously, as a single act of looking. The goal is to make this reflex
          automatic before it becomes intuitive.
        </Callout>

        <H3>Why the Order Matters</H3>
        <P>
          Direction is asked first because it establishes geometry. You cannot evaluate contrast
          without knowing where the shadows fall. You cannot evaluate color without knowing which
          source is primary. Quality is last among the observation questions because you already
          need direction and contrast to understand what soft or hard means in this scene.
        </P>
        <P>
          Position is always last because it is the only decision — the action that all four
          preceding observations feed. Beginners often jump to position immediately, choosing a
          spot they "like" before reading the light. This is why so many early portraits are
          technically correct but visually lifeless. The light tells you where to stand.
        </P>

        <Callout type="exercise" title="Day One Exercise">
          At your next location — any location — stand still for 60 seconds before raising your
          camera. Run all five questions out loud, in sequence. Say the answers. Write them down
          if needed. Repeat this at three different locations before shooting a single frame.
          You are building the reflex.
        </Callout>
      </Body>
      <SectionDivider />
    </>
  )
}

// ── CHAPTER TWO ─────────────────────────────────────────────────────────────

export function ChapterTwo() {
  return (
    <>
      <ChapterHeader
        number="02"
        title={`Direction —\nThe Clock Method`}
        subtitle="Find the light source in seconds using the photographer's clock system."
        imageUrl={IMG.direction}
      />
      <Body>
        <Objectives
          items={[
            "Identify any light source position using the clock method",
            "Understand the six key lighting zones and their visual effect",
            "Know which positions flatter and which challenge your subject",
          ]}
        />

        <P>
          Direction is the single most important variable to identify because it is the most
          structural. Before you can evaluate anything else, you need to know the geometry of the
          scene — where the light lives. Everything about shadow placement, catchlight position,
          and subject depth follows from this.
        </P>
        <P>
          The Clock Method makes direction immediate and teachable: imagine your subject standing
          in the center of a clock face. Your camera is always at 6 o&apos;clock — directly in
          front of the subject. The light source is somewhere on that clock. Your job is to
          find the hour.
        </P>

        <ClockDiagram />

        <H3>The Six Positions</H3>

        <div className="space-y-0">
          {[
            {
              pos: "12 o'clock — Backlight",
              color: "#C9A84C",
              body: "The source is directly behind your subject. This creates rim light — a thin halo separating the subject from background — but zero frontal fill. Requires a reflector or fill flash to avoid full silhouette. Use for: dramatic separation, ethereal portraiture, products with translucent materials, sunset silhouettes.",
            },
            {
              pos: "2–3 o'clock — Classic 45° Zone",
              color: "#6B9AE0",
              body: "The workhorse of portrait lighting. Light strikes the front of the face with a slight angle, casting a gentle shadow that creates dimensional modeling without heavy drama. Both 'short' and 'broad' lighting live in this zone depending on which way the face turns. Flatters virtually every subject.",
            },
            {
              pos: "3 o'clock — Side Light / Split Light",
              color: "#E09B6B",
              body: "Exactly 90° from camera. The face is cut precisely in half: one side blazes, the other falls to shadow. High drama, high contrast. Powerful for editorial and fashion. Less flattering for wide faces. When you want intensity, this is your position.",
            },
            {
              pos: "4:30–5 o'clock — Rembrandt Zone",
              color: "#A07FD6",
              body: "Named after the Dutch master. At this angle, a small inverted triangle of light appears on the shadowed cheekbone — created by the interaction of nose shadow and cheek highlight. This is arguably the most artistically prestigious natural lighting position. Finding the triangle is a discipline: one millimeter matters.",
            },
            {
              pos: "6 o'clock — Front Light",
              color: "#6BAE8B",
              body: "Light directly over your shoulder, pointing straight at your subject. Completely shadowless. Smooth, flat, even. Works for airy clean aesthetics and close-up beauty work where flatness reads as perfection. Fails when three-dimensional drama is the goal. Also causes subjects to squint directly into the source.",
            },
          ].map((item) => (
            <div
              key={item.pos}
              className="py-5 border-b border-[#141414] flex gap-4"
            >
              <div
                className="w-2 shrink-0 rounded-full mt-1"
                style={{ background: item.color, minHeight: "100%" }}
              />
              <div>
                <div
                  className="text-[12px] font-semibold mb-2"
                  style={{ color: item.color, fontFamily: "monospace" }}
                >
                  {item.pos}
                </div>
                <p className="text-[15px] text-[#8A8480] leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <H3>The Walk-Around Exercise</H3>
        <P>
          At your next shoot, before taking a single frame, physically walk your subject through
          all six positions while keeping them stationary and moving yourself around them. Observe
          how the shadows change with every step. Notice which positions flatter and which flatten.
          Notice where the catchlight appears in the eye — upper quadrant is ideal, below center
          looks lifeless.
        </P>
        <P>
          This exercise, done consciously at ten different locations, will permanently rewire how
          you see light. It takes about three minutes and produces more photographic growth than
          weeks of gear research.
        </P>

        <Callout type="principle">
          In natural light, you move to the light. The light does not move to you. Photographers
          who find great light are the ones who walk the most, not the ones who shoot from wherever
          they happen to be standing.
        </Callout>

        <Callout type="tip" title="Short Light vs. Broad Light">
          At the 45° zone (2–3 o&apos;clock), which side of the face you illuminate matters.
          "Short lighting" illuminates the narrow side of the face (the side turned slightly away
          from camera) — this slims the face. "Broad lighting" illuminates the wider, camera-facing
          side — this widens the face. For most portrait subjects, short light is more flattering.
        </Callout>
      </Body>
      <SectionDivider />
    </>
  )
}

