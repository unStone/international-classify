import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

/**
 * 传送门组件，用于 modal 等
 * 
 * @param {ReactDOM|String} children 需要传入的节点内容
 * 
 * @export
 * @class Portal
 * @extends {React.Component}
 */
export default class Portal extends React.Component {
  componentDidMount() {
    this.createContainer();
  }

  componentWillUnmount() {
    if (this.popup) document.body.removeChild(this.popup);
  }

  createContainer() {
    this._container = this.props.getContainer();
    this.forceUpdate();
  }
  
  render() {
    if (this._container) {
      return ReactDOM.createPortal(this.props.children, this._container);
    }
    return null;
  }
}


Portal.propTypes = {
  children: PropTypes.node,
  getContainer: PropTypes.func,
};

Portal.defaultProps = {
  children: null,
  getContainer: () => {},
};
