import React from "react";
import PropTypes from "prop-types";

export const SeedWordInputter = props => (
  <div className="pantheon-form-item">
    <input
      type="text"
      placeholder={props.seedWord || ""}
      id={props.name}
      name={props.name}
      onChange={props.onChange}
    />
    <label htmlFor={props.name}>{props.label}</label>
  </div>
);
SeedWordInputter.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  seedWord: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
