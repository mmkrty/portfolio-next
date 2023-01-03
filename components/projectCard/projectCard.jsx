import React from "react";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../components/RichTextComponents";
import urlFor from "../../lib/urlFor";
import Image from "next/image";

function ProjectCard({ project, index }) {
  return (
    <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
      <div className="relative rounded-sm overflow-hidden md:self-stretch">
        <img
          className="object-contain h-full w-full md:object-cover"
          src={urlFor(project.image).url()}
          alt={project.name}
        />
        {/* <Image
          className="object-cover"
          src={urlFor(project.image).url()}
          alt={project.name}
          priority="high"
          fill
        /> */}
      </div>

      <div className={`${index % 2 !== 0 ? "order-first" : ""}`}>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-2xl font-semibold">{project.name}</h3>
          <div className="flex gap-2">
            <a href={project.link} className="inline-block" target="_blank">
              <img
                src="/icons/external_link_icon.svg"
                alt="link"
                className="filter-grey"
                width="32px"
              />
            </a>
            <a href={project.github} className="inline-block" target="_blank">
              <img
                src="/icons/github_icon.svg"
                alt="github"
                className="filter-grey"
                width="32px"
              />
            </a>
          </div>
        </div>

        <PortableText
          value={project.description}
          components={RichTextComponents}
        />
        <div className="font-fira flex gap-2 mb-3 flex-wrap">
          {project.technologies.map((tech, idx) => (
            <p key={idx}>{tech.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
