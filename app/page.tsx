"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import {
  ChapterOne, ChapterTwo, ChapterThree,
  ChapterFour, ChapterFive, ChapterSix, ChapterSeven,
} from "@/components/course-content"
import { TemplatesSection } from "@/components/templates"

const HERO_IMG = "https://galaxy-prod.tlcdn.com/gen/user_31iPhAyW4gI33CFp2iTeWeTunIo/c9ac2ca8-4f79-4d84-bb22-3ddd2616d052.jpeg"

const CHAPTERS = [
  ChapterOne, ChapterTwo, ChapterThree,
  ChapterFour, ChapterFive, ChapterSix, ChapterSeven,
]

export default function CoursePage() {
  const [activeSection, setActiveSection] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [heroVisible, setHeroVisible] = useState(true)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const heroRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const heroObs = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.05 }
    )
    if (heroRef.current) heroObs.observe(heroRef.current)
    return () => heroObs.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.indexOf(entry.target as HTMLElement)
            if (idx !== -1) setActiveSection(idx)
          }
        })
      },
      { threshold: 0.15, rootMargin: "-80px 0px -50% 0px" }
    )
    sectionRefs.current.forEach((ref) => { if (ref) observer.observe(ref) })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" })
    setSidebarOpen(false)
  }

  const scrollToCourse = () => {
    sectionRefs.current[0]?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="min-h-screen bg-[#080808]">
      {/* ── FLOATING TOP BAR (appears after hero) ── */}
      <div
        className={`no-print fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          heroVisible ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div
          className="flex items-center justify-between px-6 h-12 border-b border-[#141414]"
          style={{ background: "rgba(8,8,8,0.96)", backdropFilter: "blur(12px)" }}
        >
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden w-8 h-8 flex items-center justify-center text-[#5A5550] hover:text-[#C9A84C] transition-colors"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-4 h-4" />
            </button>
            <span
              className="text-[11px] tracking-[0.2em] text-[#C9A84C] uppercase hidden sm:block"
              style={{ fontFamily: "monospace" }}
            >
              See the Light
            </span>
          </div>
          {/* Progress bar */}
          <div className="flex-1 mx-6 h-[2px] bg-[#141414] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#C9A84C] rounded-full transition-all duration-500"
              style={{ width: `${Math.round(((activeSection + 1) / 8) * 100)}%` }}
            />
          </div>
          <div
            className="text-[10px] text-[#3A3A3A] shrink-0"
            style={{ fontFamily: "monospace" }}
          >
            {activeSection + 1} / 8
          </div>
        </div>
      </div>

      {/* ── MOBILE SIDEBAR OVERLAY ── */}
      {sidebarOpen && (
        <div className="no-print fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-72 z-10">
            <div className="absolute top-4 right-4 z-20">
              <button
                onClick={() => setSidebarOpen(false)}
                className="w-8 h-8 flex items-center justify-center text-[#5A5550] hover:text-[#E8E2D9]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <Sidebar activeSection={activeSection} onNavigate={scrollTo} onClose={() => setSidebarOpen(false)} />
          </div>
        </div>
      )}

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      >
        <Image
          src={HERO_IMG}
          alt="Photographer in golden hour light"
          fill
          className="object-cover"
          style={{ opacity: 0.55 }}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/60 to-transparent" />

        {/* Hero content */}
        <div className="relative z-10 px-8 md:px-16 pb-24 md:pb-32 max-w-3xl">
          <div
            className="text-[10px] tracking-[0.5em] uppercase text-[#C9A84C] mb-8"
            style={{ fontFamily: "monospace" }}
          >
            A Photographer&apos;s Complete Guide
          </div>

          <h1
            className="font-serif text-[72px] md:text-[100px] lg:text-[120px] leading-[0.88] font-light text-[#E8E2D9] mb-8"
          >
            See<br />
            <span className="italic text-[#C9A84C]">the</span><br />
            Light
          </h1>

          <p className="text-[17px] md:text-[19px] text-[#7A7470] font-light leading-[1.7] max-w-lg mb-12">
            A step-by-step system for reading light direction, contrast, color, and quality —
            then choosing position and pose from that reading alone.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToCourse}
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-[14px] font-medium text-[#080808] bg-[#C9A84C] hover:bg-[#E8C878] transition-colors"
            >
              Begin the Course
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="text-[13px] text-[#3A3A3A]" style={{ fontFamily: "monospace" }}>
              7 Chapters · Field Templates · SVG Diagrams
            </div>
          </div>
        </div>

        {/* Chapter list preview */}
        <div className="relative z-10 px-8 md:px-16 pb-8">
          <div className="flex flex-wrap gap-4">
            {["Direction", "Contrast", "Color", "Quality", "Position", "Protocol"].map((label) => (
              <div
                key={label}
                className="text-[10px] font-mono tracking-wider text-[#2A2A2A] px-3 py-1.5 rounded-full border border-[#1A1A1A]"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSE READER ── */}
      <div className="flex relative">
        {/* Desktop Sidebar */}
        <aside className="no-print hidden lg:block sticky top-0 h-screen overflow-y-auto shrink-0 w-[272px]">
          <Sidebar activeSection={activeSection} onNavigate={scrollTo} />
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {CHAPTERS.map((Chapter, i) => (
            <section
              key={i}
              ref={(el) => { sectionRefs.current[i] = el }}
              id={`chapter-${i + 1}`}
            >
              <Chapter />
            </section>
          ))}
          <section
            ref={(el) => { sectionRefs.current[7] = el }}
            id="templates"
          >
            <TemplatesSection />
          </section>
        </main>
      </div>
    </div>
  )
}
