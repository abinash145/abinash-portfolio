import React from "react";

import Image from "next/image";

export default function SectionPortfolio() {
  const portfolioData = [
    {
      title: "Mero Event",
      description:
        "Mero Event is a comprehensive event management solution designed to simplify the planning process. It enables users to discover and book all essential services for events, such as venues, photographers,hosts, decorators, and other vendors, all in one place",
      tech: [
        "Next js",
        "Yarn Workspace",
        "TypeScript",
        "Tailwind CSS",
        "Shade Cn",
        "Zustand",
        "Monorepo",
      ],
      img: "/images/meroevent.png",
      link: "https://meroevent.com/",
    },
    {
      title: "Go my Go",
      description:
        "Go My Go is a user-friendly bus ticket booking platform designed to simplify travel planning. It solves the problem of manual ticket reservations by enabling users to book seats online with real-time seat availability and instant confirmation.",
      tech: [
        "React",
        "Socket.io",
        "Nx Workspace",
        "Redux Toolkit",
        "TypeScript",
        "Tailwind CSS",
        "Monorepo",
        "Shade Cn",
      ],
      img: "/images/gomygo.png",
      link: "https://gomygo.com/",
    },
    {
      title: "Makkuse",
      description:
        "Makkuse is an online website for most delectavke Gundpak, Pustakari, etc made from the freshest khuwa that arrives from the hish altitudes of Kavre, Nepal.",
      tech: ["React", "SCSS", "Bootstrap", "Axios"],
      img: "/images/makkusé.png",
      link: "https://www.makkuse.com/",
    },
    {
      title: "Gurkha Finance",
      description:
        "Gurkha is an online website for most  delectavke Gundpak, Pustakari, etc made from the freshest khuwa that arrives from the hish altitudes of Kavre, Nepal.",
      tech: ["React", "SCSS", "Bootstrap", "Axios"],
      img: "/images/gurkhasFInance.png",
      link: "https://www.gurkhasfinance.com.np/",
    },
  ];
  // const otherProject = [
  //   {
  //     img: "/images/trekcard.png",
  //     link: "https://trekcard.app/",
  //     style: "w-16 mb-[-4px]",
  //   },

  //   {
  //     img: "/images/nrna-logo.png",
  //     link: "https://globalnrna.org",
  //     style: "w-16  mb-[-1px]",
  //   },

  //   {
  //     img: "/images/unitech.png",
  //     link: "https://www.unitechmedia.com.np",
  //     style: "",
  //   },
  //   {
  //     img: "/images/shilaamrit.png",
  //     link: "https://www.shilaamrit.com.np/",
  //     style: "w-[88px] bg-black",
  //   },
  // ];
  return (
    <section id="project" className="">
      <div className="container">
        <h4 className="mb-2 ">Portfolio</h4>
        <h3 className="mb-[60px] ">Some of the project I have done</h3>
        <div className="">
          {portfolioData.map((item, index) => (
            <div
              className={`bg-white  p-5 rounded-xl grid grid-cols-6 gap-4 lg:items-center  shadow-[0_0_10px_rgba(0,0,0,0.1)] mb-[50px] `}
              key={index}
            >
              <a
                href={item.link}
                target="_blank"
                className={`w-[530px] max-w-full h-[360px] overflow-hidden  rounded-xl col-span-3 lg:col-span-6 ${
                  index % 2 != 0 && "order-2"
                }`}
              >
                <Image
                  src={item.img}
                  width={530}
                  height={360}
                  alt=""
                  className="transition-[transform] hover:translate-y-[-77%] translate-y-0 duration-[10000ms]"
                />
              </a>
              <div className="flex justify-center grow col-span-3 lg:col-span-6">
                <div className=" pt-4">
                  <h4 className="mb-2 text-center text-[#2d2e32] order-1">
                    {item.title}
                  </h4>
                  <p className="mb-6 text-center">{item.description}</p>
                  <div className="flex justify-center gap-2 mb-[30px] text-center flex-wrap">
                    {item.tech.map((tech, index) => (
                      <span
                        className=" px-4 py-2 font-bold text-base  shadow-[0_0_10px_rgba(0,0,0,0.1)]  "
                        key={index}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6 justify-center item">
                    {/* <div className="flex gap-1 items-end">
                      <Github />
                      <p>Code</p>
                    </div> */}
                    <a
                      href={item.link}
                      target="_blank"
                      className="flex gap-1 items-end"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="black"
                        strokeWidth="2"
                        strokLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-view"
                      >
                        <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
                        <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
                        <circle cx="12" cy="12" r="1" />
                        <path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" />
                      </svg>
                      <p>Live Demo</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className=" shadow-[0_0_10px_rgba(0,0,0,0.1)] bg-white rounded-lg p-5">
          <h4 className="mb-2 text-center text-[rgb(45,46,50)]">
            Some Other Project
          </h4>
          <div className="flex justify-center items-end flex-wrap  gap-6 gap-y-6">
            {otherProject.map((item, index) => (
              <a
                href={item.link}
                className={item.style}
                target="_blank"
                key={index}
              >
                <Image src={item.img} alt="" width={60} height={60} />
              </a>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
