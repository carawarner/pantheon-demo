import React from "react";
import PropTypes from "prop-types";

export const SeedWordInputter = props => (
  <div className="pantheon-form-item">
    <label htmlFor={props.name}>{props.label}</label>
    <input
      type="text"
      placeholder={props.seedWord || ""}
      name={props.name}
      onChange={props.onChange}
    />
  </div>
);
SeedWordInputter.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  seedWord: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
