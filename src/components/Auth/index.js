import React, { Fragment, useState} from "react";

import {
  Row,
  Col,
  TabContent,
} from "reactstrap";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import LeftSection from "./LeftSection";
import AuthHeader from "./AuthHeader";

const AuthComponent = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Fragment>
      <div className="app-wrapper min-vh-100 bg-white">
        <div className="app-main min-vh-100">
          <div className="app-content p-0">
            <div className="app-inner-content-layout--main">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div className="bg-composed-wrapper--content">
                  <Row className="min-vh-100 no-gutters">
                    <LeftSection />
                    <Col
                      xl="7"
                      lg="8"
                      className="order-1 order-lg-2 d-flex align-items-center"
                    >
                      <Col xl="7" lg="10" md="1" className="mx-auto px-xl-0">
                        <AuthHeader activeTab={activeTab} toggle={toggle}/>
                        <TabContent activeTab={activeTab}>
                          <SignUp />
                          {/* Sign in */}

                          <SignIn />
                          {/* signin ends */}
                        </TabContent>
                      </Col>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AuthComponent;
