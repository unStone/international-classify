
export const fs = window.require('fs');

// 是否问文本类型
export const istextfile = function ( filepath, length ) {
  fd = fs.openSync( filepath, 'r' );
  length = length || 1000;
  for( var i = 0;i < length;i++ ) {
    buf = new Buffer( 1 );
    var bytes = fs.readSync( fd, buf, 0, 1, i );
    char = buf.toString().charCodeAt();
    if( bytes === 0) {
      return true;
    }else if(bytes === 1 && char === 0){
      return false;
    }
  }
  return true;
}

export const readFile = function(path, options = 'utf-8', callback) {
  fs.readFile(path, options, callback); 
}
