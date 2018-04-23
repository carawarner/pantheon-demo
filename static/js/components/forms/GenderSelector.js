import React from "react";
import PropTypes from "prop-types";

const XX = "XX";
const XY = "XY";

const femaleGender = "female";
const maleGender = "male";
const nonBinaryGender = "non-binary";

export const GenderSelector = props => (
  <div className="pantheon-form-item">
    <label htmlFor="gender">Gender</label>
    <select name="gender" value={props.gender} onChange={props.onChange}>
      <option value="" disabled>
        choose...
      </option>
      <option value={femaleGender}>
        {props.chromosomes === XX ? femaleGender : femaleGender + "(trans)"}
      </option>
      <option value={maleGender}>
        {props.chromosomes === XY ? maleGender : maleGender + "(trans)"}
      </option>
      <option value={nonBinaryGender}>non-binary</option>
    </select>
  </div>
);
GenderSelector.propTypes = {
  gender: PropTypes.string.isRequired,
  chromosomes: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
