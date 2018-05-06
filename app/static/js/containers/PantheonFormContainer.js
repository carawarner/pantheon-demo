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

  async handleSubmit(e) {
    e.preventDefault();

    const jsonData = {
      namesSource: this.state.namesSource,
      textsSource: this.state.textsSource,
      godA: this.state.godA,
      godB: this.state.godB
    };

    try {
      const response = await axios.post("/api/gods", jsonData);
      const gods = response.data.gods;
      console.log(gods);
      this.props.updateGods(gods);
    } catch (error) {
      console.log(error);
    }
  }

  async setSourcesOfNames() {
    try {
      const response = await axios.get("/api/names");
      const names = response.data.names;
      this.setState({
        sourcesOfNames: names,
        namesSource: getRandomItem(names)
      });
    } catch (error) {
      console.log(error);
    }
  }

  async setSourcesOfTexts() {
    try {
      const response = await axios.get("/api/texts");
      const texts = response.data.texts;
      this.setState({
        sourcesOfTexts: texts,
        textsSource: getRandomItem(texts)
      });
    } catch (error) {
      console.log(error);
    }
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
