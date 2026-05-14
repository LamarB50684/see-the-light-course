"use client"

import { Eye, Sun, Activity, Palette, Image, Users, CheckCircle, FileText, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"

const chapters = [
  { id: 0, num: "01", title: "The 5-Second Audit", short: "The Audit System", icon: Eye },
  { id: 1, num: "02", title: "Direction & The Clock", short: "Direction", icon: Sun },
  { id: 2, num: "03", title: "Contrast & Ratios", short: "Contrast", icon: Activity },
  { id: 3, num: "04", title: "Color Temperature", short: "Color", icon: Palette },
  { id: 4, num: "05", title: "Hard vs. Soft Quality", short: "Quality", icon: Image },
  { id: 5, num: "06", title: "Position & Pose", short: "Position & Pose", icon: Users },
  { id: 6, num: "07", title: "Scene Arrival Protocol", short: "Protocol", icon: CheckCircle },
  { id: 7, num: "08", title: "Templates & Tools", short: "Templates", icon: FileText },
]

interface SidebarProps {
  activeSection: number
  onNavigate: (index: number) => void
  onClose?: () => void
}

export function Sidebar({ activeSection, onNavigate, onClose }: SidebarProps) {
  return (
    <div className="h-full flex flex-col bg-[#060606] border-r border-[#141414]">
      {/* Logo */}
      <div className="px-6 pt-8 pb-6 border-b border-[#141414]">
        <div className="flex items-center gap-3 mb-1">
          <BookOpen className="w-4 h-4 text-[#C9A84C]" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C]" style={{ fontFamily: "monospace" }}>
            Course Guide
          </span>
        </div>
        <h2 className="font-serif text-xl font-light text-[#E8E2D9] leading-tight mt-2">
          See the<br />
          <span className="text-[#C9A84C]">Light</span>
        </h2>
        <p className="text-[11px] text-[#3A3A3A] mt-2 leading-relaxed">
          A complete photographer's light evaluation system
        </p>
      </div>

      {/* Chapter list */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <div className="text-[9px] tracking-[0.35em] uppercase text-[#2A2A2A] px-3 mb-3"
          style={{ fontFamily: "monospace" }}>
          Chapters
        </div>
        {chapters.map((ch) => {
          const Icon = ch.icon
          const isActive = activeSection === ch.id
          return (
            <button
              key={ch.id}
              onClick={() => { onNavigate(ch.id); onClose?.() }}
              className={cn(
                "w-full text-left flex items-start gap-3 px-3 py-3 rounded-lg transition-all duration-200 group mb-0.5",
                isActive
                  ? "bg-[rgba(201,168,76,0.08)] text-[#E8E2D9]"
                  : "hover:bg-[#0E0E0E] text-[#5A5550] hover:text-[#8A8178]"
              )}
            >
              <div className={cn(
                "mt-0.5 w-5 h-5 rounded flex items-center justify-center shrink-0 transition-colors",
                isActive ? "text-[#C9A84C]" : "text-[#3A3A3A] group-hover:text-[#5A5550]"
              )}>
                <Icon className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className={cn(
                  "text-[10px] font-mono transition-colors",
                  isActive ? "text-[#C9A84C]" : "text-[#2A2A2A] group-hover:text-[#3A3A3A]"
                )}>
                  {ch.num}
                </div>
                <div className={cn(
                  "text-[12px] leading-tight mt-0.5 transition-colors",
                  isActive ? "text-[#E8E2D9] font-medium" : "text-[#4A4A4A] group-hover:text-[#6A6A6A]"
                )}>
                  {ch.short}
                </div>
              </div>
              {isActive && (
                <div className="w-1 h-1 rounded-full bg-[#C9A84C] mt-2 shrink-0" />
              )}
            </button>
          )
        })}
      </nav>

      {/* Progress */}
      <div className="px-6 py-5 border-t border-[#141414]">
        <div className="text-[9px] tracking-[0.25em] uppercase text-[#2A2A2A] mb-2" style={{ fontFamily: "monospace" }}>
          Progress
        </div>
        <div className="h-0.5 bg-[#141414] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#C9A84C] rounded-full transition-all duration-500"
            style={{ width: `${Math.round(((activeSection + 1) / 8) * 100)}%` }}
          />
        </div>
        <div className="text-[10px] text-[#3A3A3A] mt-2">
          {activeSection + 1} / 8 chapters
        </div>
      </div>
    </div>
  )
}
