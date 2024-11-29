import React from "react";

import Image from "next/image";

import { Github, Linkedin } from "./icon";

export default function SectionHero() {
  const techStackImage = [
    "/images/html.svg",
    "/images/css.svg",
    "/images/sass.svg",
    "/images/tailwind.svg",
    "/images/chakra.png",
    "/images/storybook.png",
    "/images/js.svg",
    "/images/react.svg",
    "/images/next.png",
    "/images/react-query.png",
    "/images/nx.png",
  ];
  return (
    <section id="home" className="mt-20 min-h-screen flex items-center">
      <div className="container">
        <div className="content max-w-[950px] m-auto px-8 ">
          <div className="flex justify-between smd:flex-col-reverse smd:items-center">
            <div className="max-w-[27rem] smd:text-center">
              <h1 className="text-5xl font-bold my-4 ">
                Front-End React Developer
              </h1>
              <p className="mb-8">
                Hi, I&apos;m Abinash Rai. A passionate Front-end React Developer
                based in Lalitpur, Kathmandu.
              </p>
              <div className="flex items-center gap-4 smd:justify-center mb-4">
                <button className="bg-[#5e59e5] px-8 py-3 rounded-md border hover:border-[#5e59e5] text-white font-bold">
                  <a
                    href={"/pdf/abinash-cv.pdf"}
                    download
                    className="text-white"
                  >
                    Download CV
                  </a>
                </button>
                <a
                  href="https://www.linkedin.com/in/abinash-rai-013b05213/"
                  target="_blank"
                  className=""
                >
                  <Linkedin propStyle="fill-current hover:fill-[#0967c5]" />
                </a>
                <a
                  href="https://github.com/abinash145"
                  target="_blank"
                  className=""
                >
                  <Github propStyle="fill-current hover:fill-black " />
                </a>
              </div>
            </div>
            <div
              id="profileImage"
              className="w-[20rem] h-[20rem] profileImage "
            />
          </div>
          <div className="flex items-center my-20 smd:flex-col ">
            <h4 className="pr-4 border-r-2 mr-8 smd:border-r-0 smd:border-b-2 smd:pr-[initial] smd:pb-2  smd:mb-4 text-black">
              Tech Stack
            </h4>
            <div>
              <ul className="flex gap-5 flex-wrap justify-center">
                {techStackImage.map((img, index) => (
                  <li
                    className=" px-4 rounded-full size-[60px] overflow-hidden flex justify-center items-center bg-white"
                    key={index}
                  >
                    <Image src={img} alt="" width={60} height={60} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
