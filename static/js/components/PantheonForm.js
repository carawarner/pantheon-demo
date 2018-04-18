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
      onChange={props.handleChange}
    >
      {props.sourcesOfNames.map((namesSource, i) => (
        <option value={namesSource} key={"namesSource" + i}>
          {namesSource} names
        </option>
      ))}
    </select>
  </div>
);

const TextsSourceSelector = props => (
  <div className="pantheon-form-item">
    <label htmlFor="textsSource">Pick a "Gene Pool"</label>
    <select
      name="textsSource"
      value={props.textsSource}
      onChange={props.handleChange}
    >
      {props.sourcesOfTexts.map((textsSource, i) => (
        <option value={textsSource} key={"textsSource" + i}>
          books about {textsSource}
        </option>
      ))}
    </select>
  </div>
);

const GodOfCreationForm = props => (
  <div>
    <div className="pantheon-form-description">{props.description}</div>
    <GodForm
      defaultChromosomes={props.defaultChromosomes}
      godID={props.godID}
      onChange={props.handleChange}
    />
  </div>
);

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

  validateForm() {
    let formIsValid = true;
    const { namesSource, textsSource, godA, godB } = this.state;
    console.log(godA);

    if (godA.chromosomes === godB.chromosomes) {
      alert("Pantheon requires an egg donor and a sperm donor.");
      formIsValid = false;
    }
    if (
      !godA.seedWordA ||
      !godA.seedWordB ||
      !godB.seedWordA ||
      !godB.seedWordB
    ) {
      alert("One or more seed words is empty");
    }

    return formIsValid;
  }

  updateGod(godKey, update) {
    this.setState({ [godKey]: update });
  }

  handleChange(e) {
    let target = e.target;
    console.log(`User selected ${target.name}: ${target.value}`);
    this.setState({
      [target.name]: target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.validateForm()) {
      alert("There are errors.");
      return;
    }

    const options = {
      namesSource: this.state.namesSource,
      textsSource: this.state.textsSource,
      godA: this.state.godA,
      godB: this.state.godB
    };
    this.props.fetchPantheon(options);
  }

  render() {
    return (
      <div className="text-is-centered">
        <form className="pantheon-form" onSubmit={this.handleSubmit}>
          <h4>Parents of Creation</h4>

          <GodOfCreationForm
            defaultChromosomes={GodForm.XX}
            handleChange={this.updateGod}
            godID={"godA"}
            description={"1st God of Creation"}
          />
          <GodOfCreationForm
            defaultChromosomes={GodForm.XY}
            handleChange={this.updateGod}
            godID={"godB"}
            description={"2nd God of Creation"}
          />

          <h4>Sources</h4>

          <NamesSourceSelector
            namesSource={this.state.namesSource}
            sourcesOfNames={this.props.sourcesOfNames}
            handleChange={this.handleChange}
          />
          <TextsSourceSelector
            textsSource={this.state.textsSource}
            sourcesOfTexts={this.props.sourcesOfTexts}
            handleChange={this.handleChange}
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
  sourcesOfTexts: PropTypes.array.isRequired
};
