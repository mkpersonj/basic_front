import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

import testSlice from "./test";
import modalSlice from "./modal";
import userSlice from "./user";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return [...state, action.payload];
    default: {
      const combinedReducer = combineReducers({
        test: testSlice.reducer,
        modal: modalSlice.reducer,
        user: userSlice.reducer,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
