import { SIGNUP_SUCCESS } from "../actions/actionTypes";

const initialState = {
  username: "",
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        username: action.data,
      };

    default:
      return state;
  }
}
