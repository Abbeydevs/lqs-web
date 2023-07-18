import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-8 px-32 bg-white text-black">
      <Link href="/">
        <h1>LQS Healthcare</h1>
      </Link>
      <div className="nav-links flex gap-8 items-center">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/">Testimonials</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="p-num flex gap-8 items-center">
        <Link href="tel:18004585697">
          <i>icon</i> {""}1 800 458 56 97
        </Link>
        <button className="btn bg-blue text-white-fade p-3 px-10">
          MAKE AN APPOINTMENT
        </button>
      </div>
    </nav>
  );
}
