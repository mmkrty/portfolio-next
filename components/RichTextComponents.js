import Image from "next/image";
import Link from "next/link";
import urlFor from "../lib/urlFor";

export const RichTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog post image"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }) => (
      <ul className="mt-lg list-decimal">{children}</ul>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-5xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-4xl py-8 font-bold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-3xl py-6 font-bold">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-2xl py-4 font-bold">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-500 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),

    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <Link
          href={value?.href}
          target={target}
          rel={target === "_blank" && "noindex nofollow"}
          className="underline"
        >
          {children}
        </Link>
      );
    },
  },
};
