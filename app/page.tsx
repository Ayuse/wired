"use client";

import { useState, useEffect, useRef } from "react";
import { InfiniteCanvas } from "@/components/infinite-canvas";
import { LoadingScreen } from "@/components/loading-screen";
import { TransitionSVG } from "@/components/transition-svg";
import { AboutSection } from "@/components/about-section";
import { FloatingMenu } from "@/components/floating-menu";

const MEDIA = [
  { url: "/images/Abstract Composition in Red, Orange, Pink, and Black.png", width: 673, height: 1200 },
  { url: "/images/Abstract Sculptures Trio.png", width: 960, height: 1200 },
  { url: "/images/Abstract Textured Form.png", width: 904, height: 1200 },
  { url: "/images/Adobe Architecture Scene.png", width: 973, height: 1200 },
  { url: "/images/Anthurium Flowers Sky.png", width: 800, height: 1200 },
  { url: "/images/Daisies Under Blue Sky.png", width: 800, height: 1200 },
  { url: "/images/Dynamic Abstract Artwork.png", width: 904, height: 1200 },
  { url: "/images/Hydrangea Blooms Against Blue Sky.png", width: 906, height: 1200 },
  { url: "/images/Minimalist Stone Building.png", width: 800, height: 1200 },
  { url: "/images/Modern Architectural Building.png", width: 800, height: 1200 },
  { url: "/images/Modern Architectural Design.png", width: 900, height: 1200 },
  { url: "/images/Modern Minimalist Building.png", width: 904, height: 1200 },
  { url: "/images/Modern Minimalist Office.png", width: 904, height: 1200 },
  { url: "/images/Modern White Architecture.png", width: 960, height: 1200 },
  { url: "/images/Pink Bougainvillea Bloom.png", width: 800, height: 1200 },
  { url: "/images/Tulips Against Blue Sky.png", width: 800, height: 1200 },
  { url: "/images/Tulips in Springtime.png", width: 800, height: 1200 },
];

export default function Home() {
  const [loadingDone, setLoadingDone] = useState(false);
  const [svgDone, setSvgDone] = useState(false);
  const scrollYRef = useRef(0);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const onScroll = () => {
      scrollYRef.current = window.scrollY;
      if (textRef.current) {
        textRef.current.style.transform = `translateY(${-window.scrollY * 1.5}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      {/* Fixed canvas background — stays visible as user scrolls */}
      <div style={{ position: "fixed", inset: 0, width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#101010", zIndex: 0 }}>
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
            backgroundColor="#101010"
            fogColor="#101010"
            playIntro={svgDone}
          />
        </div>
        {/* Center text overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            zIndex: 10,
            opacity: svgDone ? 1 : 0,
            transition: "opacity 0.7s ease",
          }}
        >
          <h1
            ref={textRef}
            style={{
              color: "#ffffff",
              fontSize: "clamp(24px, 3.5vw, 48px)",
              fontFamily: "sans-serif",
              fontWeight: 700,
              letterSpacing: "0.05em",
              textAlign: "center",
              willChange: "transform",
            }}
          >
            CLUTCH
          </h1>
        </div>
      </div>

      {/* Scrollable content layer */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Spacer — transparent, lets pointer events pass through to canvas */}
        <div style={{ height: "100vh", pointerEvents: "none" }} />
        <AboutSection />
      </div>
      <FloatingMenu show={svgDone} />
    </div>
  );
}
