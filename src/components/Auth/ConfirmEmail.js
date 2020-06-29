import React, { Fragment } from "react";

import { Link, useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Button } from "reactstrap";

import { useInput } from "../Hooks/useInput";
import { confrimEmail } from "../../actions";
import hero3 from "../../assets/images/hero-bg/hero-9.jpg";

export default function ConfirmEmail() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { value, bind } = useInput("");
  const email = useSelector((state) => state.authReducer.username);
  const handleSubmit = () => {
    dispatch(confrimEmail(email, value, history));
  };
  return (
    <Fragment>
      <div className="app-wrapper bg-white">
        <div className="app-main">
          <Button
            tag={Link}
            size="lg"
            color="success"
            className="btn-go-back"
            to="/"
          >
            <span className="btn-wrapper--label">Go back to auth page</span>
          </Button>
          <div className="app-content p-0">
            <div className="app-inner-content-layout--main">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div className="bg-composed-wrapper--content">
                  <div className="hero-wrapper bg-composed-wrapper bg-arielle-smile min-vh-100">
                    <div className="flex-grow-1 w-100 d-flex align-items-center">
                      <div
                        className="bg-composed-wrapper--image"
                        style={{ backgroundImage: "url(" + hero3 + ")" }}
                      />
                      <div className="bg-composed-wrapper--bg bg-night-sky opacity-5" />
                      <div className="bg-composed-wrapper--content text-center py-5">
                        <Col
                          xl="5"
                          lg="6"
                          md="10"
                          sm="12"
                          className="mx-auto text-center text-white"
                        >
                          <h1 className="display-2 mb-3 px-4 font-weight-bold">
                            Confirm Email
                          </h1>
                          <h3 className="font-size-lg line-height-sm font-weight-light d-block px-3 mb-2 text-white-50">
                            Enter the code sent to your mail to confirm your
                            email address.
                          </h3>
                          <Row className="no-gutters">
                            <Col sm="12" lg="8" className="mt-3 px-2">
                              <input
                                className="form-control form-control-lg"
                                placeholder="Code"
                                type="text"
                                {...bind}
                              />
                            </Col>
                            <Col sm="12" lg="4" className="mt-3 px-2">
                              <Button
                                className="d-block shadow-none w-100"
                                size="lg"
                                color="warning"
                                onClick={handleSubmit}
                              >
                                <span className="btn-wrapper--label">
                                  Confirm
                                </span>
                              </Button>
                            </Col>
                          </Row>
                        </Col>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
