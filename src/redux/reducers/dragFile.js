// 当前列表相关信息
export const dragFile = (state = {}, action) => {
  switch (action.type) {
    case 'DRAG_IN_FILE':
      return Object.assign({}, state, {
        dragInFilePath: action.path,
        dragInFileName: action.name,
        dragInFileContent: action.content,
      });
    case 'DRAG_OUT_FILE':
      return Object.assign({}, state, {
        dragOutFilePath: action.path,
        dragInFileName: action.name,
      });
    case 'CLEAR_DRAG_FILE':
      return Object.assign({}, state, {
        dragInFilePath: null,
        dragInFileName: null,
        dragInFileContent: null,
        dragOutFilePath: null,
        dragOutFileName: null,
        dragOutFileContent: null,
      });
    default:
      return state;
  }
};

