import React from 'react';
import { connect } from 'react-redux';

import { istextfile, readFile } from '../util/fs';
import { dragInFile, clearDragFile } from '../redux/actions/dragFile';

import Button from '../component/Button';
import Modal from '../component/Modal';
import Radio from '../component/Radio';

import './Home.less';

const Group = Radio.Group;

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchDragInFile: (file, content) => dispatch(dragInFile(file, content)),
    dispatchClearDragFile: () => dispatch(clearDragFile()),
  };
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  componentDidMount() {
    this.props.dispatchClearDragFile();
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
      readFile(file.path, '', (err, res) => {
        if (err) return;
        this.props.dispatchDragInFile(file, res.toString());
      });
    };
  }

  selectMode = () => {
    this.setState({ visible: true });
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }

  handleOk = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div
        className="Home full"
        ref={refs => { this.refs = refs; }}
      >
        <div>请复制粘贴需要分类的国际化文本或拖入文件</div>
        <Button onClick={this.selectMode}>选择模式</Button>
        <Modal
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onOk={this.handleOk}
        >
          <Group defaultValue="simple" value={this.state.value}>
            <Radio value="simple">简单规则</Radio>
            <Radio value="intelligent">智能识别</Radio>
          </Group>
        </Modal>
      </div>
    );
  }
}

export default connect(() => ({}), mapDispatchToProps)(Home);
