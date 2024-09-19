const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'FILTER':
      return action.payload;
    default:
      return state;
  }
};

export const filterChange = (content) => {
  console.log('filterChange', content);
  return {
    type: 'FILTER',
    payload: content
  };
};

export default filterReducer;