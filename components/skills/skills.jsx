import React from "react";
import SectionHeading from "../sectionHeading/sectionHeading";

function Skills() {
  return (
    <section
      id="skills"
      className="max-w-5xl my-0 mx-auto flex justify-center items-center mb-24 md:min-h-screen"
    >
      <div className="flex flex-col justify-center mx-6 xs:mx-14 w-full">
        <SectionHeading title="Skills" />
        <p>Here are some tech skills I've delved into:</p>
        <div className="font-fira mt-3 gap-4 grid grid-cols-1 md:grid-cols-2">
          <div className="bg-primary_black_light py-3 px-4 rounded-sm">
            <h3 className="text-xl font-semibold">Frontend</h3>
            <div className="flex justify-around items-end my-6 gap-2">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="/icons/html5_icon.svg"
                  alt="HTML5"
                  className="filter-grey"
                  width="48px"
                />
                <h4 className="mt-1">HTML5</h4>
              </div>

              <div className="flex flex-col justify-center items-center">
                <img
                  src="/icons/css3_icon.svg"
                  alt="CSS3"
                  className="filter-grey"
                  width="52px"
                />
                <h4 className="mt-1">CSS3</h4>
              </div>

              <div className="flex flex-col justify-center items-center">
                <img
                  src="/icons/javascript_icon.svg"
                  alt="Javascript"
                  className="filter-grey"
                  width="48px"
                />
                <h4 className="mt-1">Javascript</h4>
              </div>
            </div>
          </div>

          <div className="bg-primary_black_light py-3 px-4 rounded-sm">
            <h3 className="text-xl font-semibold">Frameworks/Libraries</h3>
            <div className="flex justify-around items-end my-6 gap-2">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="/icons/reactjs_icon.svg"
                  alt="react"
                  className="filter-grey"
                  width="48px"
                />
                <h4 className="mt-1">React</h4>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  src="/icons/nextjs_icon.svg"
                  alt="nextjs"
                  className="filter-grey"
                  width="48px"
                />
                <h4 className="mt-1">NextJS</h4>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  src="/icons/tailwind_css_icon.svg"
                  alt="tailwind"
                  className="filter-grey"
                  width="48px"
                />
                <h4 className="mt-1">Tailwind</h4>
              </div>
            </div>
          </div>

          <div className="bg-primary_black_light py-3 px-4 rounded-sm">
            <h3 className="text-xl font-semibold ">Backend & Database</h3>
            <div className="flex justify-around items-end my-6 gap-2 ">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="/icons/on_ruby_rails_icon.svg"
                  alt="rails"
                  className="filter-grey"
                  width="48px"
                />
                <h4 className="mt-1">Rails</h4>
              </div>

              <div className="flex flex-col justify-center items-center">
                <img
                  src="/icons/postgresql_icon.svg"
                  alt="postgresQL"
                  className="filter-grey"
                  width="48px"
                />
                <h4 className="mt-1">PostgreSQL</h4>
              </div>

              <div className="flex flex-col justify-center items-center">
                <img
                  src="/icons/logo_firebase_icon.svg"
                  alt="firebase"
                  className="filter-grey"
                  width="48px"
                />
                <h4 className="mt-1">Firebase</h4>
              </div>
            </div>
          </div>

          <div className="bg-primary_black_light py-3 px-4 rounded-sm">
            <h3 className="text-xl font-semibold">Other tools</h3>
            <div className="flex justify-around items-end my-6 gap-2">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="/icons/git_icon.svg"
                  alt="git"
                  className="filter-grey"
                  width="48px"
                />
                <h4 className="mt-1">Git</h4>
              </div>
              <div>
                <img
                  src="/icons/github_icon.svg"
                  alt="github"
                  className="filter-grey"
                  width="48px"
                />
                <h4 className="mt-1">Github</h4>
              </div>
              <div>
                <img
                  src="/icons/figma_icon.svg"
                  alt="figma"
                  className="filter-grey"
                  width="48px"
                />
                <h4 className="mt-1">Figma</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
