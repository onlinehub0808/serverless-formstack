import React, { Fragment, useState } from 'react';


import  DropDown from './DropDown';

const Header = () => {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  return (
    <Fragment>
      <div className="header-nav-wrapper header-nav-wrapper-lg rounded-sm px-4 navbar-dark bg-plum-plate">
        <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
          <span className="d-none d-lg-block">
            <DropDown />
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
