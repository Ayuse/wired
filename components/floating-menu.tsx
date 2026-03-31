"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const mainLinks = ["About", "Collection", "Projects", "Approach", "Contact"];
const secondaryLinks = ["News", "Showroom"];
const contactInfo = ["020 8156 7290", "sales@fluid.glass"];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function FloatingMenu({ show = false }: { show?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating bottom bar */}
      <AnimatePresence>
        {show && !isOpen && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            style={{
              position: "fixed",
              bottom: 32,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
              zIndex: 1000,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "min(90vw, 300px)",
                backgroundColor: "#3a3a3a",
                borderRadius: 4,
                padding: "14px 24px",
                cursor: "pointer",
              }}
              onClick={() => setIsOpen(true)}
            >
              {/* Logo */}
              <svg
                viewBox="0 0 40 40"
                fill="none"
                style={{ width: 24, height: 24, minWidth: 24, minHeight: 24, flexShrink: 0 }}
              >
                <path
                  d="M20 4L6 12V28L20 36L34 28V12L20 4Z"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M20 12L12 16.5V25.5L20 30L28 25.5V16.5L20 12Z"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
                <path d="M12 16.5L20 21L28 16.5" stroke="white" strokeWidth="2" />
                <path d="M20 21V30" stroke="white" strokeWidth="2" />
              </svg>

              {/* Center text */}
              <span
                style={{
                  color: "#ffffff",
                  fontSize: 14,
                  fontWeight: 400,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontFamily: "inherit",
                }}
              >
                HOME
              </span>

              {/* Hamburger */}
              <div style={{ display: "flex", flexDirection: "column", gap: 4, flexShrink: 0 }}>
                <span style={{ display: "block", width: 22, height: 1.5, backgroundColor: "#fff" }} />
                <span style={{ display: "block", width: 22, height: 1.5, backgroundColor: "#fff" }} />
                <span style={{ display: "block", width: 22, height: 1.5, backgroundColor: "#fff" }} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease }}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 999,
                backgroundColor: "rgba(0,0,0,0.3)",
              }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.6, ease }}
              style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "min(90vw, 520px)",
                  backgroundColor: "#2a2a2a",
                  borderRadius: "8px 8px 0 0",
                  padding: "40px 48px 48px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                }}
              >
                {/* MENU label */}
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease }}
                  style={{
                    color: "#999",
                    fontSize: 12,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: 24,
                    fontFamily: "inherit",
                  }}
                >
                  MENU
                </motion.span>

                {/* Main navigation links */}
                <nav style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 40 }}>
                  {mainLinks.map((link, i) => (
                    <div key={link} style={{ overflow: "hidden" }}>
                      <motion.a
                        href={`#${link.toLowerCase()}`}
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          duration: 0.7,
                          delay: 0.25 + i * 0.08,
                          ease,
                        }}
                        style={{
                          display: "block",
                          color: "#ffffff",
                          fontSize: "clamp(28px, 5vw, 42px)",
                          fontWeight: 300,
                          textDecoration: "none",
                          lineHeight: 1.3,
                          fontFamily: "inherit",
                          cursor: "pointer",
                        }}
                        whileHover={{ x: 8 }}
                        onClick={() => setIsOpen(false)}
                      >
                        {link}
                      </motion.a>
                    </div>
                  ))}
                </nav>

                {/* Secondary links and contact info */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 32,
                    marginBottom: 40,
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {secondaryLinks.map((link, i) => (
                      <div key={link} style={{ overflow: "hidden" }}>
                        <motion.a
                          href={`#${link.toLowerCase()}`}
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.6 + i * 0.08,
                            ease,
                          }}
                          style={{
                            display: "block",
                            color: "#aaa",
                            fontSize: 16,
                            textDecoration: "none",
                            fontFamily: "inherit",
                            fontWeight: 300,
                          }}
                          whileHover={{ color: "#fff" }}
                          onClick={() => setIsOpen(false)}
                        >
                          {link}
                        </motion.a>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {contactInfo.map((info, i) => (
                      <div key={info} style={{ overflow: "hidden" }}>
                        <motion.span
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.65 + i * 0.08,
                            ease,
                          }}
                          style={{
                            display: "block",
                            color: "#aaa",
                            fontSize: 16,
                            fontFamily: "inherit",
                            fontWeight: 300,
                          }}
                        >
                          {info}
                        </motion.span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Close button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.3, ease }}
                onClick={() => setIsOpen(false)}
                style={{
                  width: 56,
                  height: 56,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#1a1a1a",
                  border: "none",
                  cursor: "pointer",
                  marginTop: 0,
                  marginBottom: 32,
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
