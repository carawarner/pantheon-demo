import React from "react";
import PropTypes from "prop-types";

export default class PantheonForm extends React.Component {
  constructor(props) {
    super(props);
    //TODO: assign default values to props
  }

  render() {
    return (
      <div>
        <button className="btn" onClick={this.props.onSubmit}>Submit</button>
      </div>
    );
  }
}

PantheonForm.propTypes = {
  namesList: PropTypes.string,
  genePool: PropTypes.string,
  numGenerations: PropTypes.number,
  rateOfMutation: PropTypes.number
}
