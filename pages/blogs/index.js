import React from "react";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import BlogsList from "../../components/blogList/BlogsList";
import BlogHeader from "../../components/blogHeader/blogHeader";

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
    <div className="min-h-screen">
      <BlogHeader />
      <BlogsList posts={posts} />
    </div>
  );
}

export default Blogs;
