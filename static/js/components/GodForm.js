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
      seedWordA: "...",
      seedWordB: "..."
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const target = e.target;

    console.log(`Setting ${target.id}: ${target.value}`);
    this.setState({
      [target.id]: target.value
    })
  }

  render() {
    /* Note: lack of <form> element means this cannot be rendered on its own.
     * That somewhat defeats the purpose of putting it in its own component.
     * I might refactor, making this component GodFormInputs and creating another
     * component named GodForm that renders <GodFormInputs /> wrapped in a <form>.
     *
     * Making it possible to render GodForm on its own is why I let it manage its
     * own state...so the fact it cannot be rendered on its own is problematic.
     *
     * TODO: make form field required...
     */
    const godTitle = genderTitleMap[this.state.gender] || "Being";

    return (
      <div>
        <p>The {godTitle} of {this.state.seedWordA} and {this.state.seedWordB}</p>
        <input type="text" className="form-control" placeholder="..." id="seedWordA" onChange={this.handleChange}/>
        <input type="text" className="form-control" placeholder="..." id="seedWordB" onChange={this.handleChange}/>

        <select className="form-control pantheon-form-select" id="chromosomes" value={this.state.chromosomes} onChange={this.handleChange}>
          <option value={XX}>XX chromosomes</option>
          <option value={XY}>XY chromosomes</option>
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
