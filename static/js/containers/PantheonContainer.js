import React from "react";
import { Pantheon } from "../components/Pantheon";
import PantheonForm from "../components/PantheonForm";


export default class PantheonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gods: [] }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      gods: pantheonA
    });
  }

  handleSubmit(e) {
    //TODO: This placeholder should be replaced with an API call
    e.preventDefault;
    if (this.state.gods == pantheonA) {
      this.setState({
        gods: pantheonB
      });
    } else {
      this.setState({
        gods: pantheonA
      });
    }
  }

  sourcesOfNames() {
    //TODO: This placeholder should be replaced with an API call
    return ["norwegian", "french", "german"]
  }

  sourcesOfTexts() {
    //TODO: This placeholder should be replaced with an API call
    return ["fairy-tales", "nutrition", "everything"];
  }

  render() {
    return (
      <section>
          <PantheonForm
            handleSubmit={this.handleSubmit}
            sourcesOfNames={this.sourcesOfNames()}
            sourcesOfTexts={this.sourcesOfTexts()}
          />
          <Pantheon gods={this.state.gods}/>
      </section>
    )
  }
}

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
]

const pantheonB = [
  {
    name: "Hedda",
    epithet: "Demi-Goddess of engineers"
  },
  {
    name: "Eindride",
    epithet: "Demi-God of folklorists"
  }
]
