import React, { Fragment, useState } from "react";
import { TabPane, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom'
import CustomInput from "../Common/CustomInput";
import { useValidation } from "../Hooks/useValidation";
import { useInput } from "../Hooks/useInput";
import { signUp } from "../../actions";

const SignUp = () => {
  const history = useHistory()
  const {reset} = useValidation()
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const errors = useSelector((state) => state.recordsReducer.errors);
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput("");
  const {
    value: lastname,
    bind: bindLastname,
    reset: resetLastname,
  } = useInput("");

  const {
    value: firstname,
    bind: bindFirstname,
    reset: resetFirstname,
  } = useInput("");

  const isEmpty = (obj) => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };
  const dispatch = useDispatch();

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (isEmpty(errors)) {
      reset();
      dispatch(signUp({ email, password, firstname, lastname }, history));
    }
  };

  console.log(errors, "----err");
  return (
    <Fragment>
      <TabPane tabId="1">
        <div className="px-3 pb-3 pt-4">
          <h3 className="display-4 mb-2 font-weight-bold">Create account</h3>
          <p className="font-size-lg mb-5 text-black-50">
            Fill in the fields below and you'll be good to go.
          </p>

          <CustomInput
            labelName={"Email address"}
            placeholder="Enter your email address"
            type="email"
            name={"email"}
            value={email}
            bindAttributes={bindEmail}
          />

          <CustomInput
            labelName={"Password"}
            placeholder="Enter your password"
            type="password"
            name={"password"}
            value={password}
            bindAttributes={bindPassword}
          />

          <CustomInput
            labelName={"Firstname"}
            value={firstname}
            placeholder="Enter your firstname"
            type="text"
            name={"firstname"}
            bindAttributes={bindFirstname}
          />
          <CustomInput
            labelName={"Lastname"}
            value={lastname}
            placeholder="Enter your lastname"
            type="text"
            name={"lastname"}
            bindAttributes={bindLastname}
          />
          <Button
            color="primary"
            size="lg"
            block={true}
            className="mb-5"
            onClick={onSubmit}
          >
            Create Account
          </Button>
        </div>
      </TabPane>
    </Fragment>
  );
};

export default SignUp;
