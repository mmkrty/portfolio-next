import React from "react";
import SectionHeading from "../sectionHeading/sectionHeading";
import ProjectCard from "../projectCard/projectCard";
import LinkButton from "../linkButton/linkButton";

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
            <LinkButton
              href="https://github.com/mmkrty"
              content="Check out my Github for more"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
