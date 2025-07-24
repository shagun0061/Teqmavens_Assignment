import {
  Sphere,
  BranchingTileLine,
  AiJourneyLine,
  AiJourneyButton,
  branchButton,
} from "../assets/imageExport";
import "./curved.css";
import GradientCardWrapper from "./GradientCardWrapper";

const Curved = () => {
  return (
    <div className="rounded text-center flex flex-col items-center justify-between gap-10 relative w-full">
      <div className="bg-gradient-to-b from-[#1cc7e8] via-[#31a2ea] to-[#7789f6] border-2 min-h-[350px] w-full flex flex-col items-center justify-between rounded-2xl">
        <div className="relative z-10 pt-8 flex flex-col items-center">
          <span className="text-4xl sm:text-6xl font-semibold text-white mt-12">
            Template AI
          </span>
        </div>
      </div>
      <div className="bg-[#0E0E1A] rounded-[100%] flex justify-center items-center  z-9  w-[70px] sm:w-70 h-[70px] sm:h-70 absolute top-[30%] left-1/2 transform -translate-x-1/2">
        <div className="w-[150px] sm:w-[250px] h-[150px] sm:h-[250px] border-[#181828] flex items-center justify-center  animate-spin-slow">
          <img
            src={Sphere}
            alt="Rotating Center"
            className="w-[150px] sm:w-[250px] h-[150px] sm:h-[250px] object-cover rounded-full"
          />
        </div>
      </div>
      <div className="min-h-[350px] w-full flex gap-8 sm:gap-15 items-center justify-between">
        <GradientCardWrapper className="h-full w-full flex flex-col items-center justify-between rounded-2xl">
          <img
            src={BranchingTileLine}
            alt="Branching Tile Line"
            className="absolute top-2 -left-6 z-10 w-36 h-44 sm:w-36 sm:h-44"
          />
          <div className="relative z-20 p-2 flex flex-col items-start justify-end h-full pb-0 text-left">
            <h4 className="font-semibold text-lg sm:text-sm md:text:sm xl:text-sm  mb-1">
              Branching paths
            </h4>
            <p className="text-xs sm:text-[12px]   text-[#ACA0E4]">
              Explore multiple prompt directions with branching.
            </p>
          </div>
          <div className="absolute bottom-24 left-0 right-0 z-20 flex items-center ">
            <div className="w-11 h-2 flex items-center justify-center  -mr-3 bg-black"></div>
            <div className="w-13 h-13 flex items-center justify-center rounded-full  bg-black p-1">
              <img src={branchButton} alt="Branching Paths Button" />
            </div>
          </div>
        </GradientCardWrapper>
        <GradientCardWrapper className="h-full w-full flex flex-col items-center justify-between rounded-2xl text-left">
          <img
            src={AiJourneyLine}
            alt="AI Journey Line"
            className="absolute top-0 -right-2 z-10 w-36 h-44 sm:w-36 sm:h-44"
          />
          <div className="relative z-20 p-2 flex flex-col items-start justify-end h-full pb-0">
            <h4 className="font-semibold text-lg sm:text-sm md:text:sm xl:text-sm mb-1">
              Ai journey
            </h4>
            <p className="text-xs sm:text-[12px] text-[#ACA0E4]">
              Boost your prompt precision with keywords.
            </p>
          </div>

          <div className="absolute bottom-24 left-0 right-0 z-20 flex items-center ">
            <div className="w-11 h-2 flex items-center justify-center  -mr-3 bg-black"></div>
            <div className="w-13 h-13 flex items-center justify-center rounded-full  bg-black p-1">
              <img src={AiJourneyButton} alt="Branching Paths Button" />
            </div>
          </div>
        </GradientCardWrapper>
      </div>
    </div>
  );
};

export default Curved;
