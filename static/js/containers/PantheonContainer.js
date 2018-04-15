import React from "react";
import { Pantheon } from "../components/Pantheon";
import PantheonForm from "../components/PantheonForm";

export default class PantheonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gods: [] };
    this.fetchPantheon = this.fetchPantheon.bind(this);
  }

  componentDidMount() {
    //TODO: This will be unecessary when empty state UI is handled
    this.setState({
      gods: pantheonA
    });
  }

  fetchPantheon(options) {
    //TODO: This placeholder should be replaced with an API call
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

  fetchSourcesOfNames(options) {
    //TODO: This placeholder should be replaced with an API call
    return ["norwegian", "french", "german"];
  }

  fetchSourcesOfTexts() {
    //TODO: This placeholder should be replaced with an API call
    return ["fairy-tales", "nutrition", "everything"];
  }

  render() {
    return (
      <div>
        <section className="has-top-divider">
          <PantheonForm
            fetchPantheon={this.fetchPantheon}
            sourcesOfNames={this.fetchSourcesOfNames()}
            sourcesOfTexts={this.fetchSourcesOfTexts()}
          />
        </section>
        <section className="has-top-divider">
          <Pantheon gods={this.state.gods} />
        </section>
      </div>
    );
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
];

const pantheonB = [
  {
    name: "Hedda",
    epithet: "Demi-Goddess of engineers"
  },
  {
    name: "Eindride",
    epithet: "Demi-God of folklorists"
  }
];
