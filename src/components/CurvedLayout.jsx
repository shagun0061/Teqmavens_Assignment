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

const CurvedLayout = () => {
  return (
    <div className="rounded text-center flex flex-col items-center justify-around gap-2">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center relative">
        {/* Top curved section */}
        <div
          className="w-full h-[340px] flex flex-col items-center justify-start rounded-3xl relative z-10 overflow-hidden"
          style={{
            backgroundImage: `url(${TemplateAiBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Content */}
          <div className="relative z-10 pt-8 flex flex-col items-center">
            <span className="text-3xl font-bold text-white mb-4">
              Template Ai
            </span>
            <div className="w-10 h-10 bg-white rounded-md"></div>
          </div>
        </div>

        {/* Center circle */}
        <div className="absolute left-1/2 top-[34%] -translate-x-1/2 z-20">
          <div className="w-[250px] h-[250px]  border-[#181828] flex items-center justify-center  animate-spin-slow">
            <img
              src={Sphere}
              alt="Rotating Center"
              className="w-[250px] h-[250px] object-cover rounded-full"
            />
          </div>
        </div>

        {/* Two images left and right container */}
        <div className="flex w-full justify-between gap-8 mt-[70px] md:mt-[120px] z-10">
          {/* Left Card - Branching Paths */}
          <div className="flex-1 h-[370px] curved-card-top-right p-0 text-white flex flex-col justify-end shadow-lg max-w-[264px] md:max-w-[350px] relative overflow-hidden">
            {/* Background image */}
            <img
              src={BranchingTileBg}
              alt="Branching Tile BG"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute top-4 left-4 z-10 w-16 h-24">
              <img
                src={BranchingTileLine}
                alt="Branching Tile Line"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="relative z-20 p-6 flex flex-col items-start justify-end h-full pb-8">
              <h4 className="font-semibold text-lg mb-1">Branching paths</h4>
              <p className="text-xs text-gray-400">
                Explore multiple prompt directions with branching.
              </p>
            </div>

            <div className="absolute bottom-24 left-0 z-20">
              <div className="w-13 h-13 rounded-full flex items-center justify-center">
                <img
                  src={BranchingTileButton}
                  alt="Branching Paths Button"
                  className="w-12 h-12"
                />
              </div>
            </div>
          </div>

          {/* Right Card - AI Journey */}
          <div className="flex-1 h-[370px] curved-card-top-left p-0 text-white flex flex-col justify-end shadow-lg max-w-[264px] md:max-w-[350px] relative overflow-hidden">
            <img
              src={AiJourneyBg}
              alt="AI Journey BG"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute top-4 right-4 z-10 w-16 h-24">
              <img
                src={AiJourneyLine}
                alt="AI Journey Line"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="relative z-20 p-6 flex flex-col items-start justify-end h-full pb-8">
              <h4 className="font-semibold text-lg mb-1">Ai journey</h4>
              <p className="text-xs text-gray-400">
                Boost your prompt precision with keywords.
              </p>
            </div>

            <div className="absolute bottom-24 left-0 z-20">
              <div className="w-13 h-13 rounded-full flex items-center justify-center">
                <img
                  src={AiJourneyButton}
                  alt="AI Journey Button"
                  className="w-8 h-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurvedLayout;
