import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  alert: null,
  confirm: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setState(state, action) {
      state[action.payload.state] = action.payload.value;
    },
  },
});

export default modalSlice;
