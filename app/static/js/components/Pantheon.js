import React from "react";
import PropTypes from "prop-types";
import { God } from "./God";

export const Pantheon = function(props) {
  return (
    <div className="text-is-centered">
      {props.gods.length > 0 && (
        <h3 className="title">Generated {props.gods.length} Deities</h3>
      )}

      {props.gods.map((god, i) => (
        <div key={"god" + i}>
          <God god={god} />
        </div>
      ))}

      {props.gods.length > 0 &&
        props.gods.length < 12 && (
          <p className="qualifier">
            This Pantheon is small because early generations were XY-heavy. See
            why in the note about{" "}
            <a href="https://github.com/carawarner/pantheon#code-imitating-nature">
              Sex
            </a>.
          </p>
        )}
    </div>
  );
};

Pantheon.propTypes = {
  gods: PropTypes.array.isRequired
};
