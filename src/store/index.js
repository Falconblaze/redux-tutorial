// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authenticationReducer from "./authentication";

// create a central store with the reducer
// const store = createStore(counterReducer);
const store = configureStore({
  reducer: {
    counter: counterReducer,
    authentication: authenticationReducer,
  },
});

export default store;
