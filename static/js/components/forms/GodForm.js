import React from "react";
import PropTypes from "prop-types";
import { titleCase } from "voca";

const XX = "XX";
const XY = "XY";
const femaleGender = "female";
const maleGender = "male";
const nonBinaryGender = "non-binary";
const genderTitleMap = {
  [femaleGender]: "Goddess",
  [maleGender]: "God",
  [nonBinaryGender]: "Divine Being"
};

const ChromosomesSelector = props => (
  <div className="pantheon-form-item">
    <label htmlFor="chromosomes">Chromosomes</label>
    <select
      name="chromosomes"
      value={props.chromosomes}
      onChange={props.onChange}
    >
      <option value={XX}>XX (egg donor)</option>
      <option value={XY}>XY (sperm donor)</option>
    </select>
  </div>
);
ChromosomesSelector.propTypes = {
  chromosomes: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

const GenderSelector = props => (
  <div className="pantheon-form-item">
    <label htmlFor="gender">Gender</label>
    <select name="gender" value={props.gender} onChange={props.onChange}>
      <option value="" disabled>
        choose...
      </option>
      <option value={femaleGender}>
        {props.chromosomes === "XX" ? "female" : "female (trans)"}
      </option>
      <option value={maleGender}>
        {props.chromosomes === "XY" ? "male" : "male (trans)"}
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

const SeedWordInputter = props => (
  <div className="pantheon-form-item">
    <label htmlFor={props.name}>{props.label}</label>
    <input
      type="text"
      placeholder={props.seedWord || ""}
      name={props.name}
      onChange={props.onChange}
    />
  </div>
);
SeedWordInputter.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  seedWord: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default class GodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chromosomes: this.props.chromosomes || XX,
      gender: "",
      seedWordA: "",
      seedWordB: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  static get XX() {
    return XX;
  }
  static get XY() {
    return XY;
  }

  handleChange(e) {
    const target = e.target;

    console.log(`Setting ${target.name}: ${target.value}`);
    this.setState({
      [target.name]: target.value
    });
    const newState = Object.assign(this.state, { [target.name]: target.value });
    this.props.onChange(this.props.godID, newState);
  }

  render() {
    const godTitle = genderTitleMap[this.state.gender] || "...";
    const domainA = titleCase(this.state.seedWordA) || "...";
    const domainB = titleCase(this.state.seedWordB) || "...";

    return (
      <div>
        <p className="god-form-preview">
          The {godTitle} of {domainA} and {domainB}
        </p>
        <ChromosomesSelector
          chromosomes={this.state.chromosomes}
          onChange={this.handleChange}
        />
        <GenderSelector
          gender={this.state.gender}
          chromosomes={this.state.chromosomes}
          onChange={this.handleChange}
        />
        <SeedWordInputter
          name="seedWordA"
          label="A Domain (a word like Art)"
          seedWord={this.state.seedWordA}
          onChange={this.handleChange}
        />
        <SeedWordInputter
          name="seedWordB"
          label="Another Domain (a word like Science)"
          seedWord={this.state.seedWordB}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

GodForm.propTypes = {
  chromosomes: PropTypes.string,
  godID: PropTypes.string.isRequired
};
