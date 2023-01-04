import React from "react";
import Image from "next/image";
import urlFor from "../../lib/urlFor";
import Link from "next/link";

function BlogsList({ posts }) {
  console.log(posts.length);
  return (
    <div className="max-w-5xl mx-auto">
      <div className=" gap-10 pb-24 grid grid-cols-1 md:grid-cols-2  mx-6 xs:mx-14">
        {posts.map((post, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="relative w-full h-80">
              <Link href="/blogs/[slug]" as={`/blogs/${post.slug.current}`}>
                <Image
                  className="object-cover"
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                />
              </Link>
              <div className="absolute bottom-0 w-full bg-black bg-opacity-20 backdrop-blur-lg drop-shadow-lg text-white p-4 flex justify-between ">
                <div>
                  <p>{post.title}</p>
                  <p>
                    {new Date(post._createdAt).toLocaleDateString("en-Us", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <div>
                  {post.categories.map((category, idx) => {
                    return (
                      <div key={idx}>
                        <p>{category.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div>
              <p>{post.title}</p>
              <p>{post.description}</p>
            </div>

            <p>Read post</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogsList;
