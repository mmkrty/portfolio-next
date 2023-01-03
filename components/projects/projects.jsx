import React from "react";
import SectionHeading from "../sectionHeading/sectionHeading";
import ProjectCard from "../projectCard/projectCard";

function Projects({ projects }) {
  // console.log(projects);
  return (
    <section
      id="projects"
      className="min-h-screen max-w-5xl my-0 mx-auto flex justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center mx-6 xs:mx-14">
        <div>
          <SectionHeading title="Projects" />

          <div className="flex flex-col gap-8 mt-10">
            {projects.map((project, idx) => (
              <ProjectCard key={project._id} project={project} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
