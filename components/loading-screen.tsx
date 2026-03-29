"use client";

import { useEffect, useState, useRef } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

// Irregular jumps that feel organic, summing to 100
const JUMPS = [10, 13, 7, 5, 14, 9, 6, 11, 8, 17];
// Irregular delays between jumps (ms)
const DELAYS = [320, 480, 290, 550, 410, 370, 620, 280, 500, 440];

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  const [numberVisible, setNumberVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setTextVisible(true), 100);
    const numTimer = setTimeout(() => setNumberVisible(true), 300);
    return () => {
      clearTimeout(textTimer);
      clearTimeout(numTimer);
    };
  }, []);

  useEffect(() => {
    let current = 0;
    let stepIndex = 0;
    let timer: ReturnType<typeof setTimeout>;

    const step = () => {
      if (stepIndex >= JUMPS.length) {
        setTimeout(() => {
          setExiting(true);
          setTimeout(onComplete, 700);
        }, 300);
        return;
      }
      current = Math.min(current + JUMPS[stepIndex], 100);
      setProgress(current);
      stepIndex++;
      timer = setTimeout(step, DELAYS[stepIndex] ?? 400);
    };

    // Start after number has appeared
    timer = setTimeout(step, 500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#ffffff",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        pointerEvents: exiting ? "none" : "auto",
      }}
    >
      {/* LOADING text — bottom-to-top reveal with mask */}
      <div style={{ overflow: "hidden", lineHeight: 1 }}>
        <span
          style={{
            display: "block",
            fontSize: "clamp(12px, 1.1vw, 16px)",
            letterSpacing: "0.05em",
            fontFamily: "sans-serif",
            fontWeight: 400,
            color: "#000",
            transform: exiting ? "translateY(-110%)" : textVisible ? "translateY(0)" : "translateY(110%)",
            transition: "transform 0.6s cubic-bezier(0.7, 0, 1, 1)",
          }}
        >
          LOADING
        </span>
      </div>

      {/* Number — bottom-to-top reveal with mask */}
      <div style={{ overflow: "hidden", lineHeight: 1 }}>
        <span
          style={{
            display: "block",
            fontSize: "clamp(12px, 1.1vw, 16px)",
            letterSpacing: "0.02em",
            fontFamily: "sans-serif",
            fontWeight: 400,
            color: "#000",
            transform: exiting ? "translateY(-110%)" : numberVisible ? "translateY(0)" : "translateY(110%)",
            transition: "transform 0.6s cubic-bezier(0.7, 0, 1, 1)",
          }}
        >
          {progress}
        </span>
      </div>
    </div>
  );
}
