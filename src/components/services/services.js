import React from "react";
import Featswiper from "../featSwiper/featswiper";

export default function Services() {
  return (
    <section className="bg-grey-light text-black p-24">
      <div className="top-content lg:flex justify-between py-24 gap-11 md:gap-11">
        <div className="lg:w-2/4">
          <p>WE CAN HELP</p>
          <h1 className="text-6xl font-semibold pt-2">Services</h1>
        </div>
        <div className="lg:w-2/4">
          <p className="text-grey">
            Why Choose LQS HealthCare Services Ltd? Our dedicated team of
            compassionate caregivers is committed to enhancing the lives of our
            residents through personalised care and attention.
          </p>
        </div>
      </div>
      <div className="main-content ">
        <Featswiper />
      </div>
    </section>
  );
}
