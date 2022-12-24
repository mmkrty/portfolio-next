import React from "react";
import Head from "next/head";
import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";

export default function Home() {
  return (
    <>
      <Head>
        <title>This is Hao Chen</title>
        <meta name="description" content="Hao Chen's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">Hello there</h1>
      </main>
    </>
  );
}
