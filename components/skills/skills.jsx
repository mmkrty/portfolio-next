import React from "react";

function Skills() {
  return (
    <section className="min-h-screen max-w-5xl my-0 mx-auto flex justify-center items-center">
      <div className="flex flex-col justify-center  mx-6">
        <h2 className="text-3xl font-semibold mb-2">Skills</h2>
        <p>
          In addition to HTML5, CSS3, and Javascript ES6+, here are some of the
          techs I worked with:
        </p>
        <div className="font-fira">
          <div>
            <h3 className="text-xl font-semibold">Frontend</h3>
            <div>
              <div>
                <h4>React</h4>
              </div>
              <div>
                <h4>NextJS</h4>
              </div>
              <div>
                <h4>Tailwind CSS</h4>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Backend & BaaS</h3>
            <div>
              <div>
                <h4>Ruby on Rails</h4>
              </div>
              <div>
                <h4>Firebase</h4>
              </div>
              <div>
                <h4>Sanity</h4>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Database</h3>
            <div>
              <div>
                <h4>PostgresQL</h4>
              </div>
              <div>
                <h4>SQLite</h4>
              </div>
              <div>
                <h4>MongoDb</h4>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Other tools</h3>
            <div>
              <div>
                <h4>Git</h4>
              </div>
              <div>
                <h4>Github</h4>
              </div>
              <div>
                <h4>Figma</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
