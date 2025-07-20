import { useState } from "react";
import { AiJourneyButton, ToggleBtn } from "../assets/imageExport"; // assuming you have 2 images

export default function SparkleToggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div
      onClick={() => setEnabled(!enabled)}
      className="w-26 h-14  bg-[#0E0E1A] rounded-full px-1 flex items-center cursor-pointer transition-all duration-300"
    >
      <div
        className={`h-14 w-14 rounded-full  flex items-center justify-center transition-all duration-300 ${
          enabled ? "translate-x-12" : "translate-x-0"
        }`}
      >
        {/* Toggle Image */}
        <img
          src={enabled ? AiJourneyButton : ToggleBtn}
          alt="toggle"
          className={!enabled ? "" : "w-10 h-10"}
        />
      </div>
    </div>
  );
}
