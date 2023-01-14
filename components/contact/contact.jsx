import React from "react";
import SectionHeading from "../sectionHeading/sectionHeading";
import Link from "next/link";

function Contact() {
  return (
    <section
      id="contact"
      className="max-w-5xl my-40 mx-auto flex justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center mx-6 xs:mx-14">
        <SectionHeading title="Contact" />

        <p className="max-w-xl text-justify">
          I am currently actively searching for new opportunities. If you have a
          project or opportunity that aligns with my skillset, or if you are
          interested in collaborating on a project, please don't hesitate to
          reach out to me. I look forward to hearing from you.
        </p>
        <Link
          className="inline-block text-primary_yellow font-fira py-4 px-6 mt-6 border rounded-sm border-primary_yellow hover:bg-primary_yellow hover:bg-opacity-20 transition-all ease-in-out duration-300"
          href="mailto:liuhaoch1990@gmail.com"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}

export default Contact;
