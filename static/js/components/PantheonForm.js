import React from "react";
import PropTypes from "prop-types";
import GodForm from "./GodForm";
import { getRandomIndex } from "../utilities";

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
    this.props.fetchPantheon(this.state);
  }

  render() {
    return (
      <div className="text-is-centered">
        <form className="pantheon-form" onSubmit={this.handleSubmit}>
          <h4>Parents of Creation</h4>
          <label>1st God of Creation</label>
          <GodForm
            onChange={update => {
              this.setState({ godA: update });
            }}
          />
          <label>2nd God of Creation</label>
          <GodForm
            onChange={update => {
              this.setState({ godB: update });
            }}
          />

          <h4>Sources</h4>
          <select
            className="form-control pantheon-form-select"
            placeholder="names"
            name="namesSource"
            value={this.state.namesSource}
            onChange={this.handleChange}
          >
            {this.props.sourcesOfNames.map((namesSource, i) => (
              <option value={namesSource} key={"namesSource" + i}>
                {namesSource} names
              </option>
            ))}
          </select>
          <select
            className="pantheon-form-select"
            name="textsSource"
            value={this.state.textsSource}
            onChange={this.handleChange}
          >
            {this.props.sourcesOfTexts.map((textsSource, i) => (
              <option value={textsSource} key={"textsSource" + i}>
                books about {textsSource}
              </option>
            ))}
          </select>

          <div className="pantheon-form-button">
            <input type="submit" value="Generate" className="btn" />
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
