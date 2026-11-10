// YuktAI settings for Ratnalabala: one place for the YuktAI framework layer.
// Pages, API routes, the Python API (api/main.py), Postgres, Groq and TTS are unchanged;
// this file only decides how YuktAI wraps them (widget, tools, voice, engine, Ask page).
//
// Hosting: Vercel, full stack. `yuktai build` runs Next.js in server mode (no static export),
// so /api routes and the Python function keep working. See vercel.json.
//
// Change a value, push, and Vercel redeploys. Nothing else needs editing.

type Side = "left" | "right";
type ToolsTab = "copilot" | "qa" | "forms" | "design" | "ask" | "voice";
type AskMode = "fast" | "balanced" | "best";
type ColorBlindMode = "none" | "deuteranopia" | "protanopia" | "tritanopia" | "achromatopsia";

const config = {
  name: "ratnalabala",
  title: "రత్నాలబాల",
  description: "తెలుగు సాహిత్యానికి ఒక ఇల్లు: చదవండి, వినండి, నేర్చుకోండి, సృష్టించండి.",
  url: "https://ratnalabala.vercel.app",

  // Hosting model, for readers of this file: "vercel-fullstack" = Next.js server + Python functions
  host: "vercel-fullstack" as const,

  /* ── Which YuktAI buttons show ─────────────────────────────────────────── */
  features: {
    launcher: true, // ✨ one button that shows / hides all the tools below
    accessibility: true, // ♿ contrast, colours, colour blindness, text size, dyslexia font, reduced motion
    agent: true, // 🤖 AI agent (Chrome built-in AI, runs in the browser)
    pageTools: true, // 🛠 Copilot, QA report (WCAG checks), Forms, Design, Ask, Voice
    rag: false, // 💬 extra page-search chat button (Ask page below does the same job, better)
    vibeCoder: false, // ⚡ developer code generator: keep off on the public site
    ask: true, // "ఈ పేజీని అడగండి" panel (Ctrl + K)
    webmcp: true, // browser AI agents can use the "searchBhavalamala" tool (lib/webmcp.ts)
  },

  /* ── Where and how the tools open ──────────────────────────────────────── */
  // "auto" = the corner opposite the సహాయం button (moves when the reader moves that button)
  position: "auto" as "auto" | Side,
  pageToolsTab: "copilot" as ToolsTab, // tab 🛠 opens on
  voiceLang: "te-IN", // voice commands and the grid assistant speak Telugu
  engine: "rust" as "rust" | "ts", // Rust → WebAssembly search, TypeScript fallback

  /* ── Accessibility: switched on for every reader from the start ─────────── */
  // Leave a line commented to keep the reader's own choice (and how the site looks today).
  a11y: {
    // highContrast: true,
    // reduceMotion: true,
    // largeTargets: true,
    // dyslexiaFont: true,
    // keyboardHints: true,
    // showSkipLinks: true,
    // colorBlindMode: "deuteranopia" as ColorBlindMode,
  } as Partial<{
    highContrast: boolean;
    reduceMotion: boolean;
    largeTargets: boolean;
    dyslexiaFont: boolean;
    keyboardHints: boolean;
    showSkipLinks: boolean;
    colorBlindMode: ColorBlindMode;
  }>,

  /* ── "ఈ పేజీని అడగండి" (Ask page) ──────────────────────────────────────── */
  ask: {
    title: "ఈ పేజీని అడగండి",
    // fast = keyword search, nothing to download · balanced = meaning search (one-time ~118 MB model)
    // best = writes answers with on-device AI (Chrome AI or WebLLM)
    modes: ["fast", "balanced"] as AskMode[],
    lang: "te" as "auto" | "te" | "en" | "hi", // answer language
    answerStyle: "short" as "quote" | "short" | "detailed",
    suggestions: "both" as "both" | "owner" | "dynamic" | "off", // your questions + automatic ones
    suggestionCount: 4, // 3 to 6
    allowPins: true, // readers may pin their own questions
    exclude: ["nav", "footer", "[aria-label='అక్షరాల సెట్టింగ్‌లు']"], // parts never read
    bottom: 96, // px above the bottom edge, so it sits over the ✨ button
    // Fixed questions (max 3 per page). path "/poems/*" = only on poem pages
    questions: [
      { text: "ఈ పేజీ సారాంశం" },
      { text: "ఈ పద్యం భావం ఏమిటి?", path: "/poems/*" },
      { text: "ఈ శతకం గురించి చెప్పండి", path: "/shatakamu*" },
    ],
  },
};

export default config;
