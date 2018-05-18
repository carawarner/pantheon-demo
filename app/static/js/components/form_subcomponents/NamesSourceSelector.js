import React from "react";
import PropTypes from "prop-types";

export const NamesSourceSelector = props => (
  <div className="pantheon-form-item">
    <select
      placeholder="names"
      id="namesSource"
      name="namesSource"
      value={props.namesSource}
      onChange={props.onChange}
    >
      {props.sourcesOfNames.map((namesSource, i) => (
        <option value={namesSource} key={"namesSource" + i}>
          {namesSource}
        </option>
      ))}
    </select>
    <label htmlFor="namesSource">Pick Names</label>
  </div>
);
NamesSourceSelector.propTypes = {
  namesSource: PropTypes.string.isRequired,
  sourcesOfNames: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};
