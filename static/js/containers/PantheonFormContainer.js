import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import PantheonForm from "../components/forms/PantheonForm";
import { getRandomItem } from "../utilities";

export default class PantheonFormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      namesSource: "",
      textsSource: "",
      sourcesOfNames: [],
      sourcesOfTexts: [],
      godA: "",
      godB: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleEmbeddedFormChange = this.handleEmbeddedFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setSourcesOfNames();
    this.setSourcesOfTexts();
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

  async setSourcesOfNames() {
    axios
      .get("/api/names")
      .then(response => {
        const names = response.data.names;
        this.setState({
          sourcesOfNames: names,
          namesSource: getRandomItem(names)
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  setSourcesOfTexts() {
    axios
      .get("/api/texts")
      .then(response => {
        const texts = response.data.texts;
        this.setState({
          sourcesOfTexts: texts,
          textsSource: getRandomItem(texts)
        });
      })
      .catch(error => {
        console.log(error);
      });
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
