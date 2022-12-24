import React from "react";
import groq from "groq";
import { client } from "../../lib/sanity.client";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../components/RichTextComponents";
import urlFor from "../../lib/urlFor";

const query = groq`
  *[_type=='post' && defined(slug.current)] {
    ...,
    author->,
    categories[]->
  } 
`;

export async function getStaticPaths() {
  const posts = await client.fetch(query);
  const paths = posts.map((post) => ({
    params: { slug: post.slug.current },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async ({ params: { slug } }) => {
  const posts = await client.fetch(query, { slug });
  const post = posts[0];
  return { props: { post } };
};

export function BlogPost({ post }) {
  console.log(post);
  return (
    <div>
      <h1>{post.title}</h1>
      <PortableText value={post.body} components={RichTextComponents} />
    </div>
  );
}

export default BlogPost;
