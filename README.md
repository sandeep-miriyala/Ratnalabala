# రత్నాలబాల – జ్ఞానమాల

**తెలుగు సాహిత్యానికి ఒక ఇల్లు: చదవండి • వినండి • నేర్చుకోండి • సృష్టించండి**

🔗 https://ratnalabala.vercel.app

మా తాతగారు మిరియాల వెంకటరత్నం గారి 34 పద్యాలతో మొదలైన కుటుంబ ప్రయత్నం. ఇప్పుడు 1,280+ పద్యాలు, 130+ కథలు, వ్యాకరణం, భగవద్గీత, పిల్లల అక్షరాల వరకు పెరిగింది. పూర్తిగా ఉచితం. పెద్దవాళ్ళ కోసం పెద్ద అక్షరాలు, సులభమైన బటన్లు, స్పష్టమైన రంగులు (WCAG AAA).

## ఏముంది
- **సాహిత్యం:** పద్యాలమాల (34) · మిరా పద్యాలు · శతకాలమాల (10 శతకాలు, 1037 పద్యాలు) · పరాభవమాల (108) · కథామాల (130) · స్మృతిమాల · గీతామాల · వాచకమాల (వార్తలు)
- **నేర్చుకోవడం:** అక్షరమాల · గుణింతమాల · పదాలమాల (145) · సామెతలమాల · సంధిమాల (26) · సమాసమాల
- **సృష్టించడం:** ఖతిమాల (పత్రం, పోస్టర్, స్లైడ్ షో → PDF / Word / PowerPoint) · చిత్రమాల · స్వరమాల · లిపిమాల (తెలుగు OCR)
- **అడగడం, వెతకడం:** భావాలమాల (అర్థం ద్వారా పద్యం వెతకడం) · PDF ప్రశ్నోత్తరి (సొంత RAG, పేజీ సంఖ్యతో జవాబు) · నిర్ణయాత్మక మాల · విదురమాల (రహస్య భాష)
- **ప్రతి పద్యానికి:** వినడం (మగ / స్త్రీ స్వరం), పోస్టర్, MP4 వీడియో
- **సైట్ అంతటా:** ఫోన్‌లో app లాగా (offline కూడా) · 50+ తెలుగు ఫాంట్లు · dark mode · ♥ ఇష్టమైనవి · యుక్తి AI పట్టిక (వెతకడం, PDF / Excel)

## సాంకేతికత
**[YuktAI](https://github.com/sandeep-miriyala/yuktai) framework** (`@yuktishaalaa/yuktai` 5.6, `yuktai` CLI) · **YuktAI UI** (MUI లేదు) · Next.js 16 · React · TypeScript · PWA (Serwist) · Rust / WebAssembly · Tesseract OCR · Python (Vercel) · Neon PostgreSQL + pgvector · LangGraph · BAML · Groq · WebMCP

## YuktAI + Vercel: full-stack use case
రత్నాలబాల YuktAI తో Vercel లో **పూర్తి server app** గా నడుస్తుంది: పేజీలతో పాటు 21 API routes, Python API (`api/main.py`), Postgres, Groq, TTS.

| ఏమి | ఎక్కడ |
|---|---|
| YuktAI settings ఒకే చోట: ♿ widget, 🤖 agent, 🛠 QA tools, తెలుగు voice, Rust engine, Ask page, WebMCP | `yuktai.config.ts` |
| Run / build | `npm run dev` → `yuktai dev` · `npm run build` → `baml-cli generate && yuktai build --webpack` |
| UI components | **YuktAI UI** మాత్రమే (`@yuktishaalaa/yuktai/ui`): buttons, forms, dialogs, tabs, menus… 91 files, MUI / emotion పూర్తిగా తీసేశాం. Styles server HTML తోనే వస్తాయి (`app/components/YuktaiStyleRegistry.tsx`) |
| Icons | YuktAI icons మాత్రమే (`lib/yuktai-icons.tsx`) |
| Data grid | YuktaiGrid (Rust వెతుకులాట, తెలుగు AI సహాయకుడు, WebMCP) |
| Vercel | `vercel.json`: Next.js server mode + Python function. Environment variables Vercel Settings లో (code లో కాదు) |

## గోప్యత
మీ ఫాంట్లు, మీరు రాసినవి, ఫోటోలు, ఇష్టమైనవి: మీ పరికరంలోనే. PDF ఫైల్ సేవ్ కాదు; దాని పాఠ్యం 24 గంటల్లో తొలగిపోతుంది. సందర్శనల సంఖ్య మాత్రమే లెక్కిస్తాం, ఎవరు అనేది కాదు.

## కంప్యూటర్‌లో నడపడం
Node.js 24 → `npm ci` → `.env.local` లో environment variables (API keys ను code లో రాయవద్దు) → `npm run dev`

---
తప్పులు, సూచనలు తప్పకుండా చెప్పండి. **— సందీప్ మిరియాల** · యుక్తిశాల AI
