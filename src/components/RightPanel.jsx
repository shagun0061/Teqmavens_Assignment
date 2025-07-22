import GradientCardWrapper from "./GradientCardWrapper";
import SparkleToggle from "./SparkleToggle";
import {
  CamraButton,
  Coin,
  DubbleToggle,
  GiftButton,
} from "../assets/imageExport";

const RightPanel = () => (
  <div className="rounded text-center flex flex-col items-center justify-between gap-10 w-full">
    <div className="min-h-[350px] flex flex-col items-center justify-between">
      <GradientCardWrapper className="h-[120px] w-full sm:w-64 flex items-center justify-center">
        <SparkleToggle />
      </GradientCardWrapper>

      {/* Stats */}
      <div className="relative flex flex-col items-center justify-center text-white font-bold">
        {/* Top number */}
        <span className="text-4xl sm:text-[60px] text-purple-400 leading-none">
          25
        </span>

        {/* Overlay label with brackets */}
        <div className="relative my-1">
          {/* Left Bracket */}
          <div className="absolute left-[-16px] top-1/2 transform -translate-y-1/2 text-purple-400 text-[20px]">
            |
          </div>

          {/* Right Bracket */}
          <div className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 text-purple-400 text-[20px]">
            |
          </div>

          {/* Label */}
          <span className="text-sm sm:text-lg text-purple-300 bg-[#1f1f2e] font-normal rounded-md tracking-wide">
            created prompts
          </span>
        </div>

        {/* Bottom letter (M) */}
        <span className="text-4xl sm:text-[60px] text-purple-500 leading-none">
          M
        </span>
      </div>
    </div>

    <div className="min-h-[350px]">
      <div className="bg-[#1B1B2D] text-white rounded-3xl p-6 w-full sm:w-64 shadow-lg relative overflow-hidden flex flex-col justify-between h-full">
        {/* Title and Description */}
        <div className="text-left">
          <h2 className="text-lg sm:text-xl font-bold">Prompt Service</h2>
          <p className="text-lg sm:text-xl text-[#ACA0E4] font-normal">
            Use pre-made templates to jumpstart creativity.
          </p>
        </div>

        {/* Bottom Icon Pills */}
        <div className="relative h-[180px] flex justify-end ">
          {/* Rewrite Pill */}
          <div className="flex items-center gap-2 bg-[#2A2A40] text-sm px-6 py-3 rounded-full shadow-sm absolute top-10 -left-2 -rotate-50">
            <span className="w-2 h-2 bg-purple-300 rounded-full"></span>
            <span className="text-purple-300 text-lg">Rewrite</span>
          </div>

          {/* Gift */}
          <div className="w-16 sm:w-18 h-12 bg-gradient-to-tr rounded-full flex items-center justify-center shadow-md absolute top-[30%] right-12">
            <img src={GiftButton} alt="" />
          </div>

          {/* Camera Pill */}
          <div className="w-16 sm:w-18 h-14 bg-gradient-to-br rounded-full flex items-center justify-center shadow-md absolute left-0 bottom-0">
            <img src={CamraButton} alt="" />
          </div>

          {/* Bolt Pill */}
          <div className="rotate-45 flex items-center gap-2 bg-[#2A2A40] text-sm px-6 py-3 rounded-full shadow-sm absolute left-13 bottom-4">
            <img src={DubbleToggle} alt="" />
            <img src={Coin} alt="" />
          </div>

          {/* Output Formats Pill */}
          <div className="flex flex-col items-center justify-center bg-[#2A2A40] rounded-full text-xs gap-3 h-[200px] w-12 shadow-sm ">
            {/* PDF */}
            <div className="flex justify-center gap-1 items-center -rotate-90 mb-5">
              <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
              <span className="text-white font-medium leading-none">PDF</span>
            </div>

            {/* PNG */}
            <div className="flex justify-center gap-1 mb-5 items-center -rotate-90">
              <span className="w-2 h-2 bg-orange-300 rounded-full"></span>
              <span className="text-white font-medium">PNG</span>
            </div>

            {/* JPG */}
            <div className="flex items-center gap-1 -rotate-90">
              <span className="w-2 h-2 bg-purple-300 rounded-full "></span>
              <span className="text-white font-medium">JPG</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RightPanel;
