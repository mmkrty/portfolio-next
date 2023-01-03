import React from "react";
import Head from "next/head";
import Hero from "../components/hero/hero";
import About from "../components/about/about";
import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";
import Skills from "../components/skills/skills";
import Projects from "../components/projects/projects";

const projectQuery = groq`
  *[_type=='project'] {
    ...,  
    technologies[]->
  } | order(_createdAt asc)
`;

export const getStaticProps = async ({ preview = false }) => {
  const projects = await client.fetch(projectQuery);

  return { props: { projects } };
};

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <title>Hao Chen</title>
        <link rel="icon" href="/7.svg" />
        <meta name="description" content="Hao Chen's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects projects={projects} />
      </main>
    </>
  );
}
