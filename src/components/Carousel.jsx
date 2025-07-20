import React, { useState } from "react";
import { TemplateCard } from "./TemplateCard.jsx";

const FAN_ANGLES = [-12, -6, 0, 6, 12]; // For up to 5 cards
const FAN_OFFSETS = [-32, -16, 0, 16, 32];

const Carousel = ({ stacked = false }) => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? cards.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === cards.length - 1 ? 0 : c + 1));

  const cards = [
    <TemplateCard
      key={0}
      title="Your AI Prompt "
      subtitle="Use pre-made templates to jumpstart creativity."
    />,
    <TemplateCard
      key={1}
      title="Another Template"
      subtitle="Another description here."
    />,
  ];

  if (stacked) {
    return (
      <div className="relative flex items-center justify-center w-full h-full min-h-[400px]">
        <button
          className="absolute left-0 z-30 p-4 text-white/60 hover:text-white top-1/2 -translate-y-1/2"
          onClick={prev}
          aria-label="Previous"
        >
          <span className="text-4xl">&#60;</span>
        </button>
        <div
          className="relative flex items-center justify-center w-full h-full"
          style={{ minHeight: 400 }}
        >
          {cards.map((card, idx) => {
            // Calculate position in stack
            let pos = idx - current;
            if (pos < -Math.floor(cards.length / 2)) pos += cards.length;
            if (pos > Math.floor(cards.length / 2)) pos -= cards.length;
            // Only show up to 2 behind and 2 in front
            if (Math.abs(pos) > 2) return null;
            const z = 10 + (pos === 0 ? 20 : -Math.abs(pos));
            const angle = FAN_ANGLES[pos + 2] || 0;
            const offset = FAN_OFFSETS[pos + 2] || 0;
            const scale = pos === 0 ? 1 : 0.92;
            const blur = pos === 0 ? "" : "blur-sm opacity-60";
            return (
              <div
                key={idx}
                className={`absolute left-1/2 top-1/2 transition-all duration-500 ${blur}`}
                style={{
                  zIndex: z,
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${offset}px) scale(${scale})`,
                  pointerEvents: pos === 0 ? "auto" : "none",
                }}
              >
                {card}
              </div>
            );
          })}
        </div>
        <button
          className="absolute right-0 z-30 p-4 text-white/60 hover:text-white top-1/2 -translate-y-1/2"
          onClick={next}
          aria-label="Next"
        >
          <span className="text-4xl">&#62;</span>
        </button>
      </div>
    );
  }

  const prevIdx = current === 0 ? cards.length - 1 : current - 1;
  const nextIdx = current === cards.length - 1 ? 0 : current + 1;

  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[400px]">
      <button
        className="absolute left-0 z-20 p-4 text-white/60 hover:text-white top-1/2 -translate-y-1/2"
        onClick={prev}
        aria-label="Previous"
      >
        <span className="text-4xl">&#60;</span>
      </button>
      <div className="relative flex items-center justify-center w-full gap-0">
        <div className="absolute left-1/4 -translate-x-1/2 z-10 scale-90 opacity-40 blur-sm transition-all duration-300">
          {cards[prevIdx]}
        </div>
        <div className="relative z-20 mx-auto scale-100 opacity-100 transition-all duration-300">
          {cards[current]}
        </div>
        <div className="absolute right-1/4 translate-x-1/2 z-10 scale-90 opacity-40 blur-sm transition-all duration-300">
          {cards[nextIdx]}
        </div>
      </div>
      <button
        className="absolute right-0 z-20 p-4 text-white/60 hover:text-white top-1/2 -translate-y-1/2"
        onClick={next}
        aria-label="Next"
      >
        <span className="text-4xl">&#62;</span>
      </button>
    </div>
  );
};

export default Carousel;
