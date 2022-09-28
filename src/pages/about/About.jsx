import React from "react";

export default function About(props) {
  return (
    <div className="width-content">
      <section className="pb-4 pt-2">
        <h1>About Me</h1>
      </section>
      <section>
        <img
          className="about_img float-end ps-2"
          src="../images/image013.jpeg"
          alt="my photo"
          width="200"
        />
        <p>
          Hi everyone and welcome to my blog! I am a MA Dance Education student,
          who loves dancing and dance teaching. I am only 24, which keeps me at
          the beginning of my dance performing and teaching career. Blogs are
          inspiring to me and so I decided to write my own to capture all the
          future adventures. I really hope it will be similar to the ones of
          <a target="_blank" href="http://www.raulpacheco.org/blog/">
            {" "}
            Raul Pacheco-Vega
          </a>{" "}
          or{" "}
          <a target="_blank" href="https://www.jessicazeller.net/">
            Jessica Zeller
          </a>
          . I know, impossible...but they say ´never say never´!
        </p>
        <p>
          When I moved to England I went to a lively and sunny town in the south
          called Chichester. There I studied my Bachelor's degree in Dance
          Performance. After that, it was time for London. In London, I managed
          to get to{" "}
          <a target="_blank" href="https://www.londonstudiocentre.org/">
            London Studio Centre
          </a>
          , where I am studying until now the previously mentioned Masters in
          Dance Education.
        </p>
        <p>
          The last thing to know about me is that I teach dance, geography and
          czech language. And often I go to dance myself to dance studios in
          London like{" "}
          <a target="_blank" href="https://www.pineapple.uk.com/">
            Pineapple
          </a>
          ,{" "}
          <a target="_blank" href="https://www.basedancestudios.com/">
            Base Studios
          </a>{" "}
          or{" "}
          <a target="_blank" href="https://studio68london.net/">
            Studio 68
          </a>
          .
        </p>
        <p>
          Oh yeah, and did I tell you I did a research project? About the
          outcomes you can <a href="/blog-posts">read here!</a>
        </p>
      </section>
      <section className="pt-5 video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ddqeqJCMiRs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="figure-caption">
          Teaching Showreel - Eliska Sperkova
        </div>
      </section>
    </div>
  );
}
