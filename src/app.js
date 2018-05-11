import React from 'react';
import ReactDOM from 'react-dom';
import RouteConfig from './route';


var fs = require('fs');
var holder = document.getElementById('app');
holder.ondragenter = holder.ondragover = function(event){
  // 重写ondragover 和 ondragenter 使其可放置
  event.preventDefault();

  holder.innerText="Release Mouse";
};

holder.ondragleave = function(event){
  event.preventDefault();
  
  holder.className(" ");
  holder.innerText="Please Drag sth. in here";
};

holder.ondrop = function(event){
  // 调用 preventDefault() 来避免浏览器对数据的默认处理
  //（drop 事件的默认行为是以链接形式打开） 
  event.preventDefault();

  var file = event.dataTransfer.files[0];
  fs.readFile(file.path, "utf8", function(err,data){
    holder.innerText = data;
  });
}

ReactDOM.render(
  <div>
    {RouteConfig}
  </div>,
  document.getElementById('app')
); 