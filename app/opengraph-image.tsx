import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vector Global Logistics | Radar Logístico Global";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          padding: "75px 85px",
          background: "#003C6F",
          color: "#ffffff",
        }}
      >
        <img
          src="https://daily-news-vgl.vercel.app/Vector%20Logo%20White%20(1).png"
          width={350}
          height={108}
          style={{ objectFit: "contain", objectPosition: "left" }}
          alt="Vector Global Logistics"
        />
        <div style={{ display: "flex", background: "#FF3E32", height: 7, width: 96, marginTop: 45, marginBottom: 28 }} />
        <div style={{ fontSize: 66, fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.08 }}>
          Radar Logístico Global
        </div>
        <div style={{ fontSize: 27, marginTop: 24, color: "#DAEBF5" }}>
          Noticias clave e impacto en la cadena de suministro
        </div>
        <div style={{ position: "absolute", bottom: 45, right: 85, fontSize: 21, color: "#B0C2CB" }}>
          vectorgl.com
        </div>
      </div>
    ),
    size
  );
}
