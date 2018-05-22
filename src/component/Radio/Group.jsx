import React from 'react';
import PropTypes from 'prop-types';

export default class RadioGroup extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      value: props.defaultValue || '',
    };
  }
  static childContextTypes = {
    radioGroup: PropTypes.any,
  };

  onRadiochange = (e) => {
    const lastValue = this.state.value;
    this.setState({
      value: e.target.value,
    });

    if (this.props.onChange && e.target.value !== lastValue) {
      this.props.onChange(e);
    }
  }

  getChildContext() {
    return {
      radioGroup: {
        onChange: this.onRadiochange,
        value: this.state.value,
        disabled: this.props.disabled,
      },
    };
  }

  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}

RadioGroup.propTypes = {
  onChange: PropTypes.func,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

RadioGroup.defaultProps = {
  onChange: () => {},
  defaultValue: '',
  disabled: false,
  children: null,
};

