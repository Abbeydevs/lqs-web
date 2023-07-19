import React from "react";
import Image from "next/image";
import img1 from "public/img1.jpeg";
import img2 from "public/img2.jpeg";
import img3 from "public/img3.jpeg";

export default function Blog() {
  return (
    <section className="bg-white-extra-fade p-24 gap-6 text-black text-center">
      <p className="text-sm font-normal">OUR BLOG</p>
      <h1 className="text-6xl font-bold pt-2 pb-16">Latest News</h1>
      <div className="post-container flex justify-between items-center gap-10 px-32">
        <div className="blog-posts">
          <Image src={img1} alt="blog posts" width={500} />
          <p className="pt-11 text-md">
            Ayo Micheal | <span className="text-grey">December 21, 2023</span>
          </p>
          <h1 className="text-3xl font-bold">Helping a Loved one manage Parkinson's Disease</h1>
        </div>
        <div className="blog-posts">
          <Image src={img2} alt="blog posts" width={500} />
          <p className="pt-11 text-md">
            Ayo Micheal | <span className="text-grey">December 21, 2023</span>
          </p>
          <h1 className="text-3xl font-bold">Helping a Loved one manage Parkinson's Disease</h1>
        </div>
        <div className="blog-posts">
          <Image src={img3} alt="blog posts" width={500} />
          <p className="pt-11 text-md">
            Ayo Micheal | <span className="text-grey">December 21, 2023</span>
          </p>
          <h1 className="text-3xl font-bold">Helping a Loved one manage Parkinson's Disease</h1>
        </div>
      </div>
    </section>
  );
}
