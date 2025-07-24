import { GiftButton } from "../assets/imageExport";

const TempCard = ({ icon, title, subtitle, img }) => {
  return (
    <div className="relative w-[380px] h-[300px] rounded-2xl bg-gradient-to-br from-[#7B5FFF] to-[#5737D6] shadow-xl flex flex-col p-6">
      <div className="absolute left-0 top-12 z-20 flex items-center ">
            <div className="w-8 h-1 flex items-center justify-center  -mr-3 bg-black"></div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full  bg-black ">
              <img src={GiftButton} alt="Branching Paths Button" />
            </div>
          </div>
      {img ? (
        <img
          src={img}
          alt="Card Visual"
          className="mx-auto mt-2 mb-6 w-16 h-16 object-cover rounded-sm"
        />
      ) : (
        <div className="mx-auto mt-2 mb-6 w-16 h-16 bg-gray-200 rounded-sm" />
      )}

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

export default TempCard;
