import React from "react";
import PropTypes from "prop-types";
import { titleCase } from "voca";
import { ChromosomesSelector } from "./form_subcomponents/ChromosomesSelector";
import { GenderSelector } from "./form_subcomponents/GenderSelector";
import { SeedWordInputter } from "./form_subcomponents/SeedWordInputter";
import * as constants from "../constants";

export default class GodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chromosomes: this.props.chromosomes || constants.XX,
      gender: "",
      seedWordA: "",
      seedWordB: "",
      isValid: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  isValid(state) {
    return (
      !!state.chromosomes &&
      !!state.gender &&
      !!state.seedWordA && // Should also be checking alpha-only, no whitespace
      !!state.seedWordB // Should also be checking alpha-only, no whitespace
    );
  }

  handleChange(e) {
    const target = e.target;

    const newState = Object.assign(this.state, { [target.name]: target.value });
    const validatedState = Object.assign(newState, {
      isValid: this.isValid(newState)
    });

    this.setState(validatedState);
    this.props.onChange(this.props.godID, validatedState);
  }

  render() {
    const godTitle = constants.genderTitleMap[this.state.gender] || "...";
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
