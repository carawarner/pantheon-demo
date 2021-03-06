import React from "react";

export const About = function() {
  return (
    <div className="text-is-centered">
      <h1 className="title">Pantheon Generator</h1>

      <p className="description">
        This is a{" "}
        <a className="link" href="https://github.com/carawarner/pantheon-demo">
          demo
        </a>{" "}
        of the{" "}
        <a className="link" href="https://github.com/carawarner/pantheon">
          Pantheon Generator
        </a>{" "}
        library. It uses sexual reproduction as a metaphor to generate deities
        that feel related.
      </p>

      <p className="description">
        Fill out the form below <b>(all fields are required)</b>. Your{" "}
        {"Parents of Creation"} will procreate, producing divine children,
        grandchildren, great-grandchildren, etc. This is your pantheon.
      </p>
    </div>
  );
};
