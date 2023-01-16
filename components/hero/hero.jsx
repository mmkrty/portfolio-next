import Link from "next/link";
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
          <Link
            className="inline-block text-primary_yellow font-fira py-4 px-6 border rounded-sm border-primary_yellow hover:bg-primary_yellow hover:bg-opacity-20 transition-all ease-in-out duration-300"
            href="https://drive.google.com/file/d/1SYO1eUENk_ViJMsa-CN4GzDU91MY_H04/view?usp=share_link"
            target="_blank"
          >
            Download My CV
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
