import React from "react";
import PropTypes from "prop-types";

export const NamesSourceSelector = props => (
  <div className="pantheon-form-item">
    <label htmlFor="namesSource">Pick Names</label>
    <select
      placeholder="names"
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
  </div>
);
NamesSourceSelector.propTypes = {
  namesSource: PropTypes.string,
  sourcesOfNames: PropTypes.array,
  onChange: PropTypes.func.isRequired
};
