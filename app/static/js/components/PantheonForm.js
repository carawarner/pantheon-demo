import React from "react";
import PropTypes from "prop-types";

import { XX, XY } from "../constants";
import GodForm from "./GodForm";
import { About } from "./About";
import { NamesSourceSelector } from "./form_subcomponents/NamesSourceSelector";
import { TextsSourceSelector } from "./form_subcomponents/TextsSourceSelector";

export default class PantheonForm extends React.Component {
  render() {
    return (
      <div className="text-is-centered">
        <form className="pantheon-form" onSubmit={this.props.onSubmit}>
          <About />
          <h2>Parents of Creation</h2>
          <GodForm
            chromosomes={XX}
            godID="godA"
            onChange={this.props.onEmbeddedFormChange}
          />
          <GodForm
            chromosomes={XY}
            godID="godB"
            onChange={this.props.onEmbeddedFormChange}
          />

          <h2>Sources</h2>
          <NamesSourceSelector
            namesSource={this.props.namesSource}
            sourcesOfNames={this.props.sourcesOfNames}
            onChange={this.props.onChange}
          />
          <TextsSourceSelector
            textsSource={this.props.textsSource}
            sourcesOfTexts={this.props.sourcesOfTexts}
            onChange={this.props.onChange}
          />
          <div className="pantheon-form-section">
            <button disabled={!this.props.submittable}>Generate</button>
          </div>
        </form>
      </div>
    );
  }
}

PantheonForm.propTypes = {
  sourcesOfNames: PropTypes.array,
  sourcesOfTexts: PropTypes.array,
  namesSource: PropTypes.string,
  textsSource: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onEmbeddedFormChange: PropTypes.func.isRequired,
  submittable: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired
};
