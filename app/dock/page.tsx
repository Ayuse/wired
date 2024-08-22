"use client";

import React, { use, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import {
  Globe,
  ChatBubble,
  bookmarks,
  fileTray,
  options,
  terminal,
  toggle,
} from "@/asset/iconTray";
const Dock = () => {
  const dockItems = [
    { icon: Globe, label: "Search" },
    { icon: ChatBubble, label: "Chat" },
    { icon: bookmarks, label: "Search" },
    { icon: fileTray, label: "Chat" },
    { icon: options, label: "Search" },
    { icon: terminal, label: "Chat" },
    { icon: toggle, label: "toggle" },
  ];

  let mouseX = useMotionValue(Infinity);

  return (
    <div className="h-screen w-screen bg-background text-text">
      <div className="container">
        <div
          className="dock bg-grey flex w-auto h-12 fixed p-1 rounded-full bottom-5 left-2/4 -translate-x-1/2 gap-3 items-end border border-border-grey"
          onMouseMove={(e) => {
            mouseX.set(e.pageX);
          }}
          onMouseLeave={() => mouseX.set(Infinity)}
        >
          {dockItems.map((item, index) => {
            return (
              <DockItem key={index} index={index} mouseX={mouseX} item={item} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const DockItem = ({
  index,
  mouseX,
  item,
}: {
  index: number;
  mouseX: any;
  item: any;
}) => {
  let itemRef = useRef(null);
  let distance = useTransform(mouseX, (x: number) => {
    let bounds = (
      itemRef.current as HTMLElement | null
    )?.getBoundingClientRect() ?? {
      x: 0,
      width: 0,
    };
    return x - bounds.x - bounds.width / 2;
  });
  let widthSync = useTransform(distance, [-200, 0, 200], [40, 80, 40]);
  let width = useSpring(widthSync, { damping: 15, stiffness: 300, mass: 0.1 });
  const iconWidth = width.get() - 15;
  return (
    <motion.div
      style={{ width, height: width }}
      ref={itemRef}
      key={index}
      className="h-10 w-10 bg-dark-grey rounded-full cursor-pointer flex items-center justify-center"
    >
      <item.icon width={iconWidth} />
    </motion.div>
  );
};

export default Dock;
