"use client"
// Ask page panel (@yuktishaalaa/ask-page). Browser-only: imported inside
// useEffect, so server rendering never touches it.
import { useEffect } from "react"

type Props = {
  side?: "left" | "right"
  /** Lift the launcher above other floating buttons (px). */
  bottom?: number
  title?: string
  questions?: { text: string; path?: string }[]
}

export default function AskPageClient({ side = "right", bottom = 20, title, questions = [] }: Props) {
  const key = JSON.stringify(questions)
  useEffect(() => {
    let el: HTMLElement | undefined
    let cancelled = false
    import("@yuktishaalaa/ask-page").then(({ mountAskPage }) => {
      if (cancelled) return
      el = mountAskPage({ side, title, questions: JSON.parse(key), modes: ["fast", "balanced"] })
      el.style.setProperty("--ask-launcher-bottom", `${bottom}px`)
    })
    return () => {
      cancelled = true
      el?.remove()
    }
  }, [side, bottom, title, key])
  return null
}
