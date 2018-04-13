import React from "react";

export default class GodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chromosomes: "XX",
      gender: "",
      title: "Being",
      seedWordA: "...",
      seedWordB: "...",
      femaleGenderLabel: "female",
      maleGenderLabel: "male (trans)"
    }

    this.setGenderLabel = this.setGenderLabel.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  setGenderLabel(chromosomes) {
    console.log("Update gender label");
    if (chromosomes === "XX") {
      this.setState({femaleGenderLabel : "female"})
      this.setState({maleGenderLabel : "male (trans)"});
    } else if (chromosomes== "XY") {
      this.setState({maleGenderLabel : "male"});
      this.setState({femaleGenderLabel : "female (trans)"})
    }
  }

  setTitle(gender) {
    const genderTitleMap = {
      "f": "Goddess",
      "m": "God",
      "nb": "Divine Being"
    }

    this.setState({title: genderTitleMap[gender]});
  }

  handleChange(e) {
    const target = e.target;

    if (target.id === "chromosomes") {
      this.setGenderLabel(target.value);
    }
    if (target.id === "gender") {
      this.setTitle(target.value);
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
     *
     * TODO: make form field required...
     */
    return (
      <div>
        <p>{this.state.title} of {this.state.seedWordA} and {this.state.seedWordB}</p>
        <input type="text" className="form-control" placeholder="milk" id="seedWordA" onChange={this.handleChange}/>
        <input type="text" className="form-control" placeholder="honey" id="seedWordB" onChange={this.handleChange}/>

        <select className="form-control pantheon-form-select" id="chromosomes" value={this.state.chromosomes} onChange={this.handleChange}>
          <option value="XX">XX chromosomes</option>
          <option value="XY">XY chromosomes</option>
        </select>

        <select className="form-control pantheon-form-select" id="gender" value={this.state.gender} onChange={this.handleChange}>
          <option value="" disabled>gender</option>
          <option value="nb">non-binary</option>
          <option value="f">{this.state.femaleGenderLabel}</option>
          <option value="m">{this.state.maleGenderLabel}</option>
        </select>
      </div>
    );
  }
}
