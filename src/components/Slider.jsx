import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { girlAvatar, GredCard } from "../assets/imageExport";

const cards = [
  {
    id: 1,
    uses: "20k Use",
    name: "Monye Matt",
    img: girlAvatar,
  },
  {
    id: 2,
    uses: "10k Use",
    name: "Lisa Ray",
    img: girlAvatar,
  },
  {
    id: 3,
    uses: "15k Use",
    name: "John Dee",
    img: girlAvatar,
  },
];

const Slider = () => {
  return (
    <div className="relative w-full flex justify-center items-center py-10">
      <Swiper
        centeredSlides={true}
        slidesPerView={"auto"}
        // navigation={true}
        spaceBetween={110}
        // modules={[EffectCoverflow, Pagination, Navigation]}
        className="w-full max-w-[380px] swiper-custom"
      >
        {cards.map((card) => (
          <SwiperSlide
            key={card.id}
            className="flex justify-center items-center relative"
            style={{ width: "280px", height: "400px" }}
          >
            {/* Background image */}
            <img
              src={GredCard}
              alt="card background"
              className="absolute  left-0 w-full h-full object-cover rounded-[30px] z-0 rotate-20 "
            />
            <img
              src={GredCard}
              alt="card background"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-[30px] z-0 -rotate-20"
            />
            <img
              src={GredCard}
              alt="card background"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-[30px] z-0"
            />

            {/* Foreground content */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-white hover:cursor-pointer">
              <p className="text-[35px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff9a9e] via-[#fad0c4] to-[#fad0c4] mb-3">
                {card.uses}
              </p>
              <img
                src={card.img}
                alt={card.name}
                className="w-24 h-24 mb-4 rounded-full"
              />
              <p className="text-[20px] font-bold drop-shadow-lg">
                {card.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
