import React from "react";

import { Github, Linkedin } from "./icon";

export default function Footer() {
  return (
    <footer className="py-[50px] bg-[#2d2e32]">
      <div className="container">
        <div className="content flex items-center gap-4 justify-center">
          <h4 className="text-left">You can Check other data from</h4>
          <div className="flex items-center gap-2 smd:justify-center">
            <a
              href="https://www.linkedin.com/in/abinash-rai-013b05213/"
              target="_blank"
              className="text-black"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/abinash145"
              target="_blank"
              className="text-black"
            >
              <Github />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
