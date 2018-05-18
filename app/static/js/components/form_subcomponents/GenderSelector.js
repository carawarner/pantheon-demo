import React from "react";
import PropTypes from "prop-types";
import * as constants from "../../constants";

export const GenderSelector = props => (
  <div className="pantheon-form-item">
    <select
      id="gender"
      name="gender"
      value={props.gender}
      onChange={props.onChange}
    >
      <option value="" disabled>
        choose...
      </option>
      {Object.keys(constants.genderLabelMap).map((gender, i) => (
        <option value={gender} key={"gender_" + i}>
          {constants.genderLabelMap[gender][props.chromosomes]}
        </option>
      ))}
    </select>
    <label htmlFor="gender">Gender</label>
  </div>
);
GenderSelector.propTypes = {
  gender: PropTypes.string.isRequired,
  chromosomes: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
