import React from "react";
import Image from "next/image";
import urlFor from "../../lib/urlFor";
import Link from "next/link";

function BlogsList({ posts }) {
  console.log(posts);
  return (
    <div className="max-w-5xl mx-auto">
      <div className=" gap-10 pb-24 flex flex-col  mx-6 xs:mx-14">
        {posts.map((post, idx) => (
          <div key={idx} className="flex flex-col md:w-3/4">
            <Link href="/blogs/[slug]" as={`/blogs/${post.slug.current}`}>
              <h2 className="text-4xl font-semibold hover:text-primary_yellow transition-all ease-in-out duration-300">
                {post.title}
              </h2>
            </Link>
            <p className="italic">
              {new Date(post._updatedAt).toLocaleDateString("en-Us", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>

            <p className="my-2 text-justify">{post.description}</p>

            <div className="flex gap-2 mt-2">
              {post.categories.map((category, idx) => {
                return (
                  <div
                    key={idx}
                    className="bg-primary_blue text-white px-2 py-1 rounded-md "
                  >
                    <p>{category.title}</p>
                  </div>
                );
              })}
            </div>

            <Link
              href="/blogs/[slug]"
              as={`/blogs/${post.slug.current}`}
              className="font-fira text-lg mt-2 hover:text-primary_yellow"
            >
              <span className="pr-2 hover:pr-4 hover:text-primary_yellow transition-all ease-in-out duration-300 ">
                Read post
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogsList;
