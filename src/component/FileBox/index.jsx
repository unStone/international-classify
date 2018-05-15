import React from 'react';
import { StyleRoot } from 'radium';
import { limitReadStream } from '../../util/fs';

import './index.less';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { style, name, content } = this.props;

    return (
      <StyleRoot>
        <div className="fileBox" style={style}>
          <div className="fileName">{name}</div>
          <div className="contentBox">
            <div className="fileContent">
              {content}
            </div>
          </div>
        </div>
      </StyleRoot>
    );
  }
}
