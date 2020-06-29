import React, { Fragment } from "react";
import { CardBody, Card, TabPane, Button } from "reactstrap";
import { useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom';

import { signIn } from "../../actions";
import { useInput } from "../Hooks/useInput";
import CustomInput from "../Common/CustomInput";

const SignIn = () => {
  const history = useHistory()
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput("");

  const dispatch = useDispatch();

  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(signIn({ password, email }, history));
  };

  return (
    <Fragment>
      <TabPane tabId="2">
        <div className="px-3">
          <Card className="m-0 shadow-none border-0">
            <h3 className="display-4 mb-2 font-weight-bold">
              Existing account
            </h3>
            <p className="font-size-lg text-black-50">
              You already have an account? Fill in the fields below to login
              into your existing dashboard.
            </p>
            <CardBody>
              <form>
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
                <div className="text-center mb-5">
                  <Button
                    color="primary"
                    size="lg"
                    block={true}
                    className="mb-5"
                    onClick={onSubmit}
                  >
                    Sign In
                  </Button>
                </div>
              </form>
            </CardBody>
          </Card>
        </div>
      </TabPane>
    </Fragment>
  );
};

export default SignIn;
