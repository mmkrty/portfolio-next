import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-primary_black  opacity-90 p-4 text-primary_grey font-fira">
      <div className="container mx-auto">
        <div className="flex justify-center items-center  flex-col gap-6">
          <div className="flex gap-4 lg:hidden">
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

          <p>Built by Hao Chen Liu 2023</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
