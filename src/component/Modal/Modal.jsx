import React from 'react';

import Button from '../Button';

import './Modal.less';

/**
 * 
 * 
 * @export
 * @class Modal
 * @extends {React.Component}
 */
export default class Modal extends React.Component {
  defaultFoot = () => [
    <Button key="back" onClick={this.handleCancel}>cancel</Button>,
    <Button key="submit" type="submit" onClick={this.handleOk}>ok123</Button>,
  ];

  handleCancel = () => {
    const onCancel = this.props.onCancel;
    if (onCancel) onCancel('e');
  }

  handleOk = () => {
    const onOk = this.props.onOk;
    if (onOk) onOk('e');
  }


  render() {
    const {
      children,
      title = 'Title',
      foot = this.defaultFoot,
      width = 400,
      visible = false,
    } = this.props;

    return (
      <div style={{ display: visible ? 'block' : 'none' }}>
        <div className="modal-mask" />
        <div className="modal-wrap" onClick={this.handleCancel}>
          <div
            className="modal"
            style={{ width }}
            onClick={(e) => { e.stopPropagation(); }}
          >
            <div className="modal-content">
              <button className="modal-close">
                <span className="modal-close-x" onClick={this.handleCancel} />
              </button>
              <div className="modal-header">
                <div className="modal-title">
                  {title}
                </div> 
              </div>
              <div className="modal-body" >
                {children}
              </div>
              <div className="modal-footer">
                {foot()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
