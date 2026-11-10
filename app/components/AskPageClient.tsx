"use client"
// Ask page panel (@yuktishaalaa/ask-page). Browser-only: imported inside
// useEffect, so server rendering never touches it. Options come from yuktai.config.ts.
import { useEffect } from "react"

type Props = {
  side?: "left" | "right"
  /** Lift the launcher above other floating buttons (px). */
  bottom?: number
  title?: string
  questions?: { text: string; path?: string }[]
  modes?: ("fast" | "balanced" | "best")[]
  lang?: "auto" | "te" | "en" | "hi"
  answerStyle?: "quote" | "short" | "detailed"
  suggestions?: "both" | "owner" | "dynamic" | "off"
  suggestionCount?: number
  allowPins?: boolean
  exclude?: string[]
}

export default function AskPageClient({ side = "right", bottom = 20, questions = [], lang, answerStyle, ...rest }: Props) {
  const key = JSON.stringify({ questions, lang, answerStyle, ...rest })
  useEffect(() => {
    let el: HTMLElement | undefined
    let cancelled = false
    import("@yuktishaalaa/ask-page").then(({ mountAskPage }) => {
      if (cancelled) return
      const { lang: l, answerStyle: a, ...o } = JSON.parse(key)
      // lang / answerStyle are a new visitor's starting settings; each visitor can change them
      const defaults = { ...(l ? { lang: l } : {}), ...(a ? { answerStyle: a } : {}) }
      el = mountAskPage({ side, modes: ["fast", "balanced"], ...o, defaults })
      el.style.setProperty("--ask-launcher-bottom", `${bottom}px`)
    })
    return () => {
      cancelled = true
      el?.remove()
    }
  }, [side, bottom, key])
  return null
}
