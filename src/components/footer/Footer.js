import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="bg-blue-dark p-24 flex justify-between text-white-dark">
      <div className="office">
        <h1 className="text-2xl mb-8">Office</h1>
        <p className="text-lg">United Kingdom - 785 15h Street, <br /> Office 478 Berlin, De 81566</p>
        <p className="text-lg">
          {" "}
          <Link href="mailto:info@lqshealthcareservices.co.uk">
            info@lqshealthcareservices.co.uk
          </Link>
        </p>
        <p className="text-lg">
          <Link href="tel:1840 841 25 69">+1840 841 25 69</Link>
        </p>
      </div>
      <div className="links">
        <h1 className="text-xl mb-5">Office</h1>
        <div className="flex flex-col gap-5">
          <Link href="/">Home</Link>
          <Link href="/">Services</Link>
          <Link href="/">About us</Link>
          <Link href="/">Features</Link>
          <Link href="/">Contacts</Link>
        </div>
      </div>
      <div className="socials">
        <h1 className="text-xl mb-5">Socials</h1>
        <div className="flex flex-col gap-5">
          <Link href="/">Facebook</Link>
          <Link href="/">Twitter</Link>
          <Link href="/">Dribble</Link>
          <Link href="/">Instagram</Link>
        </div>
      </div>
    </section>
  );
}
