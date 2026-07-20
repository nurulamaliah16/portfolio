import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";
import { SITE_TITLE, JOB_TITLE } from "./data";

export const alt = SITE_TITLE;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const portrait = await readFile(join(process.cwd(), "public/images/gf.png"));
  const portraitSrc = `data:image/png;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#fdfaf3",
          color: "#1f3d38",
          fontFamily: "sans-serif",
        }}
      >
        {/* Left: copy */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px 56px 72px 72px",
          }}
        >
          <div style={{ display: "flex", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
            {["Governance Research", "Social Media", "Content"].map((t, i) => (
              <span
                key={t}
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  padding: "10px 18px",
                  borderRadius: 999,
                  background: ["#e4f0ec", "#fdf2e0", "#fbe4de"][i],
                  color: ["#2c6b5e", "#b07d22", "#e85d3d"][i],
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: -2,
              lineHeight: 1.05,
              marginBottom: 20,
            }}
          >
            Nurul Amaliah
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 600,
              color: "#2c6b5e",
              lineHeight: 1.3,
              marginBottom: 18,
              maxWidth: 560,
            }}
          >
            {JOB_TITLE}
          </div>
          <div style={{ fontSize: 24, color: "#43544f", lineHeight: 1.45, maxWidth: 560 }}>
            Political Science graduate &amp; Master&apos;s student in Politics and Government.
          </div>
          <div style={{ display: "flex", marginTop: 40 }}>
            <span
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: "#fdfaf3",
                background: "#2c6b5e",
                padding: "12px 26px",
                borderRadius: 999,
              }}
            >
              nurulamaliah.vercel.app
            </span>
          </div>
        </div>

        {/* Right: portrait with brand blob behind */}
        <div
          style={{
            width: 480,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            background: "#e4f0ec",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 360,
              height: 420,
              borderRadius: 40,
              background: "#2c6b5e",
              top: 80,
              left: 60,
              transform: "rotate(-6deg)",
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={portraitSrc}
            width={420}
            height={580}
            style={{
              objectFit: "cover",
              objectPosition: "50% 100%",
              position: "relative",
              borderRadius: "36px 36px 0 0",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
