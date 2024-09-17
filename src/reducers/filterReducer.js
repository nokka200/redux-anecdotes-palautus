const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'FILTER':
      console.log(action);
      return action.payload;
    default:
      return state;
  }
};

export const filterChange = (content) => {
  return {
    type: 'FILTER',
    payload: content
  };
};

export default filterReducer;