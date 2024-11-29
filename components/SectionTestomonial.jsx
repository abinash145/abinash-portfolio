"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

import { LeftArrow, RightArrow } from "./icon";

export default function SectionTestomonial() {
  const testomonialData = [
    {
      name: "Subarna Khadka",
      img: "/images/subarna.jpeg",
      post: "Javascript Developer | Typescript",
      detail:
        "I've had the pleasure of working alongside Abinash Dai on several projects, and he consistently impress me with his deep understanding of frontend technologies. His expertise in React, Nextjs  and JavaScript, combined with a keen eye for design, makes him an invaluable team member. Abinash Dai  is not just a great developer but also a great collaborator.",
    },
    {
      name: "Jeevan Karki",
      img: "/images/jeevan.jpg",
      post: "Software Engineer | React & Next.js Specialist ",
      detail:
        "As an intern under Abinash Sir, I gained invaluable experience in React and Next.js. His expertise, patience, and ability to simplify complex concepts helped me improve my skills in state management, API integration, and performance optimization. His guidance was instrumental in shaping my understanding of modern frontend development.",
      link: "https://www.linkedin.com/in/jvnkarki/",
    },
    {
      name: "Babita Bhatt",
      img: "/images/babita.jpeg",
      post: "Web Developer | JavaScript | Next Js Developer",
      detail:
        "I had the pleasure of working with Abinash Rai on several projects, and I can confidently say that he is an outstanding frontend developer. Abinash possesses a deep understanding of modern web technologies and frameworks, which he leverages to create seamless, responsive, and user-friendly interfaces. His ability to seamlessly integrate complex functionalities with user-friendly designs is truly impressive.Abinash attention to detail and commitment to quality are evident in every line of code he writes. He has a keen eye for design and consistently ensures that the user experience is intuitive and engaging. His ability to quickly grasp project requirements and translate them into functional, aesthetically pleasing components sets him apart.Moreover, Abinash is a fantastic team player. He communicates effectively, collaborates well with designers and backend developers, and is always open to feedback. His proactive approach to problem-solving and his dedication to continuous learning make him an invaluable asset to any development team.I highly recommend him to anyone seeking top-notch frontend development expertise.",
      link: "https://www.linkedin.com/in/babita-bhatt-9abb34219/",
    },
    {
      name: "Chirag Thapa",
      img: "/images/chirag.jpeg",
      post: "Software Engineer",
      detail:
        "Working with Abinash Rai was an amazing experience. As a frontend developer, his creativity and passion were evident in every aspect of the project. He has a unique ability to bring designs to life in a way that is both visually striking and user-friendly. I worked as the backend developer, and our communication throughout the project was smooth and efficient. Abinash's collaborative approach made the entire process enjoyable, and his dedication to delivering high-quality results was inspiring. I wholeheartedly recommend Abinash for any frontend development projects",
      link: "https://www.linkedin.com/in/chirag-thapa-990357168/",
    },
    {
      name: "Arjun Saud",
      img: "/images/arjun.jpeg",
      post: "JavaScript | TypeScript | NestJs | NodeJs",
      detail:
        "I have had the privilege of working closely with Abinash Rai, an exceptional frontend developer in our IT company. Abinash has consistently demonstrated outstanding communication skills, effectively collaborating with the backend team to ensure seamless integration and project success.What truly sets Abinash apart is his ability to tackle complex software challenges with confidence and precision. He approaches each problem with a solution-oriented mindset and delivers innovative, efficient results that significantly enhance the overall quality of our projects.Working with Abinash has been a rewarding experience, and his professionalism, technical expertise, and collaborative spirit make him an invaluable asset to any team.",
      link: "https://www.linkedin.com/in/arjun-saud-2417a316a/",
    },
  ];
  const settings = {
    dots: true,
    // arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,
    nextArrow: (
      <RightArrow propStyle="absolute top-[50%] right-[-40px] translate-y-[-50%] cursor-pointer" />
    ),
    prevArrow: (
      <LeftArrow propStyle="absolute top-[50%] left-[-40px] translate-y-[-50%] cursor-pointer" />
    ),
    responsive: [
      {
        breakpoint: 500,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="bg-white " id="testomonial">
      <div className="container">
        <div className="bg-white p-5">
          <h4 className="mb-2 ">Testomonial</h4>
          <h3 className="mb-[60px] "> What people think about me</h3>
          <Slider {...settings} className="[&>.slick-list]:m-[-16px] ">
            {testomonialData.map((item, index) => (
              <div className="px-4 py-4" key={index}>
                <div className="shadow-[0_0_10px_rgba(0,0,0,0.1)] p-5  rounded-lg md:max-w-full">
                  <div className="flex gap-2 mb-4 lg:flex-col lg:items-center">
                    <Link
                      href={item.link || ""}
                      className="w-12 h-12 rounded-[50%] overflow-hidden"
                      target="_blank"
                    >
                      <Image src={item.img} alt="" width={48} height={48} />
                    </Link>
                    <div className="">
                      <h4 className=" text-[#2d2e32]">{item.name}</h4>
                      <p className="line-clamp-6">{item.post}</p>
                    </div>
                  </div>
                  <p className="line-clamp-6">{item.detail}</p>
                </div>
              </div>
            ))}
          </Slider>
          {/* <div className="flex justify-between flex-wrap gap-5"></div> */}
        </div>
      </div>
    </section>
  );
}
