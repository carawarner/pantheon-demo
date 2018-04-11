import React from "react";
import PropTypes from "prop-types";

export default class PantheonForm extends React.Component {
  constructor(props) {
    super(props);
    //TODO: assign default values to props
  }

  render() {
    return (
      <section className="pantheon-form">
        <button onClick={this.props.onSubmit}>Generate a Pantheon</button>
      </section>
    );
  }
}

PantheonForm.propTypes = {
  namesList: PropTypes.string,
  genePool: PropTypes.string,
  numGenerations: PropTypes.number,
  rateOfMutation: PropTypes.number
}
