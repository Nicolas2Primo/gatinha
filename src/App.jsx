import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./App.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function App() {
  const totalVideos = 8; // Total number of videos to load
  const [loadedVideos, setLoadedVideos] = useState(0); // Loaded videos counter

  // Function to handle video loaded
  const handleVideoLoaded = () => {
    setLoadedVideos(loadedVideos + 1);
  };

  return (
    <div className="flex flex-wrap h-full w-full lg:w-screen lg:h-screen  items-center justify-center gap-20 mt-32 mb-32 md:mt-12 md:mb-12 lg:mb-0 lg:mt-0 md:gap-[250px] md:flex-row ">
      <div className="flex flex-col items-center justify-center md:scale-130 lg:scale-150">
        <span className=" font-black text-[22px] text-white">Us</span>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-[200px] h-[200px] "
        >
          <SwiperSlide className=" rounded-2xl">
            <img src="./1.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className=" rounded-2xl">
            <img
              src="./26.jpg"
              alt=""
              className="object-cover h-[200px] w-[240px]"
            />
          </SwiperSlide>

          <SwiperSlide className="rounded-2xl">
            <img src="./2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <video
              src="./18.mp4"
              autoPlay
              loop
              muted
              preload="metadata"
              playsInline
              controlsList="false"
              onLoadedData={handleVideoLoaded}
              className="object-cover h-[225px] w-full"
            />
          </SwiperSlide>
          <SwiperSlide className=" rounded-2xl">
            <img
              src="./3.jpg"
              alt=""
              className="object-cover h-[200px] w-full"
            />
          </SwiperSlide>

          <SwiperSlide className="rounded-2xl">
            <img src="./10.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <video
              src="./19.mp4"
              loop
              autoPlay
              muted
              preload="metadata"
              playsInline
              controlsList="false"
              onLoadedData={handleVideoLoaded}
              className="object-cover w-full h-[200px]"
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <img src="./11.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <img src="./12.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex flex-col items-center justify-center md:scale-130 lg:scale-150">
        <span className=" font-black text-[22px] text-white">
          The lov of your life
        </span>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-[200px] h-[200px]"
        >
          <SwiperSlide className=" rounded-2xl">
            <img
              src="./7.jpg"
              alt=""
              className="h-[200px] object-cover w-full"
            />
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
              src="./31.jpg"
              alt=""
              className="object-cover h-[280px] w-[240px]"
            />
          </SwiperSlide>
          <SwiperSlide className=" rounded-2xl">
            <img
              src="./32.jpg"
              alt=""
              className="object-cover h-[200px] w-[240px]"
            />
          </SwiperSlide>
          <SwiperSlide className=" rounded-2xl">
            <img
              src="./33.jpg"
              alt=""
              className="object-cover h-[200px] w-[240px]"
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
            <video
              src="./22.mp4"
              autoPlay
              loop
              muted
              preload="metadata"
              playsInline
              controlsList="false"
              onLoadedData={handleVideoLoaded}
              className="object-cover h-[200px] w-full"
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <video
              src="./35.mp4"
              autoPlay
              loop
              muted
              preload="metadata"
              playsInline
              controlsList="false"
              onLoadedData={handleVideoLoaded}
              className="object-cover h-[200px] w-full"
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <video
              src="./34.mp4"
              autoPlay
              loop
              muted
              preload="metadata"
              playsInline
              controlsList="false"
              onLoadedData={handleVideoLoaded}
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
        </Swiper>
      </div>

      <div className="flex flex-col items-center justify-center text-center md:scale-130 lg:scale-150">
        <span className=" font-black text-[22px] text-white">
          The second lov of your life
        </span>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-[200px] h-[200px]"
        >
          <SwiperSlide className=" rounded-2xl">
            <img
              src="./5.jpg"
              alt=""
              className="h-[400px] object-cover w-full"
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <video
              src="./30.mp4"
              autoPlay
              loop
              muted
              preload="metadata"
              playsInline
              controlsList="false"
              onLoadedData={handleVideoLoaded}
              className="object-cover h-[225px] w-full"
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <img
              src="./6.jpg"
              alt=""
              className="h-[200px] object-cover w-full"
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <video
              src="./27.mp4"
              autoPlay
              loop
              muted
              preload="metadata"
              playsInline
              controlsList="false"
              onLoadedData={handleVideoLoaded}
              className="object-cover h-[225px] w-full"
            />
          </SwiperSlide>
          <SwiperSlide className=" rounded-2xl">
            <img
              src="./8.jpg"
              alt=""
              className="object-cover h-[200px] w-full"
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <video
              src="./21.mp4"
              autoPlay
              loop
              muted
              preload="metadata"
              playsInline
              controlsList="false"
              onLoadedData={handleVideoLoaded}
              className="object-cover h-[200px] w-full"
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <img
              src="./9.jpg"
              alt=""
              className="object-cover h-[200px] w-full"
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <video
              src="./28.mp4"
              autoPlay
              loop
              muted
              preload="metadata"
              playsInline
              controlsList="false"
              onLoadedData={handleVideoLoaded}
              className="object-cover h-[225px] w-full"
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <video
              src="./29.mp4"
              autoPlay
              loop
              muted
              preload="metadata"
              playsInline
              controlsList="false"
              onLoadedData={handleVideoLoaded}
              className="object-cover h-[225px] w-full"
            />
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
    </div>
  );
}
