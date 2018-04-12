import React from "react";

export const God = function(props) {
  return (
    <p className="god">{props.god.name} {props.god.epithet}</p>
  );
}
