import React, { Fragment } from "react";

import clsx from "clsx";

import { Nav, NavItem, NavLink } from "reactstrap";

const AuthHeader = ({activeTab, toggle}) => {
  return (
    <Fragment>
      <div className="py-5">
        <Nav className="nav-line">
          <NavItem>
            <NavLink
              className={clsx({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              <span>Create an account</span>
              <div className="divider" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={clsx({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              <span>Sign in</span>
              <div className="divider" />
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </Fragment>
  );
};

export default AuthHeader;
