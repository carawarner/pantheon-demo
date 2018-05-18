import React from "react";
import PropTypes from "prop-types";
import * as constants from "../../constants";

export const ChromosomesSelector = props => (
  <div className="pantheon-form-item">
    <select
      id="chromosomes"
      name="chromosomes"
      value={props.chromosomes}
      onChange={props.onChange}
    >
      <option value={constants.XX}>XX (egg donor)</option>
      <option value={constants.XY}>XY (sperm donor)</option>
    </select>
    <label htmlFor="chromosomes">Chromosomes</label>
  </div>
);
ChromosomesSelector.propTypes = {
  chromosomes: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
