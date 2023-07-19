"use client"

import React, { useRef, useState } from "react";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import author from "public/author.jpeg";
import Image from "next/image";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

export default function Testimonials() {
  return (
    <section className="bg-white text-black text-center p-24 ">
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <Image
            src={author}
            alt="Authors"
            width={80}
            className="rounded-full m-auto mb-11"
          />
          <p className="w-2/4 m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            rem impedit porro, et deleniti voluptates autem incidunt,
            necessitatibus, nisi ex praesentium fugiat? At ipsa natus possimus
            sit, eos debitis rerum.
          </p>
          <div className="author py-8">
            <BiSolidQuoteAltRight className="m-auto text-2xl text-blue " />
            <p className="font-bold ">Jim Fisher</p>
            <p className="text-grey">New York</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <Image
            src={author}
            alt="Authors"
            width={80}
            className="rounded-full m-auto mb-11"
          />
          <p className="w-2/4 m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            rem impedit porro, et deleniti voluptates autem incidunt,
            necessitatibus, nisi ex praesentium fugiat? At ipsa natus possimus
            sit, eos debitis rerum.
          </p>
          <div className="author py-8">
            <BiSolidQuoteAltRight className="m-auto text-2xl text-blue " />
            <p className="font-bold ">John Micheal</p>
            <p className="text-grey">United Kingdom</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <Image
            src={author}
            alt="Authors"
            width={80}
            className="rounded-full m-auto mb-11"
          />
          <p className="w-2/4 m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            rem impedit porro, et deleniti voluptates autem incidunt,
            necessitatibus, nisi ex praesentium fugiat? At ipsa natus possimus
            sit, eos debitis rerum.
          </p>
          <div className="author py-8">
            <BiSolidQuoteAltRight className="m-auto text-2xl text-blue " />
            <p className="font-bold ">Micheal Ayo</p>
            <p className="text-grey">Manchester</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
