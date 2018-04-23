import React from "react";
import PropTypes from "prop-types";
import { titleCase } from "voca";
import { ChromosomesSelector } from "./ChromosomesSelector";
import { GenderSelector } from "./GenderSelector";
import { SeedWordInputter } from "./SeedWordInputter";

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
          label="First Domain (a word such as 'art')"
          seedWord={this.state.seedWordA}
          onChange={this.handleChange}
        />
        <SeedWordInputter
          name="seedWordB"
          label="Second Domain (a word such as 'science')"
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
