import React from "react";
import PropTypes from "prop-types";
import GodForm from "./GodForm";
import { getRandomIndex } from "../utilities";

const NamesSourceSelector = props => (
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

const TextsSourceSelector = props => (
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

const GodOfCreationForm = props => (
  <div>
    <div className="pantheon-form-description">{props.description}</div>
    <GodForm
      chromosomes={props.chromosomes}
      godID={props.godID}
      onChange={props.onChange}
    />
  </div>
);
GodOfCreationForm.propTypes = {
  description: PropTypes.string.isRequired,
  chromosomes: PropTypes.string.isRequired,
  godID: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

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

          <GodOfCreationForm
            chromosomes={GodForm.XX}
            onChange={this.updateGod}
            godID={"godA"}
            description={"1st God of Creation"}
          />
          <GodOfCreationForm
            chromosomes={GodForm.XY}
            onChange={this.updateGod}
            godID={"godB"}
            description={"2nd God of Creation"}
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
