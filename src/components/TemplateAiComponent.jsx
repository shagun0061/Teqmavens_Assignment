// TemplateAiComponent.jsx
import React from "react";

export default function TemplateAiComponent() {
  return (
    <div className="min-h-screen bg-[#181829] flex items-center justify-center py-12">
      <div className="w-[370px] bg-[#232237] rounded-2xl pb-6 shadow-xl relative overflow-visible">
        {/* Top Section with Title and Square */}
        <div className="bg-gradient-to-b from-[#66cfff] to-[#1800ba] rounded-t-2xl pt-6 pb-16 flex flex-col items-center relative">
          <span className="text-white text-3xl font-bold tracking-wide mt-2">
            Template Ai
          </span>
          <div className="w-12 h-12 bg-gray-200 rounded-md mt-4 mb-2"></div>
        </div>
        {/* Central Glowing Orb (replace with image/svg as needed) */}
        <div className="absolute left-1/2 top-32 transform -translate-x-1/2 -translate-y-1/2 z-10 w-36 h-36 flex items-center justify-center">
          {/* Placeholder: Use <img src="..." /> for actual orb */}
          <div className="w-36 h-36 rounded-full bg-gradient-to-br from-[#1f1cc4] via-[#6d44ff] to-[#fc8803] border-[8px] border-[#161520] shadow-2xl flex items-center justify-center">
            {/* Orb image/animation here */}
          </div>
        </div>
        {/* Bottom Section with Two Options */}
        <div className="flex justify-between mt-32 px-4 gap-4">
          {/* Branching Paths Card */}
          <div className="flex-1 bg-[#1b1b2f] rounded-2xl px-4 py-5 flex flex-col items-center">
            <div className="mb-3">
              <span className="inline-flex items-center justify-center p-2 bg-[#f68733] bg-opacity-20 rounded-full">
                <svg width="24" height="24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#f68733" />
                </svg>
              </span>
            </div>
            <div className="text-white font-semibold text-base mb-1">
              Branching paths
            </div>
            <div className="text-gray-400 text-xs text-center">
              Explore multiple prompt directions with branching.
            </div>
          </div>
          {/* AI Journey Card */}
          <div className="flex-1 bg-[#1b1b2f] rounded-2xl px-4 py-5 flex flex-col items-center">
            <div className="mb-3">
              <span className="inline-flex items-center justify-center p-2 bg-[#7C5FFD] bg-opacity-20 rounded-full">
                <svg width="24" height="24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#7C5FFD" />
                </svg>
              </span>
            </div>
            <div className="text-white font-semibold text-base mb-1">
              AIjourney
            </div>
            <div className="text-gray-400 text-xs text-center">
              Boost your prompt precision with keywords.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
