import React from "react";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import BlogsList from "../../components/BlogsList";

const postQuery = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export const getStaticProps = async ({ preview = false }) => {
  const posts = await client.fetch(postQuery);

  return { props: { posts } };
};

function Blogs({ posts }) {
  console.log(posts[0].slug);
  return (
    <div>
      <h1>This is my blogs</h1>
      <BlogsList posts={posts} />
    </div>
  );
}

export default Blogs;
