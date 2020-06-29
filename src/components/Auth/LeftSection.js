import React, { Fragment} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Col,
  Badge,
} from "reactstrap";


import hero9 from "../../assets/images/hero-bg/hero-9.jpg";


const LeftSection = () => {
  return (
    <Fragment>
      <Col lg="5" className="order-2 order-lg-1 d-flex">
        <div className="hero-wrapper w-100 bg-composed-wrapper bg-plum-plate min-vh-lg-100">
          <div className="flex-grow-1 w-100 d-flex align-items-center">
            <div
              className="bg-composed-wrapper--image"
              style={{ backgroundImage: "url(" + hero9 + ")" }}
            />
            <div className="bg-composed-wrapper--bg bg-premium-dark opacity-5" />
            <div className="bg-composed-wrapper--content p-5">
              <div className="d-flex align-items-center">
                <Badge pill color="second" className="px-4 h-auto py-1">
                  Register page
                </Badge>
                <span className="text-white-50 pl-3" id="DetailsTooltip1">
                  <FontAwesomeIcon icon={["far", "question-circle"]} />
                </span>
              </div>
              <div className="text-white mt-3">
                <h1 className="display-4 my-3 font-weight-bold">
                  create an account to access vinyl records?
                </h1>
                <div className="divider border-2 my-5 border-light opacity-2 rounded w-25" />
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Fragment>
  );
};

export default LeftSection;
