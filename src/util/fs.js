export const readline = window.require('readline');
export const fs = window.require('fs');

// 是否为文本类型
export const istextfile = (filepath, length = 1000) => {
  const fd = fs.openSync(filepath, 'r');
  
  for (let i = 0; i < length; i++) {
    // const buf = new Buffer(1);
    const buf = Buffer.alloc(1);
    const bytes = fs.readSync(fd, buf, 0, 1, i);
    const char = buf.toString().charCodeAt();
    if (bytes === 0) {
      return true;
    } else if (bytes === 1 && char === 0) {
      return false;
    }
  }
  return true;
};

export const readFile = (path, options = 'utf-8', callback) => {
  fs.readFile(path, options, callback); 
};

export const readFileSync = (path, options = 'utf-8') => {
  return fs.readFileSync(path, options);
};

export const limitReadStream = (path, Encoding = 'UTF8', callback) => {
  if (!path) return;
  // 创建可读流
  const readerStream = fs.createReadStream(path);

  // 设置编码为 utf8
  readerStream.setEncoding(Encoding);

  // 处理流事件 --> data, end, and error
  readerStream.on('data', (chunk) => {
    callback(null, chunk);
  });

  readerStream.on('end', () => {
    callback(null, null, 'true');
  });

  readerStream.on('error', (err) => {
    callback(err, null);
    console.log(err.stack);
  });
};

export const readLineOfFile = (path, callback) => {
  if (!path) return;
  
  const input = fs.createReadStream(path);
  const rl = readline.createInterface({
    input,
  });
  rl.on('error', (line) => {
    callback(null, line, false);
  });
  rl.on('line', (line) => {
    callback(null, line, false);
  });
  rl.on('close', () => {
    callback(null, null, true);
  });
};
