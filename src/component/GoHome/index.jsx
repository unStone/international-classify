import React from 'react';
import { withRouter } from "react-router-dom";

import Button from '../Button';

export default class GoHome extends React.Component {

  render() {
    return (
      <Button 
        onClick={this.props.history.}
      >
       Home
      </Button>
    )
  }
}

export default withRouter(GoBack);