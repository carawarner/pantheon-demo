import React from "react";
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
      onChange={props.handleChange}
    >
      <option value={XX}>XX (egg donor)</option>
      <option value={XY}>XY (sperm donor)</option>
    </select>
  </div>
);

const GenderSelector = props => (
  <div className="pantheon-form-item">
    <label htmlFor="gender">Gender</label>
    <select name="gender" value={props.gender} onChange={props.handleChange}>
      <option value="" disabled>
        Choose...
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

const SeedWordInputter = props => (
  <div className="pantheon-form-item">
    <label htmlFor={props.name}>{props.label}</label>
    <input
      type="text"
      placeholder={props.placeholder || ""}
      name={props.name}
      onChange={props.handleChange}
    />
  </div>
);

export default class GodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chromosomes: this.props.defaultChromosomes || XX,
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
    this.props.onChange(newState);
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
          handleChange={this.handleChange}
        />
        <GenderSelector
          gender={this.state.gender}
          chromosomes={this.state.chromosomes}
          handleChange={this.handleChange}
        />
        <SeedWordInputter
          name="seedWordA"
          label="Egg Word"
          placeholder={this.state.seedWordA}
          handleChange={this.handleChange}
        />
        <SeedWordInputter
          name="seedWordB"
          label="Sperm Word"
          placeholder={this.state.seedWordB}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}
