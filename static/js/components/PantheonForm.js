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
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <h4 className="title">Parents of Creation</h4>
          <div className="row">
            <div className="form-group col-md-6">
              <label>1st God of Creation</label>
              <GodForm
                onChange={update => {
                  this.setState({ godA: update });
                }}
              />
            </div>
            <div className="form-group col-md-6">
              <label>2nd God of Creation</label>
              <GodForm
                onChange={update => {
                  this.setState({ godB: update });
                }}
              />
            </div>
          </div>

          <h4 className="title">Sources</h4>
          <div className="row">
            <div className="form-group col-md-6">
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
            </div>

            <div className="form-group col-md-6">
              <select
                className="form-control pantheon-form-select"
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
            </div>
          </div>

          <div className="form-group">
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
