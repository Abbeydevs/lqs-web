import React from "react";

export default function Contact() {
  return (
    <section className="bg-white flex justify-between items-center text-black">
      <div className="map w-2/4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.5868644713!2d-0.2667459745352271!3d51.528525722965284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sng!4v1689770563303!5m2!1sen!2sng"
          width="800"
          height="850"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <form className="form w-2/4 p-16">
        <p>CONTACT US</p>
        <h1 className="text-6xl font-bold mt-4 mb-11">
          Have Questions? <br /> Get in touch!
        </h1>

        <div className="flex justify-between gap-5 mt-8">
          <input
            type="text"
            placeholder="First name"
            className="w-2/4 border-b-2 border-grey outline-0 py-5"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-2/4 border-b-2 border-grey outline-0 py-5"
          />
        </div>
        <div className="flex justify-between gap-5 mt-8">
          <input
            type="email"
            placeholder="Email"
            className="w-2/4 border-b-2 border-grey outline-0 py-5"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-2/4 border-b-2 border-grey outline-0 py-5"
          />
        </div>
        <textarea
          className="mt-8 w-full border-b-2 border-grey outline-0 py-5"
          name=""
          id=""
          cols="30"
          rows="1"
          placeholder="Message"
        ></textarea>
        <button type="button" className="bg-yellow mt-8 p-3 px-8 text-white">Get in Touch</button>
      </form>
    </section>
  );
}
