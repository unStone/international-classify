export const dragInFile = ({ path, name }, content) => {
  return {
    type: 'DRAG_IN_FILE',
    path,
    name,
    content,
  };
};

export const dragOutFile = ({ path, name }) => {
  return {
    type: 'DRAG_OUT_FILE',
    path,
    name,
  };
};

export const clearDragFile = () => {
  return {
    type: 'CLEAR_DRAG_FILE',
  };
};
