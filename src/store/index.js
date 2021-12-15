import { createStore } from "redux";

// reducers should have 2 inputs: state and action
// reducers should have 1 output: updated state
// create a reducer
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// create a central store with the reducer
const store = createStore(counterReducer);

export default store;
