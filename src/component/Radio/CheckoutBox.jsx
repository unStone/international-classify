import React from 'react';
import PropTypes from 'prop-types';

export default class CheckoutBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: !!props.checked || !!props.defaultChecked,
    };
  }
  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: nextProps.checked,
      });
    }
  }
  onChange = (e) => {
    this.props.onChange(e);
  }
  render() {
    const {
      value,
    } = this.props;

    return (
      <span>
        <input
          type="radio"
          checked={!!this.state.checked}
          onChange={this.onChange}
          value={value}
        />
        {this.props.children}
      </span>
    );
  }
}

CheckoutBox.propTypes = {
  onChange: PropTypes.func,
  children: PropTypes.node,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  value: PropTypes.any,
};

CheckoutBox.defaultProps = {
  onChange: () => {},
  children: null,
  checked: false,
  defaultChecked: false,
  value: '',
};
