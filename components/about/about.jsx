import React from "react";

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
          <h2 className="text-3xl font-semibold mb-2">About me</h2>
          <p className=" mb-2">
            Hi there, this is Hao Chen. I'm a Web developer and Historian based
            in Berlin.
          </p>
          <p className=" mb-2">
            My interest in web development originated from a digital humanities
            workshop I attended during my studies. I realized great content
            today needs up-to-date technologies to reach more audiences.
          </p>
          <p>
            Since I consider the web as the most powerful and universal medium,
            I decided to give web development a try and eventually fell in love
            with it. After a year of self-learning and 9 weeks of intensive
            training at Le Wagon, I'm looking forward to working as a web
            developer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
