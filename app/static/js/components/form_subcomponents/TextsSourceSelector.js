import React from "react";
import PropTypes from "prop-types";

export const TextsSourceSelector = props => (
  <div className="pantheon-form-item">
    <select
      id="textsSource"
      name="textsSource"
      value={props.textsSource}
      onChange={props.onChange}
    >
      {props.sourcesOfTexts.map((textsSource, i) => (
        <option value={textsSource} key={"textsSource" + i}>
          {textsSource}
        </option>
      ))}
    </select>
    <label htmlFor="textsSource">Pick a {"Gene Pool"}</label>
    <div className="pantheon-form-qualifier">
      The Gene Pool is the corpora from which related words will be drawn.
    </div>
  </div>
);
TextsSourceSelector.propTypes = {
  textsSource: PropTypes.string.isRequired,
  sourcesOfTexts: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};
