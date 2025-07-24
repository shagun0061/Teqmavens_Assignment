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

const TopUserCarousel = () => {
  return (
    <div className="relative w-full flex justify-center items-center py-10">
      <Swiper
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={200}
        loop={false}
        effect="coverflow"
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="w-full swiper-custom"
      >
        {cards.map((card) => (
          <SwiperSlide
            key={card.id}
            className="flex justify-center items-center relative"
            style={{
              width: "280px",
              height: "400px",
              display: "flex",
            }}
          >
            <img
              src={GredCard}
              alt="card background"
              className="absolute left-0  object-cover rounded-[30px] z-0 rotate-10 blur-xs "
            />
            <img
              src={GredCard}
              alt="card background"
              className="absolute top-5 object-cover rounded-[30px] z-0 -rotate-10 blur-xs"
            />
            <img
              src={GredCard}
              alt="card background"
              className="absolute left-0 object-cover rounded-[30px] z-0"
            />

            <div className="relative z-10 flex flex-col items-center w-full h-full text-white hover:cursor-pointer">
              <p className="text-[40px] mt-10 font-bold text-transparent bg-clip-text bg-[linear-gradient(170deg,_#FFB266_0%,_#E9766F_49%,_#C04350_100%)] ">
                {card.uses}
              </p>
              <img
                src={card.img}
                alt={card.name}
                className="w-44 h-44 mt-4 rounded-full"
              />
              <p className="text-[30px] font-bold drop-shadow-lg">
                {card.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopUserCarousel;
