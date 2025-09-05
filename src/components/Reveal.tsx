"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  delayMs?: number;
  yOffsetPx?: number;
};

export function Reveal({ children, delayMs = 0, yOffsetPx = 24 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delayMs);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delayMs]);

  return (
    <div
      ref={ref}
      style={{
        transform: isVisible ? "translateY(0px)" : `translateY(${yOffsetPx}px)`,
        opacity: isVisible ? 1 : 0,
        transition: "transform 600ms var(--smooth), opacity 600ms var(--smooth)",
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}

