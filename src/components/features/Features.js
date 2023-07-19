import React from "react";
import Image from "next/image";
import featImg from "public/ab-image.png";

export default function Features() {
  return (
    <section className="bg-white-fade p-24 text-black lg:flex justify-center items-center lg:gap-10 md:gap-32">
      <div className="left-container">
        <p className="text-sm font-bold">WELCOME</p>
        <h1 className="text-6xl font-semibold pt-4">We Deliver Quality Caregiving<br /> Services</h1>
        <p className="text-lg font-semibold py-5">We Embrace Care and Comfort.</p>
        <p className="text-md font-thin pb-8 text-grey">
          At LQS HealthCare Services Ltd, we believe in providing a warm and
          nurturing environment that feels like home. Our dedicated team of
          compassionate caregivers is committed to enhancing the lives of our
          residents through personalised care and attention.
        </p>
        <button className="bg-blue px-6 py-3 text-white">WHAT WE OFFER</button>
      </div>
      <div className="right-container">
        <Image src={featImg} alt="Features" width={2000} />
      </div>
    </section>
  );
}
