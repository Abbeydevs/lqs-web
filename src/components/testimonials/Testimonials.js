"use client";

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
            As a family member, it's crucial to know your loved one is in
            capable and caring hands. That's exactly what we found at LQS
            Healthcare Services . The caregivers' professionalism and genuine
            care for their residents are commendable.
          </p>
          <div className="author py-8">
            <BiSolidQuoteAltRight className="m-auto text-2xl text-blue " />
            <p className="font-bold ">Emily T.</p>
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
            From the moment we stepped into LQS Healthcare Services, we were
            impressed by the caregivers' warm and welcoming demeanor. They took
            the time to get to know our mom, her preferences, and her routine.
          </p>
          <div className="author py-8">
            <BiSolidQuoteAltRight className="m-auto text-2xl text-blue " />
            <p className="font-bold ">John Micheals</p>
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
            I cannot thank LQS Healthcare Services enough for the exceptional
            care they provided for my mother. The caregivers were not just
            attentive and skilled; they truly showed love and compassion towards
            her.
          </p>
          <div className="author py-8">
            <BiSolidQuoteAltRight className="m-auto text-2xl text-blue " />
            <p className="font-bold ">Micheal Williams</p>
            <p className="text-grey">Manchester</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
