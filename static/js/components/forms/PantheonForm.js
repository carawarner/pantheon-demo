import React from "react";
import PropTypes from "prop-types";
import GodForm from "../GodForm";
import { getRandomIndex } from "../../utilities";

import { NamesSourceSelector } from "./NamesSourceSelector";
import { TextsSourceSelector } from "./TextsSourceSelector";

export default class PantheonForm extends React.Component {
  constructor(props) {
    super(props);
    const randNames = getRandomIndex(this.props.sourcesOfNames);
    const randTexts = getRandomIndex(this.props.sourcesOfTexts);

    this.state = {
      namesSource: this.props.sourcesOfNames[randNames],
      textsSource: this.props.sourcesOfTexts[randTexts],
      godA: {},
      godB: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateGod = this.updateGod.bind(this);
  }

  updateGod(godKey, update) {
    this.setState({ [godKey]: update });
  }

  handleChange(e) {
    let target = e.target;
    this.setState({
      [target.name]: target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const options = {
      namesSource: this.state.namesSource,
      textsSource: this.state.textsSource,
      godA: this.state.godA,
      godB: this.state.godB
    };
    this.props.onSubmit(options);
  }

  render() {
    return (
      <div className="text-is-centered">
        <form className="pantheon-form" onSubmit={this.handleSubmit}>
          <h4>Parents of Creation</h4>
          <div className="pantheon-form-description">1st God of Creation</div>
          <GodForm
            chromosomes={GodForm.XX}
            godID="godA"
            onChange={this.updateGod}
          />
          <div className="pantheon-form-description">2nd God of Creation</div>
          <GodForm
            chromosomes={GodForm.XY}
            godID="godB"
            onChange={this.updateGod}
          />

          <h4>Sources</h4>
          <NamesSourceSelector
            namesSource={this.state.namesSource}
            sourcesOfNames={this.props.sourcesOfNames}
            onChange={this.handleChange}
          />
          <TextsSourceSelector
            textsSource={this.state.textsSource}
            sourcesOfTexts={this.props.sourcesOfTexts}
            onChange={this.handleChange}
          />
          <div className="pantheon-form-section">
            <button>Generate</button>
          </div>
        </form>
      </div>
    );
  }
}

PantheonForm.propTypes = {
  sourcesOfNames: PropTypes.array.isRequired,
  sourcesOfTexts: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired
};
