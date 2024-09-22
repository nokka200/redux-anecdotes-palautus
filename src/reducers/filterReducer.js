import { createSlice } from '@reduxjs/toolkit'
/*
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
*/
const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterChange(state, action) {
      console.log('state', state);
      console.log('action', action);
      return action.payload;
    }
  }
});


export const { filterChange } = filterSlice.actions;
export default filterSlice.reducer;