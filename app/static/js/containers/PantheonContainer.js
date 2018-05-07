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
      loading: false
    };
    this.updateGods = this.updateGods.bind(this);
    this.isLoading = this.isLoading.bind(this);
  }

  updateGods(gods) {
    this.setState({ gods: gods });
  }

  isLoading(loading) {
    this.setState({ loading: loading });
  }

  render() {
    return (
      <div>
        <section>
          <PantheonFormContainer
            updateGods={this.updateGods}
            isLoading={this.isLoading}
          />
        </section>
        <section>
          {this.state.loading ? (
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
