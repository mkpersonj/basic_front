import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

import testSlice from "./test";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return [...state, action.payload];
    default: {
      const combinedReducer = combineReducers({
        test: testSlice.reducer,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
