"use client";
import React, { useState } from "react";

import Image from "next/image";

export default function Header() {
  const [navShow, setNavShow] = useState(false);
  const headerLink = [
    { title: "Home", link: "#home" },
    { title: "About", link: "#about" },
    { title: "Projects", link: "#project" },
    { title: "Testomonial", link: "#testomonial" },
    { title: "Contact", link: "#contact" },
  ];
  return (
    <>
      <nav className="flex items-center justify-between py-[25px] pl-[50px] pr-[40px] bg-white shadow-sm fixed w-full top-0 left-0 z-10">
        <h3 className="">Abinash Rai</h3>

        <ul className="flex gap-6 [&>li]:font-medium [&>li>a]: bg-white md:hidden">
          {headerLink.map((item, index) => (
            <li className="bg-white" key={index}>
              <a href={item.link} className="hover:text-blue-200 bg-white">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <span
          className="bg-transparent w-6 hidden md:block"
          onClick={() => setNavShow(true)}
        >
          <Image src="/images/hamburger.svg" alt="" width={24} height={24} />
        </span>
      </nav>
      <div
        aria-current={navShow}
        className=" justify-center items-center h-screen w-full fixed  top-0 bg-white transition-[left] ease-in-out duration-500 hidden md:left-[-100%] md:flex md:aria-[current=true]:left-0 z-10 min-h-screen"
      >
        <span
          className="absolute right-6 top-6 bg-transparent w-6"
          onClick={() => setNavShow(false)}
        >
          <Image src="/images/cross.svg" alt="" width={24} height={24} />
        </span>
        <ul className="  [&>li]:font-medium [&>li>a]:text-lg bg-white ">
          {headerLink.map((item, index) => (
            <li className="bg-white mb-4" key={index}>
              <a href={item.link} className="hover:text-blue-200 bg-white">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
