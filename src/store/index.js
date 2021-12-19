import { createStore, combineReducers } from "redux";

import counterReducer from "./counter";
import authenticationReducer from "./authentication";

const reducers = combineReducers({
  counter: counterReducer,
  authentication: authenticationReducer,
});

const store = createStore(reducers);

export default store;
