// YuktAI settings for Ratnalabala: one place for the YuktAI framework layer.
// Pages, API routes, the Python API (api/main.py), Postgres, Groq and TTS are unchanged;
// this file only decides how YuktAI wraps them (widget, tools, voice, engine, Ask page).
//
// Hosting: Vercel, full stack. `yuktai build` runs Next.js in server mode (no static export),
// so /api routes and the Python function keep working. See vercel.json.
const config = {
  name: "ratnalabala",
  title: "రత్నాలబాల",
  description: "తెలుగు సాహిత్యానికి ఒక ఇల్లు: చదవండి, వినండి, నేర్చుకోండి, సృష్టించండి.",
  url: "https://ratnalabala.vercel.app",

  // Hosting model, for readers of this file: "vercel-fullstack" = Next.js server + Python functions
  host: "vercel-fullstack" as const,

  features: {
    accessibility: true, // ♿ widget: contrast, text size, dyslexia font, reduced motion
    agent: true, // 🤖 YuktAI agent panel
    pageTools: true, // 🛠 QA report: WCAG checks, form and design review
    launcher: true, // one YuktAI button that opens the tools
    ask: false, // "Ask this page" panel (Ctrl + K). Off, as it was before the move to YuktAI.
    webmcp: true, // browser AI agents can use the "searchBhavalamala" tool (lib/webmcp.ts)
  },

  // The YuktAI tools sit in the corner opposite the సహాయం button (RootClientLayout)
  voiceLang: "te-IN", // voice commands and the grid assistant speak Telugu
  engine: "rust" as "rust" | "ts", // Rust → WebAssembly search, TypeScript fallback

  ask: {
    title: "ఈ పేజీని అడగండి",
    questions: [{ text: "ఈ పేజీ సారాంశం" }, { text: "ఈ పద్యం భావం ఏమిటి?", path: "/poems/*" }],
  },
};

export default config;
