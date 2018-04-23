import React from "react";
import PropTypes from "prop-types";

export const XX = "XX";
export const XY = "XY";

export const ChromosomesSelector = props => (
  <div className="pantheon-form-item">
    <label htmlFor="chromosomes">Chromosomes</label>
    <select
      name="chromosomes"
      value={props.chromosomes}
      onChange={props.onChange}
    >
      <option value={XX}>XX (egg donor)</option>
      <option value={XY}>XY (sperm donor)</option>
    </select>
  </div>
);
ChromosomesSelector.propTypes = {
  chromosomes: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
