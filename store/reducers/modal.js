import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  alert: null,
  confirm: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    // state 변경할 때 사용
    setState(state, action) {
      state[action.payload.state] = action.payload.value;
    },
  },
});

export default modalSlice;
