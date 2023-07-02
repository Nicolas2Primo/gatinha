import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

export default function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-[200px] h-[200px]"
      >
        <SwiperSlide className="">
          <div className="flex items-center justify-center w-full h-full bg-red-500 rounded-2xl ">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex items-center justify-center w-full h-full bg-red-500 rounded-2xl">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex items-center justify-center w-full h-full bg-red-500 rounded-2xl ">
            Slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex items-center justify-center w-full h-full bg-red-500 rounded-2xl ">
            Slide 3
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex items-center justify-center w-full h-full bg-red-500 rounded-2xl ">
            Slide 4
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex items-center justify-center w-full h-full bg-red-500 rounded-2xl ">
            Slide 5
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
