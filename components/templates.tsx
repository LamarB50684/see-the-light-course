"use client"

import { Printer, Download } from "lucide-react"

function printTemplates() {
  window.print()
}

export function TemplatesSection() {
  return (
    <div className="px-8 md:px-16 lg:px-20 py-20">
      {/* Header */}
      <div className="mb-16">
        <div
          className="text-[10px] tracking-[0.4em] uppercase text-[#C9A84C] mb-4"
          style={{ fontFamily: "monospace" }}
        >
          Chapter 08
        </div>
        <h2 className="font-serif text-5xl md:text-6xl font-light text-[#E8E2D9] mb-4">
          Templates &amp; Tools
        </h2>
        <p className="text-[#7A7470] text-lg max-w-xl mb-8">
          Printable field cards and worksheets to carry into every shoot until the
          system becomes automatic reflex.
        </p>
        <button
          onClick={printTemplates}
          className="no-print inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#C9A84C]/30 text-[#C9A84C] text-[13px] hover:bg-[#C9A84C]/10 transition-colors"
        >
          <Printer className="w-4 h-4" />
          Print All Templates
        </button>
      </div>

      {/* Template 1 — Field Evaluation Card */}
      <div className="print-card mb-16">
        <div
          className="text-[9px] tracking-[0.35em] uppercase text-[#4A4A4A] mb-4"
          style={{ fontFamily: "monospace" }}
        >
          Template 01 — Field Evaluation Card
        </div>
        <div
          className="rounded-2xl border border-[#C9A84C]/30 bg-[#0C0C0C] p-8 max-w-2xl"
          style={{ fontFamily: "monospace" }}
        >
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1E1E1E]">
            <div>
              <div className="text-[10px] tracking-[0.4em] uppercase text-[#C9A84C] mb-1">
                Field Evaluation Card
              </div>
              <div className="text-[18px] font-serif text-[#E8E2D9]">5-Second Light Audit</div>
            </div>
            <div className="text-2xl text-[#C9A84C]/40">☀</div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-[9px] text-[#3A3A3A] mb-1">DATE</div>
              <div className="h-6 border-b border-[#2A2A2A]" />
            </div>
            <div>
              <div className="text-[9px] text-[#3A3A3A] mb-1">LOCATION</div>
              <div className="h-6 border-b border-[#2A2A2A]" />
            </div>
          </div>

          <div className="space-y-5 mt-6">
            {[
              {
                num: "01", label: "DIRECTION",
                color: "#C9A84C",
                options: ["12 — Backlight", "2–3 — Classic 45°", "3 — Side/Split", "4:30 — Rembrandt", "6 — Front", "9 — Side (L)"],
              },
              {
                num: "02", label: "CONTRAST",
                color: "#6B9AE0",
                options: ["Zone 1 — Flat (1:1)", "Zone 2 — Gentle (2:1)", "Zone 3 — Dramatic (4:1)", "Zone 4 — High (8:1+)"],
              },
              {
                num: "03", label: "COLOR TEMPERATURE",
                color: "#E09B6B",
                options: ["Warm — below 4000K", "Neutral — 4000–5500K", "Cool — above 5500K", "Mixed — two sources"],
              },
              {
                num: "04", label: "QUALITY",
                color: "#6BAE8B",
                options: ["Hard — crisp edges", "Medium — some graduation", "Soft — feathered edges"],
              },
            ].map((item) => (
              <div key={item.num} className="pb-4 border-b border-[#181818]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-bold" style={{ color: item.color }}>
                    {item.num}
                  </span>
                  <span className="text-[10px] tracking-[0.2em] text-[#E8E2D9]">{item.label}</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {item.options.map((opt) => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                      <div className="w-3 h-3 rounded border border-[#2A2A2A] shrink-0 group-hover:border-[#C9A84C] transition-colors" />
                      <span className="text-[11px] text-[#4A4A4A] group-hover:text-[#6A6A6A] transition-colors">
                        {opt}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <div className="text-[10px] tracking-[0.2em] text-[#C9A84C] mb-3">05 — POSITION DECISION</div>
              <div className="space-y-3">
                {[
                  { label: "Subject stands at" },
                  { label: "Camera position" },
                  { label: "First pose direction" },
                  { label: "Notes" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-[9px] text-[#3A3A3A] mb-1">{item.label.toUpperCase()}</div>
                    <div className="h-6 border-b border-[#2A2A2A]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Template 2 — Scene Setup Worksheet */}
      <div className="print-card mb-16">
        <div
          className="text-[9px] tracking-[0.35em] uppercase text-[#4A4A4A] mb-4"
          style={{ fontFamily: "monospace" }}
        >
          Template 02 — Scene Setup Worksheet (Multiple Setups)
        </div>
        <div className="rounded-2xl border border-[#1E1E1E] bg-[#0C0C0C] p-8 max-w-3xl">
          <div className="mb-6 pb-4 border-b border-[#1E1E1E]">
            <div className="text-[18px] font-serif text-[#E8E2D9]">Scene Setup Log</div>
            <div className="text-[12px] text-[#4A4A4A] mt-1" style={{ fontFamily: "monospace" }}>
              Location: _________________________ | Date: ___________
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[11px]" style={{ fontFamily: "monospace" }}>
              <thead>
                <tr>
                  {["Setup", "Direction", "Contrast Zone", "Color °K", "Quality", "Subject Position", "Camera Position", "Notes"].map((h) => (
                    <th
                      key={h}
                      className="text-left py-2 pr-4 text-[#3A3A3A] border-b border-[#1A1A1A] whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 6 }, (_, i) => (
                  <tr key={i} className="border-b border-[#141414]">
                    <td className="py-3 pr-4 text-[#C9A84C]">#{String(i + 1).padStart(2, "0")}</td>
                    {Array.from({ length: 7 }, (_, j) => (
                      <td key={j} className="py-3 pr-4">
                        <div className="h-4 border-b border-[#1E1E1E] w-16 md:w-20" />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Template 3 — Quick Reference Sheet */}
      <div className="print-card mb-16">
        <div
          className="text-[9px] tracking-[0.35em] uppercase text-[#4A4A4A] mb-4"
          style={{ fontFamily: "monospace" }}
        >
          Template 03 — Quick Reference Sheet (Laminate &amp; Carry)
        </div>
        <div
          className="rounded-2xl border border-[#1E1E1E] bg-[#0C0C0C] p-8 max-w-3xl"
          style={{ fontFamily: "monospace" }}
        >
          <div className="text-[18px] font-serif text-[#E8E2D9] mb-6 pb-4 border-b border-[#1E1E1E]">
            Photographer's Light Cheat Sheet
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-[9px] tracking-[0.3em] uppercase text-[#C9A84C] mb-3">Clock Positions</div>
              <div className="space-y-1.5 text-[11px]">
                {[
                  ["12:00", "BACKLIGHT — Rim/Separation"],
                  ["2–3:00", "45° ZONE — Classic, flattering"],
                  ["3:00", "SIDE LIGHT — Split, dramatic"],
                  ["4:30", "REMBRANDT — Triangle on cheek"],
                  ["6:00", "FRONT — Flat, even, camera direction"],
                  ["9:00", "SIDE LIGHT — Other side"],
                ].map(([pos, desc]) => (
                  <div key={pos} className="flex gap-3">
                    <span className="text-[#C9A84C] w-12 shrink-0">{pos}</span>
                    <span className="text-[#5A5550]">{desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[9px] tracking-[0.3em] uppercase text-[#6B9AE0] mb-3">Contrast Zones</div>
              <div className="space-y-1.5 text-[11px]">
                {[
                  ["1:1", "Flat — no shadows, airy"],
                  ["2:1", "Gentle — most portraits, flattering"],
                  ["4:1", "Dramatic — editorial, editorial"],
                  ["8:1+", "High Drama — fine art, fashion"],
                ].map(([ratio, desc]) => (
                  <div key={ratio} className="flex gap-3">
                    <span className="text-[#6B9AE0] w-12 shrink-0">{ratio}</span>
                    <span className="text-[#5A5550]">{desc}</span>
                  </div>
                ))}
              </div>

              <div className="text-[9px] tracking-[0.3em] uppercase text-[#E09B6B] mb-3 mt-5">Color Windows</div>
              <div className="space-y-1.5 text-[11px]">
                {[
                  ["2500–3500K", "Golden Hour — warm, directional"],
                  ["5000–5500K", "Neutral — daylight, flash"],
                  ["7000K+", "Blue Hour — cool, flat, cinematic"],
                ].map(([k, desc]) => (
                  <div key={k} className="flex gap-3">
                    <span className="text-[#E09B6B] w-20 shrink-0">{k}</span>
                    <span className="text-[#5A5550]">{desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#1A1A1A]">
            <div className="text-[9px] tracking-[0.3em] uppercase text-[#6BAE8B] mb-3">5-Second Audit Order</div>
            <div className="flex gap-0 text-[11px]">
              {["01 DIRECTION", "→ 02 CONTRAST", "→ 03 COLOR", "→ 04 QUALITY", "→ 05 POSITION"].map((step) => (
                <div key={step} className="text-[#4A4A4A] whitespace-nowrap mr-1">
                  <span className={step.startsWith("→") ? "text-[#2A2A2A]" : "text-[#6BAE8B]"}>{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-[#1A1A1A]">
            <div className="text-[9px] tracking-[0.3em] uppercase text-[#A07FD6] mb-3">Scene Arrival Protocol</div>
            <div className="grid grid-cols-5 gap-1 text-[10px]">
              {[
                ["01", "Survey 30s"],
                ["02", "Shadow Test 15s"],
                ["03", "Color Read 10s"],
                ["04", "Position Walk 60s"],
                ["05", "Lock Triangle 30s"],
              ].map(([n, label]) => (
                <div key={n} className="text-center">
                  <div className="text-[#A07FD6] font-bold">{n}</div>
                  <div className="text-[#3A3A3A] leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Closing */}
      <div className="max-w-2xl mt-20 py-16 border-t border-[#141414]">
        <div className="text-[10px] tracking-[0.4em] uppercase text-[#C9A84C] mb-6" style={{ fontFamily: "monospace" }}>
          The System, Complete
        </div>
        <p className="font-serif text-3xl md:text-4xl font-light text-[#E8E2D9] leading-[1.3] mb-6">
          Light is not something that happens to you. It is something you read, choose, and
          respond to — every time.
        </p>
        <p className="text-[15px] text-[#5A5550] leading-relaxed">
          Run the five audit questions at your next location. Then the one after that. By the
          twentieth time, the checklist will be invisible — and the images will be better than
          anything you shot before you learned to see the light.
        </p>
      </div>
    </div>
  )
}
