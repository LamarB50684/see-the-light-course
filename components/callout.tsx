import { ReactNode } from "react"

type CalloutType = "principle" | "tip" | "exercise" | "warning" | "technique"

interface CalloutProps {
  type: CalloutType
  title?: string
  children: ReactNode
}

const cfg: Record<CalloutType, { color: string; bg: string; label: string; icon: string }> = {
  principle: { color: "#C9A84C", bg: "rgba(201,168,76,0.06)", label: "KEY PRINCIPLE", icon: "◆" },
  tip: { color: "#6BAE8B", bg: "rgba(107,174,139,0.06)", label: "PRO TIP", icon: "◉" },
  exercise: { color: "#6B9AE0", bg: "rgba(107,154,224,0.06)", label: "PRACTICE EXERCISE", icon: "⬡" },
  warning: { color: "#E09B6B", bg: "rgba(224,155,107,0.06)", label: "WATCH OUT", icon: "▲" },
  technique: { color: "#A07FD6", bg: "rgba(160,127,214,0.06)", label: "TECHNIQUE", icon: "✦" },
}

export function Callout({ type, title, children }: CalloutProps) {
  const c = cfg[type]
  return (
    <div
      className="my-8 rounded-r-md pl-5 pr-5 py-5"
      style={{ borderLeft: `2px solid ${c.color}`, background: c.bg }}
    >
      <div
        className="text-[10px] tracking-[0.25em] uppercase mb-3 flex items-center gap-2 font-semibold"
        style={{ color: c.color, fontFamily: "monospace" }}
      >
        <span>{c.icon}</span>
        <span>{title || c.label}</span>
      </div>
      <div className="text-[#BDB8B0] leading-[1.8] text-[15px]">{children}</div>
    </div>
  )
}

export function KeyFact({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 p-5 rounded-lg border border-[#1E1E1E] bg-[#0E0E0E]">
      <p className="text-[17px] font-serif font-light italic text-[#E8C878] leading-relaxed">{children}</p>
    </div>
  )
}
