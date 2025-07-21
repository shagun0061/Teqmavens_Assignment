import { Avatar, Avatar1, Avatar2, FileIcon } from "../assets/imageExport";
import GradientCardWrapper from "./GradientCardWrapper";

const LeftPanel = ({ setIsModalOpen, setModalType }) => (
  <div className=" rounded text-center flex flex-col items-center justify-between gap-10">
    <div className="min-h-[350px]">
      <GradientCardWrapper className={"h-full w-64 text-left justify-between"}>
        <div className="z-10">
          <h2 className="text-2xl font-semibold tracking-[-1%] leading-[30px] bg-[linear-gradient(170deg,_#fff,_#aa9cfc)] text-transparent bg-clip-text">
            Create <br />
            your own <br />
            template
          </h2>
        </div>

        <div className="z-10 text-sm ">
          <p className="font-semibold leading-[28px] animate-shine">
            14 days trial
          </p>
          <p className="text-[#ACA0E4] text-xs">after – $5/month</p>
        </div>
      </GradientCardWrapper>
    </div>

    <div className=" min-h-[350px] flex flex-col items-center justify-between">
      <GradientCardWrapper
        onClick={() => {
          setIsModalOpen(true);
          setModalType("slider");
        }}
        className={
          "h-[200px] w-64 text-left hover:cursor-pointer hover:scale-105 transition-transform duration-300"
        }
      >
        <div className="z-10 text-center">
          <h1 className="inline-block text-5xl tracking-[-2%] font-semibold text-transparent bg-clip-text bg-[linear-gradient(170deg,_#FFB266_0%,_#E9766F_49%,_#C04350_100%)] animate-celebrate">
            20
          </h1>
          <p className="text-[#B2A1FD] text-xl font-medium animate-celebrate-text">
            Top Users
          </p>
        </div>

        {/* Avatar Images */}
        <div className="z-10 flex space-x-[-10px] justify-center mt-2">
          <img
            src={Avatar1}
            alt="Star Icon"
            className="w-16 h-16 rounded-full border-4 border-[#191934] bg-[#FCE6D8] animate-avatar"
          />
          <img
            src={Avatar}
            alt="User 1"
            className="w-16 h-16 rounded-full border-4 border-[#191934] animate-avatar"
          />
          <img
            src={Avatar2}
            alt="User 2"
            className="w-16 h-16 rounded-full border-4 border-[#191934] animate-avatar"
          />
        </div>
      </GradientCardWrapper>

      <div
        onClick={() => {
          setIsModalOpen(true);
          setModalType("carousel");
        }}
        className={
          "bg-[#191934] text-white rounded-2xl p-6 flex flex-col  shadow-md relative overflow-hidden h-[120px] w-64 justify-center hover:cursor-pointer hover:scale-105 transition-transform border-2 border-[#111228] duration-300"
        }
      >
        <button className="animate-blink hover:cursor-pointer relative bg-[#6032d7] text-white font-medium px-8 py-4 rounded-full flex items-center gap-2 text-lg shadow-inner shadow-[#]">
          <img src={FileIcon} />
          Generate
        </button>
      </div>
    </div>
  </div>
);

export default LeftPanel;
