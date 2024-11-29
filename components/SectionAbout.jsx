import React from "react";

import Image from "next/image";

export default function SectionAbout() {
  return (
    <section id="about" className="bg-white">
      <div className="container bg-white ">
        <div className="flex lg:flex-col lg:items-center lg:gap-8">
          <div className="w-[50%] relative pr-14 lg:pr-[initial] lg:grow lg:w-[initial] bg-white ">
            <Image
              src={"/images/aboutMe.jpg"}
              alt=""
              width={490}
              height={292}
              className="max-w-[490px] rounded-lg"
            />
            <div className="w-[190px] h-[190px] absolute bottom-[-70px] rounded-[50%] overflow-hidden right-0 translate-y-[50%] animate-rotated lg:hidden ">
              <Image
                src={"/images/frontEndDev.svg"}
                alt=""
                width={190}
                height={190}
                className="   bg-white w-full"
              />
            </div>
            <Image
              src={"/images/laptopAvatar.png"}
              alt=""
              width={60}
              height={60}
              className="absolute right-[13%] size-[60px] bottom-[36px] translate-y-[50%] lg:hidden"
            />
          </div>
          <div className="w-[50%] lg:grow lg:w-[initial] bg-white ">
            <h4 className="mb-2">ABOUT ME</h4>
            <h3 className="mb-4">
              A dedicated Front-end Developer based in Lalitpur, Nepal
            </h3>
            <p>
              As a Front-End Developer, I possess a versatile skill set in HTML,
              CSS, JavaScript, React, Tailwind CSS, SCSS, Next and TypeScript,
              with advanced expertise in tools like Yarn Workspace, Nx
              Workspace, and Storybook. I excel in designing and maintaining
              responsive, user-centric websites and applications with seamless
              Server-Side Rendering (SSR) and optimized performance. My
              proficiency includes developing dynamic, engaging interfaces using
              clean, efficient code, as well as leveraging cutting-edge
              technologies and frameworks. I am skilled in monorepo management,
              ensuring streamlined codebases and efficient workflows. As a team
              player, I thrive in cross-functional collaboration
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
