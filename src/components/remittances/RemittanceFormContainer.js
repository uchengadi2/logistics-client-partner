import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RemittanceForm from "./RemittanceForm";

import { processRemittance } from "./../../actions";

class RemittanceFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  componentDidMount() {
    console.log("a;; the props are:", this.props);
  }

  onSubmit = (formValues) => {
    this.props.processRemittance(formValues, this.props.token);
    this.props.handleDialogOpenStatus();

    console.log("the form values areeeee:", formValues);
  };
  render() {
    return (
      <div>
        <RemittanceForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { processRemittance })(RemittanceFormContainer);
