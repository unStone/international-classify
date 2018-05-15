import React from 'react';
import { bounceInDown } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import { connect } from 'react-redux';

import FileBox from '../component/FileBox';
import GoBack from '../component/GoBack';

import './Analy.less';

const animation = {
  bounceInDown: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceInDown, 'bounceInDown'),
  },
};

const mapStateToProps = (state) => {
  return { dragFile: state.dragFile };
};

class Analy extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    console.log(this.props);
    return (
      <div className="analy full">
        <GoBack />
        <FileBox 
          style={animation.bounceInDown}
          name={this.props.dragFile.dragInFileName}
          path={this.props.dragFile.dragInFilePath}
          content={this.props.dragFile.dragInFileContent}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Analy);
