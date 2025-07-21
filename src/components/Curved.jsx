import {
  Sphere,
  BranchingTileBg,
  BranchingTileLine,
  AiJourneyBg,
  AiJourneyLine,
  AiJourneyButton,
  BranchingTileButton,
  TemplateAiBg,
} from "../assets/imageExport";
import "./curved.css";
import GradientCardWrapper from "./GradientCardWrapper";

const Curved = () => {
  return (
    <div className=" rounded text-center flex flex-col items-center justify-between gap-10 relative">
      <div className="bg-gradient-to-b from-blue-400 to-blue-700 border-2 min-h-[350px] w-full flex flex-col items-center justify-between rounded-2xl">
        upper
      </div>
      <div className="bg-[#0E0E1A] rounded-[100%] z-99  w-80 h-80 absolute top-[25%] left-1/2 transform -translate-x-1/2" />
      <div className=" min-h-[350px] w-full flex gap-20 items-center justify-between">
        <GradientCardWrapper className="h-full w-full flex flex-col items-center justify-between rounded-2xl">
          one
        </GradientCardWrapper>
        <GradientCardWrapper className="h-full w-full flex flex-col items-center justify-between rounded-2xl">
          one
        </GradientCardWrapper>
      </div>
    </div>
  );
};

export default Curved;
