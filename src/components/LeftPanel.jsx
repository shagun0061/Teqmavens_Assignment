import { Avatar, Avatar1, Avatar2, FileIcon } from "../assets/imageExport";
import GradientCardWrapper from "./GradientCardWrapper";

const LeftPanel = ({ setIsModalOpen, setModalType }) => (
  <div className=" rounded text-center flex flex-col items-center justify-around gap-2">
    <GradientCardWrapper className={"h-[340px] w-64 text-left justify-between"}>
      <div className="z-10">
        <h2 className="text-2xl font-semibold leading-snug">
          Create <br />
          your own <br />
          template
        </h2>
      </div>

      <div className="z-10 text-sm">
        <p className="font-semibold">14 days trial</p>
        <p className="text-[#ACA0E4] text-xs">after – $5/month</p>
      </div>
    </GradientCardWrapper>

    <GradientCardWrapper
      onClick={() => {
        setIsModalOpen(true);
        setModalType("slider");
      }}
      className={
        "h-[240px] w-64 text-left hover:cursor-pointer hover:scale-105 transition-transform duration-300"
      }
    >
      <div className="z-10 text-center">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
          20
        </h1>
        <p className="text-[#ACA0E4] text-xl font-medium  ">Top Users</p>
      </div>

      {/* Avatar Images */}
      <div className="z-10 flex space-x-[-10px] justify-center mt-2">
        <img
          src={Avatar1}
          alt="Star Icon"
          className="w-16 h-16 rounded-full border-4 border-[#191934] bg-[#FCE6D8]"
        />
        <img
          src={Avatar}
          alt="User 1"
          className="w-16 h-16 rounded-full border-4 border-[#191934]"
        />
        <img
          src={Avatar2}
          alt="User 2"
          className="w-16 h-16 rounded-full border-4 border-[#191934]"
        />
      </div>
    </GradientCardWrapper>

    <GradientCardWrapper
      onClick={() => {
        setIsModalOpen(true);
        setModalType("carousel");
      }}
      className={
        "h-[120px] w-64 justify-center hover:cursor-pointer hover:scale-105 transition-transform duration-300"
      }
    >
      <button className="hover:cursor-pointer relative bg-gradient-to-r from-[#A879F5] to-[#743EE0] text-white font-medium px-8 py-4 rounded-full flex items-center gap-2 text-lg shadow-inner shadow-[#0e0e1d]">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1%,_transparent_70%)] pointer-events-none" />
        <img src={FileIcon} />
        Generate
      </button>
    </GradientCardWrapper>
  </div>
);

export default LeftPanel;
