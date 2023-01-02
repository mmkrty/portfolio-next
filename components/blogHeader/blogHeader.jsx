import React from "react";

function BlogHeader() {
  return (
    <section className="min-h-1/2-screen max-w-5xl my-28 mx-auto flex justify-center items-center">
      <div className="mx-6 xs:mx-14">
        <h1 className="text-6xl font-black text-primary_yellow mb-2">
          My Blog
        </h1>
        <p>
          Hey there! My name is Hao Chen, and I'm a historian and self-taught
          web developer. Before entering the tech world, I spent my days buried
          in books and academic papers, earning my BA and MA in history. But
          these days, you'll find me more often buried in lines of code instead.
        </p>
        <p>
          Don't worry, though, I haven't completely left my history roots
          behind. I still love diving into a topic of interest, reading about
          it, and telling its stories. And now, as a web developer, I get to
          combine my love of history with my love of building things on the
          internet.
        </p>
        <p>
          So what can you expect from my blog? A mix of interesting historical
          stories, thoughts on the latest web technologies, and updates on my
          journey as both a historian and developer. It's going to be a fun
          ride, so join me!
        </p>
      </div>
    </section>
  );
}

export default BlogHeader;
