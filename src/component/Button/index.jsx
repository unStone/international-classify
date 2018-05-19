import React from 'react';

import './index.less';

const buttonType = {
  default: 'default',
  submit: 'submit',
};

export default class Button extends React.Component {
  render() {
    const { children, onClick, type = 'default' } = this.props;
    
    return (
      <span
        className={`${buttonType[type]} button`}
        onClick={onClick}
      >
        {children}
      </span>
    );
  }
}
