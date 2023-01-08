import React from "react";
import groq from "groq";
import Link from "next/link";
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

  // const paths = posts.map((post) => ({
  //   params: { slug: post.slug.current },
  // }));
  // console.log(paths);

  const slugs = posts.map((post) => post.slug.current);
  console.log(slugs);

  // return { paths, fallback: false };
  return {
    paths: slugs.map((slug) => `/blogs/${slug}`),
    fallback: false,
  };
}

// export const getStaticProps = async ({ params: { slug } }) => {
//   const posts = await client.fetch(query, { slug });
//   const post = posts[0];
//   return { props: { post } };
// };

export const getStaticProps = async ({ params }) => {
  console.log(params);
  // The slug is available in the params object
  const slug = params.slug;

  // Fetch the post from Sanity based on the slug
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug }
  );
  console.log("this is post", post);

  // Return the post data
  return {
    props: {
      post,
    },
  };
};

export function BlogPost({ post }) {
  return (
    <article className="min-h-screen max-w-3xl mt-36 mx-auto flex justify-center items-start">
      <div className="w-full mx-4">
        <h1 className="text-5xl font-bold mb-6">{post.title}</h1>
        <PortableText value={post.body} components={RichTextComponents} />
        <Link
          href="/blogs"
          className="inline-block text-primary_yellow font-fira py-4 px-6 border rounded-sm border-primary_yellow mt-10 hover:bg-primary_yellow hover:bg-opacity-20 transition-all ease-in-out duration-300"
        >
          Back to Blog
        </Link>
      </div>
    </article>
  );
}

export default BlogPost;
