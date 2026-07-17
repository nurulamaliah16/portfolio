import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Monogram favicon: cream "N" on brand-green rounded square.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2c6b5e",
          color: "#fdfaf3",
          fontSize: 44,
          fontWeight: 800,
          borderRadius: 14,
        }}
      >
        n
      </div>
    ),
    size
  );
}
