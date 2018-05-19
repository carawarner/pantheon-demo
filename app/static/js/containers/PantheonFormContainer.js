import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import PantheonForm from "../components/PantheonForm";
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
      godB: "",
      isLoading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleEmbeddedFormChange = this.handleEmbeddedFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
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
    this.setState({ isLoading: true });
    this.props.showSpinner(true);

    const jsonData = {
      namesSource: this.state.namesSource,
      textsSource: this.state.textsSource,
      godA: this.state.godA,
      godB: this.state.godB
    };

    try {
      const response = await axios.post("/api/gods", jsonData);
      const gods = response.data.gods;
      this.props.updateGods(gods);
    } catch (error) {
      //Sentry?
    }

    this.props.showSpinner(false);
    this.setState({ isLoading: false });
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
      //Sentry?
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
      //Sentry?
    }
  }

  isValid() {
    return (
      !!this.state.namesSource &&
      !!this.state.textsSource &&
      !!this.state.godA.isValid &&
      !!this.state.godB.isValid &&
      this.state.godA.chromosomes !== this.state.godB.chromosomes
    );
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
        submittable={this.isValid() && !this.state.isLoading}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

PantheonFormContainer.propTypes = {
  updateGods: PropTypes.func.isRequired,
  showSpinner: PropTypes.func.isRequired
};
