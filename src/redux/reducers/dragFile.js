// 当前列表相关信息
export const dragFile = (state = {}, action) => {
  console.log('action', action)
  switch(action.type) {
    case 'DRAG_IN_FILE':
      return Object.assign({}, state, { dragInFilePath: action.path, dragInFileName: action.name });
    case 'DRAG_OUT_FILE':
      return Object.assign({}, state, { dragOutFilePath: action.path, dragInFileName: action.name });
    default:
      return state;
  }
};

