import React from "react";
import { Pantheon } from "../components/Pantheon";
import PantheonForm from "../components/PantheonForm";


export default class PantheonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gods: [] }
    this.fetchGods = this.fetchGods.bind(this);
    this.insertPlaceholder = this.insertPlaceholder.bind(this);
  }

  componentDidMount() {
    this.setState({
      gods: pantheonA
    });
  }

  fetchGods() {
    //TODO
  }

  insertPlaceholder() {
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

  render() {
    return (
      <div className="typography">
        <PantheonForm onSubmit={this.insertPlaceholder}/>
        <Pantheon gods={this.state.gods}/>
      </div>
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
