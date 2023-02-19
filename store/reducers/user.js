import { signup, login, test } from "@/actions/userApi";
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  me: null, // 내 정보

  // 공통
  Api: null,
  Fail: null,
  Loading: false,
  Done: false,
  Error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setState(state, action) {
      state[action.payload.state] = action.payload.value;
    },
    initApi(state) {
      state.Api = null;
      state.Fail = false;
      state.Done = false;
    },
  },
  extraReducers: (builder) =>
    builder
      //#region signup
      .addCase(signup.pending, (state) => {
        state.Loading = true;
        state.Error = null;
        state.Done = false;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.Api = "signup";
        state.Fail = action.payload.fail;
        state.Loading = false;
        state.Done = true;
      })
      .addCase(signup.rejected, (state, action) => {
        state.Loading = false;
        state.Error = action.payload;
      })
      //#endregion

      //#region login
      .addCase(login.pending, (state) => {
        state.Loading = true;
        state.Error = null;
        state.Done = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.me = action.payload.user;
        state.me.token = action.payload.token;

        state.Api = "login";
        state.Fail = action.payload.fail;
        state.Loading = false;
        state.Done = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.Loading = false;
        state.Error = action.payload;
      })
      //#endregion

      //#region test
      .addCase(test.pending, (state) => {
        state.Loading = true;
        state.Error = null;
        state.Done = false;
      })
      .addCase(test.fulfilled, (state, action) => {
        state.me.test = action.payload;
        state.Fail = null;
        state.Loading = false;
        state.Done = true;
      })
      .addCase(test.rejected, (state, action) => {
        state.Loading = false;
        state.Error = action.payload;
      })
      //#endregion
      .addDefaultCase((state) => state),
});

export default userSlice;
