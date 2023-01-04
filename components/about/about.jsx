import React from "react";
import SectionHeading from "../sectionHeading/sectionHeading";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen max-w-5xl my-0 mx-auto flex justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center gap-4 mx-6 xs:mx-14 md:flex-row-reverse md:gap-8 md:items-start">
        <div className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-primary_yellow md:w-auto md:h-full md:rounded-md">
          <img
            className="object-cover scale-150 object-left origin-[10%_45%]"
            src="/thumb.png"
            alt="haochen"
          />
        </div>
        <div className="mt-4">
          <SectionHeading title="About me" />
          <p className=" mb-2">
            Hi there, this is Hao Chen. I'm a Web developer and Historian based
            in Berlin.
          </p>
          <p className=" mb-2">
            My interest in web development began when I attended a digital
            humanities workshop during my studies. I realized that in order to
            reach more people, high-quality content needs to be supported by
            modern technologies. I believe the web is the most powerful and
            universal medium, so I decided to give web development a try and
            ended up loving it.
          </p>
          <p>
            After a year of self-learning and 9 weeks of intensive training at
            Le Wagon, I'm looking forward to working full-time as a web
            developer. Recently, I have been learning React, NextJS, and Rails
            by building projects with them.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
