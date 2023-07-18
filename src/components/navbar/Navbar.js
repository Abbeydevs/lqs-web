"use client";

import React from "react";
import Image from "next/image";
import logo from "public/logo.png";
import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";
import { Dialog } from "@headlessui/react";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";

export default function Navbar() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Testimonials", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "contact" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="flex justify-between items-center gap-10 p-5 lg:px-12 bg-white text-black"
      aria-label="Global"
    >
      <div className="flex lg:flex-1 items-center gap-24">
        <Link href="/">
          <Image src={logo} alt="lqs logo" className="w-28" />
        </Link>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex lg:gap-8 gap-2 lg:items-center">
        <Link href="tel:18004585697" className="">
          <div className="call-icon bg-green rounded-full p-2 text-white">
            <BiPhoneCall size={20} />
          </div>
        </Link>
        <Link href="/contact">
          <button className="hidden lg:flex btn bg-blue text-white-fade p-3 px-8 text-sm hover:bg-blue-dark">
            CONTACT US
          </button>
        </Link>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <MdMenu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image src={logo} alt="lqs logo" className="w-28" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <MdClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="tel:18004585697"
                  className="hidden items-center gap-3 "
                >
                  <div className="call-icon bg-green rounded-full p-2 text-white">
                    <BiPhoneCall size={20} />
                  </div>{" "}
                  <span>1 800 458 56 97</span>
                </Link>
                <Link href="/contact">
                  <button className="btn bg-blue text-white-fade p-3 px-8 text-sm hover:bg-blue-dark">
                    CONTACT US
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </nav>
  );
}
