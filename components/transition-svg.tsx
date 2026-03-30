"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface TransitionSVGProps {
  onComplete: () => void;
}

export function TransitionSVG({ onComplete }: TransitionSVGProps) {
  const [hidden, setHidden] = useState(false);
  const pathsRef = useRef<SVGPathElement[]>([]);

  useEffect(() => {
    if (pathsRef.current.length === 0) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setHidden(true);
        onComplete();
      },
    });

    pathsRef.current.forEach((path) => {
      const length = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        attr: { "stroke-width": 200 },
        opacity: 1,
      });
      tl.to(
        path,
        {
          strokeDashoffset: 0,
          attr: { "stroke-width": 700 },
          duration: 1,
          ease: "power1.inOut",
        },
        0
      );
    });

    tl.addLabel("exit");

    pathsRef.current.forEach((path) => {
      const length = path.getTotalLength();
      tl.to(
        path,
        {
          strokeDashoffset: -length,
          attr: { "stroke-width": 200 },
          duration: 1,
          ease: "power1.inOut",
          onComplete: () => {
            gsap.set(path, { strokeDashoffset: length });
          },
        },
        "exit"
      );
    });

    return () => { tl.kill(); };
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        backgroundColor: "#ffffff",
        pointerEvents: "none",
      }}
    >
      <svg
        viewBox="0 0 1623 1109"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", width: "100vw", height: "100vh" }}
      >
        <path
          ref={(el) => { if (el) pathsRef.current[0] = el; }}
          d="M30.5 302.948C34.6968 165.362 188.178 57.6324 319 100.448C482.372 153.916 93.5 465 190.5 521.448C287.5 577.896 493.939 11.7623 769.5 80.948C1116.78 168.141 267.179 581.723 393 916.948C558.442 1357.73 1017.28 -290.246 1280 100.448C1497.35 423.671 536.714 986.008 923.5 1031.95C1263.51 1072.33 1309 106.286 1518 377.5C1691.46 602.591 1228 1009 1311.5 1067C1395 1125 1537.16 935.824 1592.5 812"
          stroke="#E21E2C"
          strokeLinecap="round"
          opacity={0}
        />
        <path
          ref={(el) => { if (el) pathsRef.current[1] = el; }}
          d="M78.5 750.479C82.4174 878.946 225.68 979.536 347.791 939.558C500.285 889.633 137.305 599.167 227.847 546.46C318.389 493.753 511.083 1022.37 768.296 957.766C1092.45 876.352 299.42 490.179 416.864 177.171C571.291 -234.401 999.579 1304.36 1244.81 939.558C1447.68 637.757 551.01 112.688 912.043 69.793C1229.42 32.0853 1271.87 934.107 1466.96 680.868C1628.87 470.695 1196.27 91.2201 1274.21 37.064C1352.15 -17.0921 1484.85 159.546 1536.5 275.164"
          stroke="#FEEDA5"
          strokeLinecap="round"
          opacity={0}
        />
      </svg>
    </div>
  );
}
