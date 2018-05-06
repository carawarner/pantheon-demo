import React from "react";
import PropTypes from "prop-types";

import * as constants from "../../constants";
import GodForm from "./GodForm";
import { NamesSourceSelector } from "./NamesSourceSelector";
import { TextsSourceSelector } from "./TextsSourceSelector";
import { getRandomItem } from "../../utilities";

export default class PantheonForm extends React.Component {
  render() {
    return (
      <div className="text-is-centered">
        <form className="pantheon-form" onSubmit={this.props.onSubmit}>
          <h4>Parents of Creation</h4>
          <div className="pantheon-form-description">1st God of Creation</div>
          <GodForm
            chromosomes={constants.XX}
            godID="godA"
            onChange={this.props.onEmbeddedFormChange}
          />
          <div className="pantheon-form-description">2nd God of Creation</div>
          <GodForm
            chromosomes={constants.XY}
            godID="godB"
            onChange={this.props.onEmbeddedFormChange}
          />

          <h4>Sources</h4>
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
            <button>Generate</button>
            {this.props.loading && <p>LOADING...</p>}
          </div>
        </form>
      </div>
    );
  }
}

PantheonForm.propTypes = {
  loading: PropTypes.bool,
  sourcesOfNames: PropTypes.array,
  sourcesOfTexts: PropTypes.array,
  namesSource: PropTypes.string,
  textsSource: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onEmbeddedFormChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};