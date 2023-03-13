import React from "react";

import Hero from "../components/hero/hero";
import About from "../components/about/about";
import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";
import Skills from "../components/skills/skills";
import Projects from "../components/projects/projects";
import Contact from "../components/contact/contact";

const projectQuery = groq`
  *[_type=='project' && featured == true] {
    ...,  
    technologies[]->
  } | order(order asc)
`;

export const getStaticProps = async ({ preview = false }) => {
  const projects = await client.fetch(projectQuery);

  return { props: { projects } };
};

export default function Home({ projects }) {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Contact />
    </main>
  );
}
