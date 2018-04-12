import React from "react";
import PropTypes from "prop-types";

export const God = function(props) {
  return (
    <p className="god">
      <span className="god-name">{props.god.name}</span> - <span className="god-epithet">{props.god.epithet}</span>
    </p>
  );
}

God.propTypes = {
  god: PropTypes.object.isRequired
}
