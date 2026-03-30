"use client";

import { useState } from "react";
import { InfiniteCanvas } from "@/components/infinite-canvas";
import { LoadingScreen } from "@/components/loading-screen";
import { TransitionSVG } from "@/components/transition-svg";

const MEDIA = [
  { url: "https://picsum.photos/seed/a1/1200/800", width: 1200, height: 800 },
  { url: "https://picsum.photos/seed/a2/800/1200", width: 800, height: 1200 },
  { url: "https://picsum.photos/seed/a3/1000/1000", width: 1000, height: 1000 },
  { url: "https://picsum.photos/seed/a4/1400/900", width: 1400, height: 900 },
  { url: "https://picsum.photos/seed/a5/900/1400", width: 900, height: 1400 },
  { url: "https://picsum.photos/seed/a6/1100/750", width: 1100, height: 750 },
  { url: "https://picsum.photos/seed/a7/750/1100", width: 750, height: 1100 },
  { url: "https://picsum.photos/seed/a8/1300/850", width: 1300, height: 850 },
  { url: "https://picsum.photos/seed/a9/850/1300", width: 850, height: 1300 },
  { url: "https://picsum.photos/seed/b1/1200/900", width: 1200, height: 900 },
  { url: "https://picsum.photos/seed/b2/900/1200", width: 900, height: 1200 },
  { url: "https://picsum.photos/seed/b3/1000/700", width: 1000, height: 700 },
  { url: "https://picsum.photos/seed/b4/700/1000", width: 700, height: 1000 },
  { url: "https://picsum.photos/seed/b5/1500/1000", width: 1500, height: 1000 },
  { url: "https://picsum.photos/seed/b6/1000/1500", width: 1000, height: 1500 },
  { url: "https://picsum.photos/seed/b7/1200/800", width: 1200, height: 800 },
  { url: "https://picsum.photos/seed/b8/800/1200", width: 800, height: 1200 },
  { url: "https://picsum.photos/seed/b9/1100/1100", width: 1100, height: 1100 },
  { url: "https://picsum.photos/seed/c1/1400/700", width: 1400, height: 700 },
  { url: "https://picsum.photos/seed/c2/700/1400", width: 700, height: 1400 },
];

export default function Home() {
  const [loadingDone, setLoadingDone] = useState(false);
  const [svgDone, setSvgDone] = useState(false);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      {!loadingDone && <LoadingScreen onComplete={() => setLoadingDone(true)} />}
      {loadingDone && !svgDone && <TransitionSVG onComplete={() => setSvgDone(true)} />}
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
