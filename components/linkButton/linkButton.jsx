import React from "react";
import Link from "next/link";

function LinkButton(props) {
  return (
    <Link
      className="inline-block text-primary_yellow font-fira py-4 px-6 border rounded-sm border-primary_yellow hover:bg-primary_yellow hover:bg-opacity-20 transition-all ease-in-out duration-300"
      href={props.href}
      target="_blank"
    >
      {props.content}
    </Link>
  );
}

export default LinkButton;
