"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const RECOGNITIONS = [
  { source: "Codrops", project: "", type: "Tutorial" },
  { source: "Codrops", project: "", type: "Tutorial" },
  { source: "Awwwards", project: "Since 2023", type: "Jury" },
  { source: "Awwwards", project: "Merrell Agility Peak 5", type: "Product Honors" },
  { source: "Awwwards", project: "Aerleum", type: "Honors" },
  { source: "Awwwards", project: "Helene Blanck", type: "Honors" },
  { source: "Awwwards", project: "Helene Blanck", type: "Mobile Excellence" },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const recTitleRef = useRef<HTMLHeadingElement>(null);
  const recRowsRef = useRef<HTMLDivElement>(null);
  const footerLeftRef = useRef<HTMLDivElement>(null);
  const footerRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title — character by character reveal
      if (titleRef.current) {
        new SplitText(titleRef.current, {
          type: "words, chars",
          autoSplit: true,
          mask: "chars",
          charsClass: "char",
          onSplit(self) {
            return gsap.from(self.chars, {
              duration: 1,
              yPercent: -120,
              scale: 1.2,
              stagger: 0.01,
              ease: "expo.out",
              scrollTrigger: {
                trigger: titleRef.current,
                start: "top center",
                toggleActions: "play reverse play reverse",
              },
            });
          },
        });
      }

      // Bio paragraph — line by line reveal
      if (bioRef.current) {
        new SplitText(bioRef.current, {
          type: "lines, words",
          autoSplit: true,
          mask: "lines",
          linesClass: "line",
          onSplit(self) {
            return gsap.from(self.lines, {
              duration: 0.9,
              yPercent: 105,
              stagger: 0.04,
              ease: "expo.out",
              scrollTrigger: {
                trigger: bioRef.current,
                start: "top center",
                toggleActions: "play reverse play reverse",
              },
            });
          },
        });
      }

      // Recognitions title — character reveal
      if (recTitleRef.current) {
        new SplitText(recTitleRef.current, {
          type: "words, chars",
          autoSplit: true,
          mask: "chars",
          charsClass: "char",
          onSplit(self) {
            return gsap.from(self.chars, {
              duration: 1,
              yPercent: -120,
              scale: 1.2,
              stagger: 0.01,
              ease: "expo.out",
              scrollTrigger: {
                trigger: recTitleRef.current,
                start: "top center",
                toggleActions: "play reverse play reverse",
              },
            });
          },
        });
      }

      // Recognition rows — staggered line reveal
      if (recRowsRef.current) {
        const rows = recRowsRef.current.querySelectorAll(".rec-row-inner");
        gsap.set(rows, { yPercent: 105 });
        gsap.to(rows, {
          duration: 0.9,
          yPercent: 0,
          stagger: 0.04,
          ease: "expo.out",
          scrollTrigger: {
            trigger: recRowsRef.current,
            start: "top center",
            toggleActions: "play reverse play reverse",
          },
        });
      }

      // Footer left
      if (footerLeftRef.current) {
        new SplitText(footerLeftRef.current, {
          type: "lines, words",
          autoSplit: true,
          mask: "lines",
          linesClass: "line",
          onSplit(self) {
            return gsap.from(self.lines, {
              duration: 0.9,
              yPercent: 105,
              stagger: 0.04,
              ease: "expo.out",
              scrollTrigger: {
                trigger: footerLeftRef.current,
                start: "top center",
                toggleActions: "play reverse play reverse",
              },
            });
          },
        });
      }

      // Footer right
      if (footerRightRef.current) {
        new SplitText(footerRightRef.current, {
          type: "lines, words",
          autoSplit: true,
          mask: "lines",
          linesClass: "line",
          onSplit(self) {
            return gsap.from(self.lines, {
              duration: 0.9,
              yPercent: 105,
              stagger: 0.04,
              ease: "expo.out",
              scrollTrigger: {
                trigger: footerRightRef.current,
                start: "top center",
                toggleActions: "play reverse play reverse",
              },
            });
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f3e8",
        fontFamily: "sans-serif",
        color: "#1a1a1a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "clamp(32px, 4vw, 60px)",
        boxSizing: "border-box",
        position: "relative",
        borderRadius: "12px 12px 0 0",
        overflow: "hidden",
      }}
    >
      {/* Top area */}
      <div>
        {/* Main content — two columns */}
        {/* About title + bio */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px, 6vw, 100px)",
          }}
        >
          <div>
            <h1
              ref={titleRef}
              style={{
                fontSize: "clamp(48px, 7vw, 120px)",
                fontWeight: 400,
                lineHeight: 1,
                marginBottom: "clamp(24px, 3vw, 48px)",
              }}
            >
              About
            </h1>
          </div>

          <div>
            <p
              ref={bioRef}
              style={{
                fontSize: "clamp(15px, 1.3vw, 20px)",
                fontWeight: 300,
                lineHeight: 1.65,
                maxWidth: "540px",
              }}
            >
              Clutch is a creative studio crafting highly interactive digital experiences.
              We blend design with code to build sensitive, memorable web
              experiences&mdash;subtle animations, fluid interactions, and carefully
              composed transitions. Every project is rooted in motion, precision, and
              a sense of touch.
              <br /><br />
              We work closely with brands, agencies, and founders to bring bold ideas
              to life on the web. From concept to launch, we research, prototype, and
              iterate&mdash;pushing the boundaries of what feels possible in a browser.
              The result is work that resonates, engages, and leaves a lasting impression.
            </p>
          </div>
        </div>

        {/* Recognitions — below about */}
        <div style={{ paddingTop: "clamp(80px, 12vw, 200px)" }}>
          <h2
            ref={recTitleRef}
            style={{
              fontSize: "clamp(20px, 2vw, 28px)",
              fontWeight: 600,
              marginBottom: "clamp(24px, 3vw, 40px)",
            }}
          >
            Recognitions
          </h2>

          <div ref={recRowsRef}>
            {RECOGNITIONS.map((rec, i) => (
              <div
                key={i}
                className="rec-row"
                style={{
                  overflow: "hidden",
                  padding: "6px 0",
                }}
              >
                <div
                  className="rec-row-inner"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "16px",
                    fontSize: "clamp(13px, 1vw, 15px)",
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  <span>{rec.source}</span>
                  <span>{rec.project}</span>
                  <span>{rec.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginTop: "clamp(80px, 12vw, 200px)",
        }}
      >
        <div
          ref={footerLeftRef}
          style={{
            fontSize: "clamp(13px, 1vw, 15px)",
            fontWeight: 400,
            lineHeight: 1.6,
          }}
        >
          Creative Developer
          <br />
          Strasbourg, France
        </div>
        <div
          ref={footerRightRef}
          style={{
            fontSize: "clamp(13px, 1vw, 15px)",
            fontWeight: 400,
            lineHeight: 1.6,
            textAlign: "right",
          }}
        >
          Mail
          <br />
          Linkedin
          <br />
          Instagram
        </div>
      </div>
    </section>
  );
}
