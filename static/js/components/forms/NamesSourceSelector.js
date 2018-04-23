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
          {namesSource} names
        </option>
      ))}
    </select>
  </div>
);
NamesSourceSelector.propTypes = {
  namesSource: PropTypes.string.isRequired,
  sourcesOfNames: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};
