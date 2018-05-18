import React from "react";
import PantheonFormContainer from "./PantheonFormContainer";
import { Pantheon } from "../components/Pantheon";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faSpinner from "@fortawesome/fontawesome-free-solid/faSpinner";

export default class PantheonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gods: [],
      showSpinner: false
    };
    this.updateGods = this.updateGods.bind(this);
    this.showSpinner = this.showSpinner.bind(this);
  }

  updateGods(gods) {
    this.setState({ gods: gods });
  }

  showSpinner(spin) {
    this.setState({ showSpinner: spin });
  }

  render() {
    return (
      <div>
        <section>
          <PantheonFormContainer
            updateGods={this.updateGods}
            showSpinner={this.showSpinner}
          />
        </section>
        <section>
          {this.state.showSpinner ? (
            <FontAwesomeIcon
              icon={faSpinner}
              className="fa-spin pantheon-form-spinner"
            />
          ) : (
            <Pantheon gods={this.state.gods} />
          )}
        </section>
      </div>
    );
  }
}
