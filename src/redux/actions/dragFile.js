export const dragInFile = ({path, name}) => {
  return {
    type: 'DRAG_IN_FILE',
    path,
    name
  };
};

export const dragOutFile = ({path, name}) => {
  return {
    type: 'DRAG_OUT_FILE',
    path,
    name
  };
};