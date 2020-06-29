import * as types from "./actionTypes";
import { API, Auth } from "aws-amplify";

export function fetchRecordsRequest() {
  return {
    type: types.FETCH_RECORDS_REQUEST,
  };
}

export function fetchRecordsFailure() {
  return {
    type: types.FETCH_RECORDS_FAILURE,
  };
}

export function fetchRecordsSuccess(data) {
  return {
    type: types.FETCH_RECORDS_SUCCESS,
    data,
  };
}

export function fetchRecords() {
  return async (dispatch) => {
    dispatch(fetchRecordsRequest());
    try {
      const records = await API.get("vinylRecordsApi", "/records/recordId");
      dispatch(fetchRecordsSuccess(records.Items));
    } catch (e) {
      dispatch(fetchRecordsFailure());
      console.log(e);
    }
  };
}

// signup

export function signUpRequest() {
  return {
    type: types.SIGNUP_REQUEST,
  };
}

export function signUpFailure() {
  return {
    type: types.SIGNUP_FAILURE,
  };
}

export function signUpSuccess(data) {
  return {
    type: types.SIGNUP_SUCCESS,
    data,
  };
}

export function signUp(userObject, history) {
  return async (dispatch) => {
    dispatch(signUpRequest());
    try {
      const user = await Auth.signUp({
        password: userObject.password,
        username: userObject.email,
        attributes: {
          given_name: userObject.firstname,
          family_name: userObject.lastname,
          email: userObject.email,
        },
      });
      console.log(user.user);
      alert("Successfully register");
      dispatch(signUpSuccess(user.user.username));
      history.push("/confirmEmail");
    } catch (error) {
      alert(error.message);
      console.log("error signing up:", error);
    }
  };
}
// sign in

export function signInRequest() {
  return {
    type: types.SIGNUP_REQUEST,
  };
}

export function signInFailure() {
  return {
    type: types.SIGNIN_FAILURE,
  };
}

export function signInSuccess() {
  return {
    type: types.SIGNIN_SUCCESS,
  };
}

export function signIn(userObject, history) {
  return async (dispatch) => {
    dispatch(signUpRequest());
    try {
      const user = await Auth.signIn({
        password: userObject.password,
        username: userObject.email,
      });
      alert("Successfully, directing to the dashboard");
      console.log({ user });
      history.push("/dashboard");
    } catch (error) {
      alert(error.message);
      console.log("error signing up:", error);
    }
  };
}

// create Record

export function createRecordRequest() {
  return {
    type: types.CREATE_RECORD_REQUEST,
  };
}

export function createRecordFailure() {
  return {
    type: types.CREATE_RECORD_FAILURE,
  };
}

export function createRecordSuccess(data) {
  return {
    type: types.CREATE_RECORD_SUCCESS,
    data,
  };
}

export function createRecord(reqObject) {
  return async (dispatch) => {
    dispatch(createRecordRequest());
    try {
      dispatch(createRecordSuccess(reqObject));
      const record = await API.post("vinylRecordsApi", "/records", {
        body: reqObject,
      });
      dispatch(createRecordSuccess(reqObject));
      console.log(record);
    } catch (e) {
      dispatch(createRecordFailure());
      console.log(e);
    }
  };
}

export function getErrors(data) {
  return async (dispatch) => {
    dispatch(
      ((data) => {
        return {
          type: types.GET_ERRORS,
          data,
        };
      })(data)
    );
  };
}

// Confirm email

export function confirmEmailSuccess() {
  return {
    type: types.CONFIRM_CODE_SUCCESS,
  };
}

export function confirmEmailFailure() {
  return {
    type: types.CONFIRM_CODE_FAILURE,
  };
}

export function confirmEmailRequest() {
  return {
    type: types.CONFIRM_CODE_REQUEST,
  };
}

export function confrimEmail(email, code, history) {
  return async (dispatch) => {
    dispatch(confirmEmailRequest());
    try {
      await Auth.confirmSignUp(email, code);
      alert("Successfully Confirmed, kindly sign in");
      history.push("/");
    } catch (error) {
      console.log("error confirming email", error);
      alert(error.message);
    }
  };
}

export function signOutSuccess() {
  return {
    type: types.SIGNOUT_SUCCESS,
  };
}

export function signOut(history) {
  return async (dispatch) => {
    try {
      await Auth.signOut({ global: true });
      dispatch(signOutSuccess());
      history.push('/')
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };
}
