import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isSubs: undefined,
  activePost: null,
  freeRights: 1,
  notes: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsSubs(state, action) {
      state.isSubs = action.payload;
    },
    setFreeRight(state, action) {
      state.freeRights = action.payload;
    },
    setActivePost(state, action) {
      state.activePost = action.payload;
    },
    setNotes(state, action) {
      state.notes = action.payload;
    },
  },
});

export const {setIsSubs, setFreeRight, setActivePost, setNotes} =
  appSlice.actions;
export default appSlice.reducer;
