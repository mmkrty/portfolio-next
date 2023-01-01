import React from "react";
import Head from "next/head";
import Hero from "../components/hero/hero";
import About from "../components/about/about";
import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";
import Skills from "../components/skills/skills";
import Projects from "../components/projects/projects";

export default function Home() {
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
        <Projects />
      </main>
    </>
  );
}
