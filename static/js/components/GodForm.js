import React from "react";

export default class GodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chromosomes: "",
      gender: "",
      femaleGenderLabel: "female",
      maleGenderLabel: "male"
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const target = e.target;

    if (target.id === "chromosomes") {
      if (target.value == "XX") {
        this.setState({femaleGenderLabel : "female"})
        this.setState({maleGenderLabel : "male (trans)"});
      } else if (target.value == "XY") {
        this.setState({maleGenderLabel : "male"});
        this.setState({femaleGenderLabel : "female (trans)"})
      }
    }

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
     */
    return (
      <div>
        <div className="form-group">
          <label for="chromosomes">Chromosomes:</label>
          <select className="form-control pantheon-form-select" id="chromosomes" value={this.state.chromosomes} onChange={this.handleChange}>
            <option value="XX">XX</option>
            <option value="XY">XY</option>
          </select>
        </div>
        <div className="form-group">
          <label for="gender">Gender:</label>
          <select className="form-control pantheon-form-select" id="gender" value={this.state.gender} onChange={this.handleChange}>
            <option value="nb">non-binary</option>
            <option value="f">{this.state.femaleGenderLabel}</option>
            <option value="m">{this.state.maleGenderLabel}</option>
          </select>
        </div>
        <div className="row">
          <div className="form-group">
            <input type="text" className="form-control" id="seedWordA" placeholder="milk" />
            <input type="text" className="form-control" id="seedWordB" placeholder="honey" />
          </div>
        </div>
      </div>
    )
  }
}
