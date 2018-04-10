import React from "react";
import PropTypes from "prop-types";
import { God } from "./God";

export const Pantheon = function(props) {
  return (
    <ul>
      {props.gods.map(god => (
        <li><God god={god}/></li>
      ))}
    </ul>
  );
}

Pantheon.propTypes = {
  gods: PropTypes.array.isRequired
}
