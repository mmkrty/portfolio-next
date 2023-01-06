import React from "react";
import SectionHeading from "../sectionHeading/sectionHeading";
import ProjectCard from "../projectCard/projectCard";
import Link from "next/link";

function Projects({ projects }) {
  // console.log(projects);
  return (
    <section
      id="projects"
      className="min-h-screen max-w-5xl mx-auto flex justify-center items-center mb-24"
    >
      <div className="flex flex-col justify-center items-center mx-6 xs:mx-14">
        <div>
          <SectionHeading title="Projects" />

          <div className="flex flex-col gap-12 my-12">
            {projects.map((project, idx) => (
              <ProjectCard key={project._id} project={project} index={idx} />
            ))}
          </div>

          <div className="flex justify-center items-center">
            <Link
              className="inline-block text-primary_yellow font-fira py-4 px-6 border rounded-sm border-primary_yellow hover:bg-primary_yellow hover:bg-opacity-20 transition-all ease-in-out duration-300"
              href="https://github.com/mmkrty"
              target="_blank"
            >
              Check out my Github for more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
