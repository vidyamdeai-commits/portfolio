import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/** Share-card size recommended by LinkedIn, Facebook, WhatsApp and X. */
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/**
 * Branded preview card used by every page's opengraph-image.tsx:
 * navy background, gold accent, the emblem, a page eyebrow, title and one key fact.
 */
export async function ogImage({ eyebrow, title, fact }: { eyebrow: string; title: string; fact: string }) {
  const logo = await readFile(join(process.cwd(), "public/brand/logo-mark.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0f172a",
          color: "#ffffff",
          padding: "64px 72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -120,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: "#d97706",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", background: "#ffffff", borderRadius: 24, padding: 10 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} width={72} height={74} alt="" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 40, fontWeight: 700, display: "flex" }}>
              Vidyam de<span style={{ color: "#fbbf24" }}>Ai</span>
            </div>
            <div style={{ fontSize: 18, letterSpacing: 4, color: "#cbd5e1" }}>KNOWLEDGE · INTELLIGENCE · FUTURE</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 940 }}>
          <div style={{ fontSize: 24, letterSpacing: 3, color: "#fbbf24", textTransform: "uppercase" }}>{eyebrow}</div>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.08, marginTop: 16 }}>{title}</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              background: "#d97706",
              color: "#0f172a",
              fontSize: 26,
              fontWeight: 700,
              padding: "14px 28px",
              borderRadius: 9999,
            }}
          >
            {fact}
          </div>
          <div style={{ fontSize: 24, color: "#cbd5e1" }}>www.vidyamdeai.com</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
