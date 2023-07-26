import React from "react";
import SectionHeading from "../sectionHeading/sectionHeading";
import LinkButton from "../linkButton/linkButton";

function Contact() {
  return (
    <section
      id="contact"
      className="max-w-5xl my-40 mx-auto flex justify-center items-center md:min-h-screen"
    >
      <div className="flex flex-col justify-center items-center mx-6 xs:mx-14">
        <SectionHeading title="Contact" />

        <p className="max-w-xl text-justify mb-10">
          I am currently actively searching for new opportunities. If you have a
          project or opportunity that aligns with my skillset, or if you are
          interested in collaborating on a project, please don't hesitate to
          reach out to me. I look forward to hearing from you.
        </p>
        <LinkButton href="mailto:liuhaoch1990@gmail.com" content="Let's Chat" />
      </div>
    </section>
  );
}

export default Contact;
