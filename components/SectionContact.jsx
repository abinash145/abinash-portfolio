import React from "react";

import { Contact, LocationMap, Mail } from "./icon";

export default function SectionContact() {
  return (
    <section id="contact" className="">
      <div className="container">
        <h4 className="mb-2 ">CONTACT</h4>
        <h3 className="mb-[60px] ">
          Lets get to know each other. Don&apos;t be shy!
        </h3>
        <div className="flex items-center justify-between flex-wrap gap-y-4">
          <div className="flex items-center gap-2 ">
            <div className="w-[65px] h-[65px] px-4 rounded-[50%] overflow-hidden flex justify-center items-center bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]">
              <Mail />
            </div>
            <div className="">
              <h4 className="text-left">Location</h4>
              <p>Kathmandu, Nepal</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[65px] h-[65px] px-4 rounded-[50%] overflow-hidden flex justify-center items-center bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]">
              <LocationMap />
            </div>
            <div className="">
              <h4 className="text-left">Email</h4>
              <p>abinashrai14@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[65px] h-[65px] px-4 rounded-[50%] overflow-hidden flex justify-center items-center bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]">
              <Contact />
            </div>
            <div className="">
              <h4 className="text-left">Contact</h4>
              <p>+977 9804352197</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
