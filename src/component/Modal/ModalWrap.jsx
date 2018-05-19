import React from 'react';

import Portal from '../Portal';
import Modal from './Modal';

export default class ModalWrap extends React.Component {
  getContainer = () => {
    if (this.props.getContainer) {
      return this.props.getContainer();
    }
    const container = document.createElement('div');
    document.body.appendChild(container);
    return container;
  }

  getComponent = () => {
    return <Modal {...this.props} />;
  }

  render() {
    console.log();
    return (
      (
        <Portal getContainer={this.getContainer}>
          {this.getComponent()}
        </Portal>
      )
    );
  }
}
