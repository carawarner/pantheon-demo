import React from "react";

export const God = function(props) {
  return (
    <div className="god">{props.god.name} {props.god.epithet}</div>
  );
}
