import LinkButton from "../linkButton/linkButton";
import React from "react";

function Hero() {
  return (
    <section
      id="#"
      className="min-h-screen max-w-5xl my-0 mx-auto flex justify-center items-center"
    >
      <div className="mx-6 xs:mx-14">
        <p className="font-fira mb-5">Hi, this is</p>
        <h1 className="text-6xl font-black mb-2  text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-white">
          Hao Chen, Liu
        </h1>
        <h2 className="text-5xl font-medium mb-6">
          Web Developer & Historian based in Berlin
        </h2>
        <div>
          <LinkButton
            href="https://drive.google.com/file/d/1SYO1eUENk_ViJMsa-CN4GzDU91MY_H04/view?usp=share_link"
            content="Download My CV"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
