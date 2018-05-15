import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { istextfile, readFileSync } from '../util/fs';
import { dragInFile } from '../redux/actions/dragFile';

import './Home.less';

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchDragInFile: (file, content) => dispatch(dragInFile(file, content)),
  };
};

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const holder = this.refs;

    holder.ondragenter = holder.ondragover = (event) => {
      // 重写ondragover 和 ondragenter 使其可放置
      event.preventDefault();
    };

    holder.ondragleave = (event) => {
      event.preventDefault();
      // holder.innerText="Please Drag sth. in here";
    };

    holder.ondrop = (event) => {
      event.preventDefault();

      const file = event.dataTransfer.files[0];
      if (!istextfile(file.path)) return;
      this.props.history.push('/analy/');
      const content = readFileSync(file.path);
      this.props.dispatchDragInFile(file, content);
    };
  }

  render() {
    return (
      <div
        className="Home full"
        ref={refs => this.refs = refs}
      >
        <div>请复制粘贴需要分类的国际化文本或拖入文件</div>
      </div>
    );
  }
}

export default connect(() => ({}), mapDispatchToProps)(Home);
