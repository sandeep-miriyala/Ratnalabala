"use client";

/* ═══════════════════════════════════════════
   YuktAI UI styles in the server HTML

   YuktAI UI components (@yuktishaalaa/yuktai/ui) write their CSS while they
   render. On the server this sends that CSS with the HTML, so the first
   paint already looks right (no flash of unstyled buttons). In the browser
   the same rules are recognised and not written twice.
═══════════════════════════════════════════ */

import { useRef } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { getUiStyles } from "@yuktishaalaa/yuktai/ui";

export default function YuktaiStyleRegistry({ children }: { children: React.ReactNode }) {
  const sent = useRef(new Set<string>());
  useServerInsertedHTML(() => {
    const { css, keys } = getUiStyles(sent.current);
    if (!css) return null;
    return <style data-yuktai-ui="" data-keys={keys.join(" ")} dangerouslySetInnerHTML={{ __html: css }} />;
  });
  return <>{children}</>;
}
