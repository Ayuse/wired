"use client";

import dynamic from "next/dynamic";
import type { InfiniteCanvasProps } from "./types";

const InfiniteCanvasScene = dynamic(
  () =>
    import("./scene").then((mod) => ({ default: mod.InfiniteCanvasScene })),
  { ssr: false }
);

export function InfiniteCanvas(props: InfiniteCanvasProps) {
  return <InfiniteCanvasScene {...props} />;
}
