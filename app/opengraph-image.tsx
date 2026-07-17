import { ImageResponse } from "next/og";

export const alt = "Nurul Amaliah — Governance Research & Social Media Strategist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// ponytail: system font (no custom-font fetch). Add Fredoka via fetch if brand match matters.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "#fdfaf3",
          color: "#1f3d38",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", gap: 16, marginBottom: 36 }}>
          {["Governance Research", "Social Media Strategy", "Content Creation"].map((t, i) => (
            <span
              key={t}
              style={{
                fontSize: 26,
                fontWeight: 700,
                padding: "12px 24px",
                borderRadius: 999,
                background: ["#e4f0ec", "#fdf2e0", "#fbe4de"][i],
                color: ["#2c6b5e", "#b07d22", "#e85d3d"][i],
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <div style={{ fontSize: 92, fontWeight: 800, letterSpacing: -2, lineHeight: 1.05 }}>
          Nurul Amaliah
        </div>
        <div style={{ fontSize: 38, color: "#43544f", marginTop: 24, maxWidth: 900 }}>
          Political Science graduate & Master&apos;s student in Politics and Government.
        </div>
        <div style={{ display: "flex", marginTop: "auto" }}>
          <span
            style={{
              fontSize: 30,
              fontWeight: 700,
              color: "#fdfaf3",
              background: "#2c6b5e",
              padding: "14px 32px",
              borderRadius: 999,
            }}
          >
            nurulamaliah.vercel.app
          </span>
        </div>
      </div>
    ),
    size
  );
}
