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
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-20 mt-32">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-[200px] h-[200px]"
      >
        <SwiperSlide className=" rounded-2xl">
          <img src="./1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl">
          <img src="./2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className=" rounded-2xl">
          <img src="./3.jpg" alt="" className="object-cover h-[200px] w-full" />
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl">
          <img src="./10.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl">
          <img src="./11.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl">
          <img src="./12.jpg" alt="" />
        </SwiperSlide>
      </Swiper>

      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-[200px] h-[200px]"
      >
        <SwiperSlide className=" rounded-2xl">
          <img src="./7.jpg" alt="" className="h-[200px] object-cover w-full" />
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl">
          <img
            src="./14.jpg"
            alt=""
            className="h-[200px] object-cover w-full"
          />
        </SwiperSlide>
        <SwiperSlide className=" rounded-2xl">
          <img
            src="./15.jpg"
            alt=""
            className="object-cover h-[200px] w-full"
          />
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl">
          <img
            src="./16.jpg"
            alt=""
            className="object-cover h-[200px] w-full"
          />
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl">
          <img
            src="./17.jpg"
            alt=""
            className="object-cover h-[200px] w-full"
          />
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl">
          <img src="./12.jpg" alt="" />
        </SwiperSlide>
      </Swiper>

      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-[200px] h-[200px]"
      >
        <SwiperSlide className=" rounded-2xl">
          <img src="./5.jpg" alt="" className="h-[400px] object-cover w-full" />
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl">
          <img src="./6.jpg" alt="" className="h-[200px] object-cover w-full" />
        </SwiperSlide>
        <SwiperSlide className=" rounded-2xl">
          <img src="./8.jpg" alt="" className="object-cover h-[200px] w-full" />
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl">
          <img src="./9.jpg" alt="" className="object-cover h-[200px] w-full" />
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl">
          <img
            src="./13.jpg"
            alt=""
            className="object-cover h-[200px] w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
