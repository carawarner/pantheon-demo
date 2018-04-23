import React from "react";
import PantheonFormContainer from "./PantheonFormContainer";
import { Pantheon } from "../components/Pantheon";

export default class PantheonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gods: [] };
    this.updateGods = this.updateGods.bind(this);
  }

  updateGods(gods) {
    this.setState({ gods: gods });
  }

  render() {
    return (
      <div>
        <section>
          <PantheonFormContainer updateGods={this.updateGods} />
        </section>
        <section>
          <Pantheon gods={this.state.gods} />
        </section>
      </div>
    );
  }
}
