import React from 'react';
import { bounceInDown } from 'react-animations';
import Radium from 'radium';
import { connect } from 'react-redux';

import Button from '../component/Button';
import FileBox from '../component/FileBox';
import GoBack from '../component/GoBack';

import { readLineOfFile } from '../util/fs'; 

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

    this.cutApart = this.cutApart.bind(this);
  }

  cutApart() {
    readLineOfFile(this.props.dragFile.dragInFilePath, (err, line, isEnd) => {
      console.log('err', err);
      if (err) return;
      console.log('isEnd', isEnd);
      if (isEnd) return;
      console.log('line', line);
    });
  }

  render() {
    return (
      <div className="analy full">
        <GoBack />
        <FileBox 
          style={animation.bounceInDown}
          name={this.props.dragFile.dragInFileName}
          path={this.props.dragFile.dragInFilePath}
          content={this.props.dragFile.dragInFileContent}
        />
        <Button
          type="submit"
          onClick={this.cutApart}
        >
          cutApart
        </Button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Analy);
