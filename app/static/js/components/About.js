import React from "react";

export const About = function(props) {
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
        library. It uses sexual reproduction as a metaphor to procedurally
        generate deities that feel related.
      </p>
    </div>
  );
};
