"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import required modules
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

export default function Hero() {
  return (
    <section className="h-full text-center">
      <Swiper
        navigation={true}
        effect={"fade"}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide className="img-section1 px-20 py-56">
          <small className="font-thin">
            WE MAKE A DIFFERENCE IN YOUR LIVES
          </small>
          <h1 className="text-6xl lg:w-2/4 md:w-2/4 sm:w-unset m-auto font-bold pt-5 pb-10">
            Find True Beauty of the sunset years
          </h1>
          <button className="bg-yellow p-6 py-2">WHO WE ARE</button>
        </SwiperSlide>
        <SwiperSlide className="img-section2 px-20 py-56">
          <small className="w-2/4 m-auto font-thin">
            WE MAKE A DIFFERENCE IN YOUR LIVES
          </small>
          <h1 className="text-6xl w-2/4 m-auto font-bold pt-5 pb-10">
            Find True Beauty of the sunset years
          </h1>
          <button className="bg-yellow p-6 py-2">WHO WE ARE</button>
        </SwiperSlide>
        <SwiperSlide className="img-section3 px-20 py-56">
          <small className="w-2/4 m-auto font-thin">
            WE MAKE A DIFFERENCE IN YOUR LIVES
          </small>
          <h1 className="text-6xl w-2/4 m-auto font-bold pt-5 pb-10">
            Find True Beauty of the sunset years
          </h1>
          <button className="bg-yellow p-6 py-2">WHO WE ARE</button>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
