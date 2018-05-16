import React from 'react';
import { bounceInDown } from 'react-animations';
import Radium from 'radium';
import { connect } from 'react-redux';
import franc from 'franc-min';

import Button from '../component/Button';
import FileBox from '../component/FileBox';
import GoBack from '../component/GoBack';

import { readLineOfFile } from '../util/fs'; 

import './Analy.less';

const whitelist = ['cmn', 'por', 'eng'];

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
      if (err) return;
      if (isEnd) return;
      // console.log('line', line.split(':')[1]);
      const content = line.split(':')[1] && line.split(':')[1].replace(/['",]/g, '');
      console.log('line', content, franc.all(`${content}${content}${content}${content}${content}${content}${content}${content}${content}`, { whitelist }));
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
