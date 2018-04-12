import React from "react";
import PropTypes from "prop-types";

export default class PantheonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      namesSource: "",
      textsSource: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    console.log(`User selected ${target.name}: ${target.value}`);
    this.setState(
      {
        [target.name]: target.value
      }
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    const options = {};
    this.props.fetchPantheon(options);
  }

  render() {
    return (
      <div>
        <h3 className="title">Parameters</h3>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              Source of names:
              <select className="form-control" name="namesSource" value={this.state.namesSource} onChange={this.handleChange}>
                {this.props.sourcesOfNames.map((namesSource,i) => (
                  <option value={namesSource} key={"namesSource"+i}>{namesSource}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="form-group">
            <label>
              Source of texts:
              <select className="form-control" name="textsSource" value={this.state.textsSource} onChange={this.handleChange}>
                {this.props.sourcesOfTexts.map((textsSource,i) => (
                  <option value={textsSource} key={"textsSource"+i}>{textsSource}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="form-group">
            <input type="submit" value="Generate" className="btn"/>
          </div>
        </form>
      </div>
    );
  }
}

PantheonForm.propTypes = {
  sourcesOfNames: PropTypes.array.isRequired,
  sourcesOfTexts: PropTypes.array.isRequired
}
