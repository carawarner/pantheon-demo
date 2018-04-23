import PropTypes from "prop-types";

export const TextsSourceSelector = props => (
  <div className="pantheon-form-item">
    <label htmlFor="textsSource">Pick a "Gene Pool"</label>
    <select
      name="textsSource"
      value={props.textsSource}
      onChange={props.onChange}
    >
      {props.sourcesOfTexts.map((textsSource, i) => (
        <option value={textsSource} key={"textsSource" + i}>
          books about {textsSource}
        </option>
      ))}
    </select>
  </div>
);
TextsSourceSelector.propTypes = {
  textsSource: PropTypes.string.isRequired,
  sourcesOfTexts: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};
