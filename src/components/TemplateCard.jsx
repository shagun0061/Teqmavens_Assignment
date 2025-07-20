import React from "react";
import { GiftButton } from "../assets/imageExport";

const TemplateCard = ({ icon, title, subtitle }) => {
  return (
    <div className="relative w-[380px] h-[300px] rounded-2xl bg-gradient-to-br from-[#7B5FFF] to-[#5737D6] shadow-xl flex flex-col p-6">
      {/* Icon in circle */}
      <div className="absolute top-8 left-6 w-15 h-15  flex items-center justify-center ">
        <img
          src={icon || GiftButton}
          alt="Card Icon"
          className="w-10 h-10 object-contain"
        />
      </div>
      <div className="mx-auto mt-2 mb-6 w-16 h-16 bg-gray-200 rounded-sm" />
      {/* Title */}
      <div className="flex-1 flex flex-col justify-center items-start">
        <h2
          className="text-white font-semibold text-start mb-2"
          style={{ fontSize: "50px", lineHeight: "60px", letterSpacing: "-2%" }}
        >
          {title}
        </h2>
        <p className="text-white/60 text-sm text-center">{subtitle}</p>
      </div>
    </div>
  );
};

export default TemplateCard;
