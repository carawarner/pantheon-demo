import React from "react";

const XX = "XX";
const XY = "XY";
const femaleGender = "female";
const maleGender = "male";
const nonBinaryGender = "non-binary";
const genderTitleMap = {
  [femaleGender]: "Goddess",
  [maleGender]: "God",
  [nonBinaryGender]: "Divine Being"
}

export default class GodForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chromosomes: XX,
      gender: "",
      seedWordA: "",
      seedWordB: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const target = e.target;

    console.log(`Setting ${target.id}: ${target.value}`);
    this.setState({
      [target.id]: target.value
    })
    const newState = Object.assign(this.state, {[target.id]: target.value})
    this.props.onChange(newState)
  }

  render() {
    const godTitle = genderTitleMap[this.state.gender] || "Being";

    return (
      <div>
        <p>The {godTitle} of {this.state.seedWordA} and {this.state.seedWordB}</p>
        <input type="text" className="form-control" placeholder={this.state.seedWordA || "..."} id="seedWordA" onChange={this.handleChange}/>
        <input type="text" className="form-control" placeholder={this.state.seedWordB || "..."} id="seedWordB" onChange={this.handleChange}/>

        <select className="form-control pantheon-form-select" id="chromosomes" value={this.state.chromosomes} onChange={this.handleChange}>
          <option value={XX}>XX (egg donor)</option>
          <option value={XY}>XY (sperm donor)</option>
        </select>

        <select className="form-control pantheon-form-select" id="gender" value={this.state.gender} onChange={this.handleChange}>
          <option value="" disabled>select gender</option>
          <option value={femaleGender}>{this.state.chromosomes === "XX" ? "female" : "female (trans)"}</option>
          <option value={maleGender}>{this.state.chromosomes === "XY" ? "male" : "male (trans)"}</option>
          <option value={nonBinaryGender}>non-binary</option>
        </select>
      </div>
    );
  }
}