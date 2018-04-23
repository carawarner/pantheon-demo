import React from "react";
import PropTypes from "prop-types";
import * as constants from "../../constants";

export const GenderSelector = props => (
  <div className="pantheon-form-item">
    <label htmlFor="gender">Gender</label>
    <select name="gender" value={props.gender} onChange={props.onChange}>
      <option value="" disabled>
        choose...
      </option>
      <option value={constants.femaleGender}>
        {props.chromosomes === constants.XX
          ? constants.femaleGender
          : constants.femaleGender + "(trans)"}
      </option>
      <option value={constants.maleGender}>
        {props.chromosomes === constants.XY
          ? constants.maleGender
          : constants.maleGender + "(trans)"}
      </option>
      <option value={constants.nonBinaryGender}>non-binary</option>
    </select>
  </div>
);
GenderSelector.propTypes = {
  gender: PropTypes.string.isRequired,
  chromosomes: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
