"use client";

import React, { useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { TbHeartHandshake } from "react-icons/tb";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

// import required modules
import { Autoplay, FreeMode } from "swiper/modules";

export default function Featswiper() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={50}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, FreeMode]}
      className="mySwiper"
    >
      <SwiperSlide className="bg-white shadow-md p-11 px-8 hover:bg-yellow">
        <TbHeartHandshake className="text-6xl my-5" />
        <h1 className="text-2xl font-bold">Compassionate Caregivers</h1>
        <p className="py-5 text-grey">
          Our experienced and caring staff members treat each resident with
          dignity, respect, and empathy, ensuring...
        </p>
        <BsArrowRight />
      </SwiperSlide>
      <SwiperSlide className="bg-white shadow-md p-11 px-8 hover:bg-yellow">
        <TbHeartHandshake className="text-6xl my-5" />
        <h1 className="text-2xl font-bold">Comfortable Accommodations</h1>
        <p className="py-5 text-grey">
          Our thoughtfully designed living spaces offer all the comforts of home
          while promoting safety and accessibility....
        </p>
        <BsArrowRight />
      </SwiperSlide>
      <SwiperSlide className="bg-white shadow-md p-11 px-8 hover:bg-yellow">
        <TbHeartHandshake className="text-6xl my-5" />
        <h1 className="text-2xl font-bold">Tailored Care Plans</h1>
        <p className="py-5 text-grey">
          We understand that each individual has unique needs and preferences.
          That's why we create personalised care plans to meet the specific
          requirements...
        </p>
        <BsArrowRight />
      </SwiperSlide>
      <SwiperSlide className="bg-white shadow-md p-11 px-8 hover:bg-yellow">
        <TbHeartHandshake className="text-6xl my-5" />
        <h1 className="text-2xl font-bold">Engaging Activities</h1>
        <p className="py-5 text-grey">
          We believe in promoting a vibrant and stimulating lifestyle. Our
          residents enjoy a range of activities and social events that foster a
          sense of community and joy....
        </p>
        <BsArrowRight />
      </SwiperSlide>
      <SwiperSlide className="bg-white shadow-md p-11 px-8 hover:bg-yellow">
        <TbHeartHandshake className="text-6xl my-5" />
        <h1 className="text-2xl font-bold">Nutritious Dining</h1>
        <p className="py-5 text-grey">
          Good food is an essential part of overall well-being. Our skilled
          chefs prepare delicious and nutritious meals that cater to individual
          dietary needs and preferences...
        </p>
        <BsArrowRight />
      </SwiperSlide>
      <SwiperSlide className="bg-white shadow-md p-11 px-8 hover:bg-yellow">
        <TbHeartHandshake className="text-6xl my-5" />
        <h1 className="text-2xl font-bold">Safety and Security</h1>
        <p className="py-5 text-grey">
          Your loved one's safety is our utmost priority. Our facility is
          equipped with state-of-the-art security measures to provide peace of
          mind for our clients and partners...
        </p>
        <BsArrowRight />
      </SwiperSlide>
    </Swiper>
  );
}
