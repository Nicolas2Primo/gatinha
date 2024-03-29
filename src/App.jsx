import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./App.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";


export default function App() {
  const totalVideos = 8; // Total number of videos to load
  const [loadedVideos, setLoadedVideos] = useState(0); // Loaded videos counter

  const videoRef = useRef(null);



  // Function to handle video loaded
  const handleVideoLoaded = () => {
    setLoadedVideos(loadedVideos + 1);
  };

  const [simba, setSimba] = useState([
    ["img", "./5.jpg"],
    ["video", "./30.mp4"],
    ["img", "./6.jpg"],
    ["img", "./38.jpg"],
    ["video", "./27.mp4"],
    ["img", "./8.jpg"],
    ["img", "./37.jpg"],
    ["video", "./21.mp4"],
    ["img", "./9.jpg"],
    ["video", "./28.mp4"],
    ["img", "./36.jpg"],
    ["video", "./29.mp4"],
    ["img", "./13.jpg"],
    ["video", "./39.mp4"],
    ["video", "./45.mp4"],
    ["img", "./46.jpg"],
    ["img", "./47.jpg"],
  ]);
  const [nicolas, setNicolas] = useState([
    ["img", "./44.jpg"],
    ["img", "./43.jpg"],
    ["img", "./42.jpg"],
    ["img", "./41.jpg"],
    ["img", "./40.jpg"],
    ["img", "./7.jpg"],
    ["img", "./14.jpg"],
    ["img", "./31.jpg"],
    ["img", "./32.jpg"],
    ["img", "./33.jpg"],
    ["img", "./15.jpg"],
    ["img", "./16.jpg"],
    ["video", "./22.mp4"],
    ["video", "./35.mp4"],
    ["video", "./34.mp4"],
    ["img", "./17.jpg"],
  ]);
  const [us, setUs] = useState([
    ["img", "./49.jpg"],
    ["img", "./1.jpg"],
    ["img", "./26.jpg"],
    ["img", "./2.jpg"],
    ["img", "./3.jpg"],
    ["img", "./10.jpg"],
    ["video", "./19.mp4"],
    ["img", "./11.jpg"],
    ["img", "./12.jpg"],
    ["video", "./18.mp4"],
    ["img", "./48.jpg"],
  ]);




  return (
    <div className="flex flex-col items-center justify-center w-full gap-2 mt-10 h-fulls">
      
      <div className="flex flex-col items-center justify-center gap-2">
        <span className=" font-black text-[10px] lg:text-[20px] text-white text-center">O vídeo que eu queria ter mostrado para você no dia 31/12/23, quando nós estaríamos fazendo 7 meses juntos</span>
        <span className=" font-black text-[7px] lg:text-[14px] text-white text-center">{"(Se quiser escutar o som é só tirar do mudo)"}</span>
        <video
        ref={videoRef}
        src="\last.mp4"
        pla
        autoPlay
        muted
        loop
        preload="metadata"
        playsInline
        controlsList="true"
          
        controls
          
        className="w-[250px] md:w-[500px] lg:w-[900px] rounded-xl"  
      />
      </div>
      <div className="flex flex-col items-center justify-between w-full md:p-20 lg:p-40 md:flex-row">
        <div className="flex flex-col items-center justify-center md:scale-130 lg:scale-150">
        <span className=" font-black text-[22px] text-white">Us</span>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-[200px] h-[200px] "
        >
          {us.map((data, key) => (
            <SwiperSlide key={key} className="rounded-2xl">
              {data[0] == "img" ? (
                <img
                  src={data[1]}
                  className="object-cover h-[200px] w-[240px]"
                />
              ) : (
                <video
                  src={data[1]}
                  autoPlay
                  loop
                  muted
                  preload="metadata"
                  playsInline
                  controlsList="false"
                  onLoadedData={handleVideoLoaded}
                  className="object-cover h-[225px] w-full"
                />
              )}
            </SwiperSlide>
          ))}
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
          {nicolas.map((data, key) => (
            <SwiperSlide key={key} className="rounded-2xl">
              {data[0] == "img" ? (
                <img
                  src={data[1]}
                  className={`object-cover h-[200px] w-[240px] ${
                    key == 7 ? "h-[280px]" : ""
                  } ${key == 1 ? "h-[300px] " : ""}`}
                />
              ) : (
                <video
                  src={data[1]}
                  autoPlay
                  loop
                  muted
                  preload="metadata"
                  playsInline
                  controlsList="false"
                  onLoadedData={handleVideoLoaded}
                  className="object-cover h-[225px] w-full"
                />
              )}
            </SwiperSlide>
          ))}
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
          {simba.map((data, key) => (
            <SwiperSlide key={key} className="rounded-2xl">
              {data[0] == "img" ? (
                <img
                  src={data[1]}
                  className={`object-cover ${key == 0 ? "h-[400px]" : ""} ${
                    key == 3 ? "h-[300px]" : ""
                  } ${key == 15 ? "h-[300px]" : ""} ${
                    key == 16 ? "h-[300px]" : ""
                  } h-[200px] w-[240px]`}
                />
              ) : (
                <video
                  src={data[1]}
                  autoPlay
                  loop
                  muted
                  preload="metadata"
                  playsInline
                  controlsList="false"
                  onLoadedData={handleVideoLoaded}
                  className="object-cover h-[225px] w-full"
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>
      <span className="text-lg text-white">Eu te amei de verdade {":)"}</span>
    </div>
  );
}
