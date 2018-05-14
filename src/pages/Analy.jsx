import React from 'react';
import { bounceInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { connect } from 'react-redux';

import FileBox from '../component/FileBox'
import GoBack from '../component/GoBack'
// import store from '../redux/store/';

import './Analy.less'

const animation = {
  bounceInDown: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
  }
}

const mapStateToProps = (state, ownProps) => {
  return {dragFile: state.dragFile}
}

class Analy extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className="analy full">
      <GoBack />

      <FileBox 
        style={animation.bounceInDown}
        name={this.props.dragFile.dragInFileName}
        path={this.props.dragFile.dragInFilePath}
      />
    </div>
  }
}

export default connect(mapStateToProps)(Analy)