import React from 'react';
import { withRouter } from "react-router-dom";

import Button from '../Button';
// import { render } from 'react-router-dom';

class GoBack extends React.Component {


  render() {
    return (
      <Button onClick={this.props.history.goBack}>
        back
      </Button>
    )
  }
}

export default withRouter(GoBack);