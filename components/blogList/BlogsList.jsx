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
          <div key={idx} className="flex flex-col">
            <Link href="/blogs/[slug]" as={`/blogs/${post.slug.current}`}>
              <h2 className="text-4xl font-semibold">{post.title}</h2>
            </Link>
            <p className="italic">
              {new Date(post._updatedAt).toLocaleDateString("en-Us", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <p>{post.description}</p>
            <div className="flex gap-2">
              {post.categories.map((category, idx) => {
                return (
                  <div key={idx}>
                    <p>{category.title}</p>
                  </div>
                );
              })}
            </div>

            <Link href="/blogs/[slug]" as={`/blogs/${post.slug.current}`}>
              Read post
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogsList;
