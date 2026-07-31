import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

// Iconita: monograma "IS" pe fundal petrol, accent cupru — generata la build.
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
          background: "#071a1c",
          color: "#e0a35e",
          fontSize: 260,
          fontWeight: 700,
          fontFamily: "Georgia, serif",
          letterSpacing: -8,
        }}
      >
        IS
      </div>
    ),
    { ...size }
  );
}
