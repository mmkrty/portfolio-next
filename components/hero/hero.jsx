import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section className="min-h-screen max-w-5xl my-0 mx-auto flex justify-center items-center">
      <div className="mx-6 xs:mx-14">
        <p className="font-fira mb-5">Hi, this is</p>
        <h1 className="text-6xl font-black text-primary_yellow mb-2">
          Hao Chen
        </h1>
        <h2 className="text-5xl font-medium mb-6">
          Web Developer & Historian based in Berlin
        </h2>
        <div>
          <Link
            className="inline-block text-primary_yellow font-fira py-4 px-6 border rounded-sm border-primary_yellow"
            href="#"
          >
            Check out my projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
