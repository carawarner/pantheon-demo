import React from "react";
import PropTypes from "prop-types";
import { God } from "./God";

export const Pantheon = function(props) {
  return (
    <div className="text-is-centered">
      <h3 className="title">{props.gods.length > 0 ? "Results" : ""}</h3>
      {props.gods.map((god, i) => (
        <div key={"god" + i}>
          <God god={god} />
        </div>
      ))}
    </div>
  );
};

Pantheon.propTypes = {
  gods: PropTypes.array.isRequired
};
