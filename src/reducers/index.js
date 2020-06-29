import { combineReducers } from "redux";
import recordsReducer from "./recordsReducer";
import authReducer from "./authReducer";
import {SIGNOUT_SUCCESS} from '../actions/actionTypes'

const appReducer = combineReducers({
  recordsReducer,
  authReducer
});

const rootReducer = (state, action) => {
  if (action.type === SIGNOUT_SUCCESS) {
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;