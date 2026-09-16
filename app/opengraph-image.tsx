import { ImageResponse } from "next/og";

export const alt = "Parth Panchal — Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f3f1eb",
        color: "#151515",
        padding: "64px",
        fontFamily: "Arial",
      }}
    >
      <div style={{ fontSize: 28, fontWeight: 700 }}>P@RTH</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 92, fontWeight: 800, letterSpacing: -6 }}>PARTH PANCHAL</div>
        <div style={{ marginTop: 24, fontSize: 30, color: "#5878b8" }}>Frontend Developer / React / Web</div>
      </div>
      <div style={{ fontSize: 20, letterSpacing: 2 }}>revamped-portfolio.netlify.app</div>
    </div>,
    size,
  );
}
