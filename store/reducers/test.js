import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  results: [],
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setState(state, action) {
      state[action.payload.state] = action.payload.value;
    },
    addSentence(state, action) {
      state.results.push(action.payload);
    },
  },
});

export default testSlice;
