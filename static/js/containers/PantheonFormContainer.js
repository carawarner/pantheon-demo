import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import PantheonForm from "../components/forms/PantheonForm";

export default class PantheonFormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sourcesOfNames: this.fetchSourcesOfNames(),
      sourcesOfTexts: this.fetchSourcesOfTexts(),
      namesSource: "french",
      textsSource: "nutrition",
      godA: "",
      godB: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleEmbeddedFormChange = this.handleEmbeddedFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    this.setState({
      [target.name]: target.value
    });
  }

  handleEmbeddedFormChange(key, update) {
    this.setState({ [key]: update });
  }

  handleSubmit(e) {
    e.preventDefault();
    let gods = this.fetchPantheon();
    this.props.updateGods(gods);
  }

  fetchSourcesOfNames() {
    //TODO: replace with API call
    return ["norwegian", "french", "german"];
  }

  fetchSourcesOfTexts() {
    //TODO: replace with API call
    return ["ecclectic", "fairy-tales", "nutrition"];
  }

  fetchPantheon() {
    //TODO: replace with API call
    return Math.random() > 0.5 ? pantheonA : pantheonB;
  }

  render() {
    return (
      <PantheonForm
        sourcesOfNames={this.state.sourcesOfNames}
        sourcesOfTexts={this.state.sourcesOfTexts}
        namesSource={this.state.namesSource}
        textsSource={this.state.textsSource}
        onChange={this.handleChange}
        onEmbeddedFormChange={this.handleEmbeddedFormChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

PantheonFormContainer.propTypes = {
  updateGods: PropTypes.func.isRequired
};

const pantheonA = [
  {
    name: "Kjell",
    epithet: "God of Magicians and Novelists"
  },
  {
    name: "Gunne",
    epithet: "Goddess of labors and truths"
  },
  {
    name: "Valter",
    epithet: "Demi-God of Calamities"
  }
];

const pantheonB = [
  {
    name: "Hedda",
    epithet: "Demi-Goddess of engineers"
  },
  {
    name: "Eindride",
    epithet: "Demi-God of folklorists"
  }
];
