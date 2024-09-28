import { combineReducers, Reducer } from "redux";
import todoReducer from "./index"; // Adjust the path as necessary

/**
 * Combine reducers
 */
const allReducers = combineReducers({
  todo: todoReducer,
});

/**
 * Root reducer
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootReducer: Reducer<any, any> = (state, action) =>
  allReducers(state, action);

export default rootReducer;
