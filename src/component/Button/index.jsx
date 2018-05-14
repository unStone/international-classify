import React from 'react';

const baseStyle = {
  padding: '4px 8px',
  backgroundColor: 'yellow',
  borderRadius: 5,
}

export default class Button extends React.Component {

  render() {
    const { children, onClick } = this.props
    
    return (
      <span
        style={baseStyle}
        onClick={onClick}
      >
        {children}
      </span>
    )
  }
}