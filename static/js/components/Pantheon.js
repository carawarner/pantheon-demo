import React from "react";
import PropTypes from "prop-types";
import { God } from "./God";

export const Pantheon = function(props) {
  return (
    <section className="pantheon">
      {props.gods.map(god => (
        <God god={god}/>
      ))}
    </section>
  );
}

Pantheon.propTypes = {
  gods: PropTypes.array.isRequired
}
