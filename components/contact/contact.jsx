import React from "react";
import SectionHeading from "../sectionHeading/sectionHeading";
import LinkButton from "../linkButton/linkButton";

function Contact({ contacttext, email }) {
  return (
    <section
      id="contact"
      className="max-w-5xl my-40 mx-auto flex justify-center items-center md:min-h-screen"
    >
      <div className="flex flex-col justify-center items-center mx-6 xs:mx-14">
        <SectionHeading title="Contact" />

        <p className="max-w-xl text-justify mb-10">
          {contacttext}
        </p>
        <LinkButton href={email} content="Let's Chat" />
      </div>
    </section>
  );
}

export default Contact;
