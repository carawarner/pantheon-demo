import React from "react";
import PropTypes from "prop-types";
import { God } from "./God";

export const Pantheon = function(props) {
  return (
    <div>
      {props.gods.map(god => (
        <God god={god}/>
      ))}
    </div>
  );
}

Pantheon.propTypes = {
  gods: PropTypes.array.isRequired
}
