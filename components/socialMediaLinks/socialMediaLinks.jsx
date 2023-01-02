import React from "react";
import Link from "next/link";

function SocialMediaLinks() {
  return (
    <div className="gap-4 fixed left-0 bottom-32 mt-6 flex-col hidden lg:ml-6 lg:flex">
      <Link
        href="https://github.com/mmkrty"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          src="/icons/github_icon.svg"
          alt="github"
          className="filter-grey"
          width="32px"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/liu-hao-chen/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          src="/icons/linkedin_icon.svg"
          alt="linkedin"
          className="filter-grey"
          width="32px"
        />
      </Link>
      <Link
        href="https://twitter.com/mmkrty"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          src="/icons/twitter_icon.svg"
          alt="twitter"
          className="filter-grey"
          width="32px"
        />
      </Link>
      <Link
        href="https://medium.com/@mmkrty"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          src="/icons/medium_icon.svg"
          alt="medium"
          className="filter-grey"
          width="32px"
        />
      </Link>
    </div>
  );
}

export default SocialMediaLinks;
