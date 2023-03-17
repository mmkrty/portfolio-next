import React, { useEffect } from "react";
import Link from "next/link";
import SectionHeading from "../sectionHeading/sectionHeading";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  fadeInRightVariant,
  fadeInLeftVariant,
} from "../../framer_varients/varients";

function About() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <section
      id="about"
      className="min-h-screen max-w-5xl my-0 mx-auto flex justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center gap-4 mx-6 xs:mx-14 md:flex-row-reverse md:gap-8 md:items-start">
        <motion.div
          ref={ref}
          variants={fadeInRightVariant}
          initial="hidden"
          animate={control}
          className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-primary_yellow md:w-auto md:h-full md:rounded-md"
        >
          <img
            className="object-cover scale-150 object-left origin-[10%_45%]"
            src="/thumb.png"
            alt="haochen"
          />
        </motion.div>
        <motion.div
          ref={ref}
          variants={fadeInLeftVariant}
          initial="hidden"
          animate={control}
          className="mt-4"
        >
          <SectionHeading title="About me" />
          <p className=" mb-2">
            My interest in web development began when I attended a digital
            humanities workshop during my studies. I realized that in order to
            reach more people, high-quality content needs to be supported by
            modern technologies. I believe the web is the most powerful and
            universal medium, so I decided to give web development a try and
            ended up loving it.
          </p>
          <p className="mb-2">
            After a year of self-learning and 9 weeks of intensive training at
            Le Wagon, I'm looking forward to working full-time as a web
            developer. Recently, I have been learning React, NextJS, and Rails
            by building projects with them.
          </p>
          <Link
            href="/blogs/this-is-my-first-blog-post"
            className="font-fira text-lg mt-2 hover:text-primary_yellow"
          >
            <span className="pr-2 hover:pr-4 hover:text-primary_yellow transition-all ease-in-out duration-300 ">
              Find out more about me
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
