import React from 'react';
import PropTypes from 'prop-types';

import CheckoutBox from './CheckoutBox';

import './Radio.less';

export default class Radio extends React.Component {
  static contextTypes = {
    radioGroup: PropTypes.any,
  };

  render() {
    const { props, context } = this;
    const { children, ...checkoutBox } = props;
    const { radioGroup } = context;
    const radioProps = { ...checkoutBox };

    if (radioGroup) {
      // radioProps.name = radioGroup.name;
      radioProps.onChange = radioGroup.onChange;
      radioProps.checked = props.value === radioGroup.value;
      radioProps.disabled = props.disabled || radioGroup.disabled;
    }

    return (
      <label className="Radio">
        <CheckoutBox {...radioProps} />
        {children}
      </label>
    );
  }
}

Radio.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
};

Radio.defaultProps = {
  children: null,
  disabled: false,
};
