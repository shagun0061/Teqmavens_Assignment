import React, { useState } from "react";
import TempCard from "./TempCard";
import {
  carouselAvtar1,
  carouselAvtar2,
  carouselAvtar3,
} from "../assets/imageExport";

const FAN_ANGLES = [-12, -6, 0, 6, 12];
const FAN_OFFSETS = [-32, -16, 0, 16, 32];

const GenerateCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [pending, setPending] = useState(null);

  const cards = [
    <TempCard
      key={0}
      title="Your AI Prompt "
      subtitle="Use pre-made templates to jumpstart creativity."
      img={carouselAvtar1}
    />,
    <TempCard
      key={1}
      title="Another Template"
      subtitle="Another description here."
      img={carouselAvtar2}
    />,
    <TempCard
      key={3}
      title="Last AI Prompt "
      subtitle="Use pre-made templates to jumpstart creativity."
      img={carouselAvtar3}
    />,
  ];

  const atStart = current === 0;
  const atEnd = current === cards.length - 1;
  const prevIdx = atStart ? 0 : current - 1;
  const nextIdx = atEnd ? cards.length - 1 : current + 1;

  const prev = () => {
    if (isAnimating || atStart) return;
    setDirection("left");
    setIsAnimating(true);
    setPending(prevIdx);
  };

  const next = () => {
    if (isAnimating || atEnd) return;
    setDirection("right");
    setIsAnimating(true);
    setPending(nextIdx);
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[400px]">
      <button
        className={`absolute left-0 z-20 p-4 text-white/60 hover:text-white top-1/2 -translate-y-1/2 transition-opacity ${
          atStart ? "opacity-30 pointer-events-none" : "opacity-100"
        }`}
        onClick={prev}
        aria-label="Previous"
        disabled={isAnimating || atStart}
      >
        <span className="text-4xl">&#60;</span>
      </button>
      <div className="relative flex items-center justify-center w-full gap-0">
        <div className="absolute left-1/4 -translate-x-1/2 z-10 scale-90 opacity-40 blur-sm transition-all duration-300">
          {cards[prevIdx]}
        </div>
        <div
          className={`relative z-20 mx-auto scale-100 opacity-100 transition-all duration-700 ${
            isAnimating
              ? direction === "right"
                ? "active-slide-right"
                : "active-slide-left"
              : ""
          }`}
          onAnimationEnd={() => {
            if (pending !== null) {
              setCurrent(pending);
              setPending(null);
              setIsAnimating(false);
            }
          }}
        >
          {cards[current]}
        </div>
        <div className="absolute right-1/4 translate-x-1/2 z-10 scale-90 opacity-40 blur-sm transition-all duration-300">
          {cards[nextIdx]}
        </div>
      </div>
      <button
        className={`absolute right-0 z-20 p-4 text-white/60 hover:text-white top-1/2 -translate-y-1/2 transition-opacity ${
          atEnd ? "opacity-30 pointer-events-none" : "opacity-100"
        }`}
        onClick={next}
        aria-label="Next"
        disabled={isAnimating || atEnd}
      >
        <span className="text-4xl">&#62;</span>
      </button>
    </div>
  );
};

export default GenerateCarousel;
