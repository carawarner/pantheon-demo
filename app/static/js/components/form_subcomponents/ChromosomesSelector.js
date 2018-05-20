import React from "react";
import PropTypes from "prop-types";
import { XX, XY } from "../../constants";

export const ChromosomesSelector = props => (
  <div className="pantheon-form-item">
    <select
      id="chromosomes"
      name="chromosomes"
      value={props.chromosomes}
      onChange={props.onChange}
    >
      <option value={XX} disabled={props.chromosomes == XY}>
        XX (egg donor)
      </option>
      <option value={XY} disabled={props.chromosomes == XX}>
        XY (sperm donor)
      </option>
    </select>
    <label htmlFor="chromosomes">Chromosomes</label>
  </div>
);
ChromosomesSelector.propTypes = {
  chromosomes: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
