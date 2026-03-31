"use client";

import { useState } from "react";
import { InfiniteCanvas } from "@/components/infinite-canvas";
import { LoadingScreen } from "@/components/loading-screen";
import { TransitionSVG } from "@/components/transition-svg";

const LOCAL_IMAGES = [
  { url: "/images/Abstract Composition in Red, Orange, Pink, and Black.png", width: 673, height: 1200 },
  { url: "/images/Dynamic Abstract Artwork.png", width: 904, height: 1200 },
  { url: "/images/Modern Architectural Design.png", width: 900, height: 1200 },
  { url: "/images/Modern Minimalist Office.png", width: 904, height: 1200 },
  { url: "/images/Tulips Against Blue Sky.png", width: 800, height: 1200 },
];

// Cycle through local images to fill the canvas
const MEDIA = Array.from({ length: 20 }, (_, i) => LOCAL_IMAGES[i % LOCAL_IMAGES.length]);

export default function Home() {
  const [loadingDone, setLoadingDone] = useState(false);
  const [svgDone, setSvgDone] = useState(false);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      {!loadingDone && <LoadingScreen onComplete={() => setLoadingDone(true)} />}
      {loadingDone && <TransitionSVG onComplete={() => setSvgDone(true)} />}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: svgDone ? 1 : 0,
          transition: "opacity 0.7s ease",
        }}
      >
        <InfiniteCanvas
          media={MEDIA}
          backgroundColor="#f8f8f8"
          fogColor="#f8f8f8"
          playIntro={svgDone}
        />
      </div>
    </div>
  );
}
