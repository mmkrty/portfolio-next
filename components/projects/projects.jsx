import React from "react";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen max-w-5xl my-0 mx-auto flex justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center mx-6 xs:mx-14">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <div>
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
              <div className="rounded-sm overflow-hidden self-stretch">
                <img
                  src="/my_stoury.png"
                  className="h-full w-full object-cover"
                  alt="my stoury"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-3 ">
                  <h3 className="text-2xl font-semibold">My Stoury</h3>
                  <div className="flex gap-2">
                    <a href="" className="inline-block">
                      <img
                        src="/icons/external_link_icon.svg"
                        alt="link"
                        className="filter-grey"
                        width="32px"
                      />
                    </a>
                    <a href="" className="inline-block">
                      <img
                        src="/icons/github_icon.svg"
                        alt="github"
                        className="filter-grey"
                        width="32px"
                      />
                    </a>
                  </div>
                </div>

                <p className="mb-3">
                  My Stoury is a a travelling companion useful for planning a
                  journey, documenting it and posting its highlights. I built
                  this app with my team as the final project of Le Wagon Berlin.
                  This is a Ruby on Rails 7 application using PostgreSQL as the
                  database. We implemented Mapbox API to build the live map of
                  each trip plan, and utilized Stimulus JS to manipulate page
                  behaviours like interactive maps and chatrooms.
                </p>
                <div className="font-fira flex gap-2 mb-3 flex-wrap">
                  <p>Rails</p>
                  <p>Bootstrap</p>
                  <p>PostgresQL</p>
                  <p>Heroku</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
