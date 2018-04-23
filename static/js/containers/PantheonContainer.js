import React from "react";
import axios from "axios";
import { Pantheon } from "../components/Pantheon";
import PantheonForm from "../components/PantheonForm";

export default class PantheonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gods: [],
      sourcesOfNames: [],
      sourcesOfTexts: []
    };
    this.fetchPantheon = this.fetchPantheon.bind(this);
  }

  componentWillMount() {
    this.fetchSourcesOfNames();
    this.fetchSourcesOfTexts();
  }

  fetchSourcesOfNames() {
    this.setState({ sourcesOfNames: ["baz", "lur"] });
    var $this = this;
    axios
      .get("/api/names")
      .then(function(response) {
        console.log(response["data"]["names"]);
        $this.setState({ sourcesOfNames: response["data"]["names"] });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  fetchSourcesOfTexts() {
    //TODO: This placeholder should be replaced with an API call
    return ["fairy-tales", "nutrition", "everything"];
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
    console.log(options);
    const { namesSource, textsSource, godA, godB } = options;
  }

  render() {
    return (
      <div>
        <section>
          <PantheonForm
            onSubmit={this.fetchPantheon}
            sourcesOfNames={this.state.sourcesOfNames}
            sourcesOfTexts={this.fetchSourcesOfTexts()}
          />
        </section>
        <section>
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
