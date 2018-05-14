import React from 'react';
import Radium, {StyleRoot} from 'radium';
import { readFile } from '../../util/fs'

import './index.less'

export default class About extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    readFile(this.props.path, '', function(err,data){  
        if(err){  
          console.log("error");
        }else{  
          console.log(data); 
        }  
    });  
  }

  render() {
    const { style, name, content } = this.props;

    return (
      <StyleRoot>
        <div className="fileBox" style={style}>
          <div className="fileName">{name}</div>
          <div className="fileContent">{content}</div>
        </div>
      </StyleRoot>
    )
  }
}