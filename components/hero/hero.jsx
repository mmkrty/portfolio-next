import LinkButton from "../linkButton/linkButton";
import React, { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInBottomVariant } from "../../framer_varients/varients";

function Hero() {
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
    <motion.section
      ref={ref}
      variants={fadeInBottomVariant}
      initial="hidden"
      animate={control}
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
            href="https://drive.google.com/file/d/1iMJzZM6w9iVe0ukuEdX4SGJB2upADkWm/view?usp=sharing"
            content="Download My CV"
          />
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
