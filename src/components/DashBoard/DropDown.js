import React, { Fragment } from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import {signOut} from '../../actions'
export default function DropDown() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSignOut = (e) => {
    e.preventDefault()
    dispatch(signOut(history))
  }
  return (
    <Fragment>
      <UncontrolledDropdown tag="span" className="m-2">
        <DropdownToggle size="sm" color="second" caret>
          Account
        </DropdownToggle>
        <DropdownMenu size="sm">
          <div role="menuitem">
            <a
              className="dropdown-item"
              onClick={(e) => handleSignOut(e)}>
              Sign Out
            </a>
          </div>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Fragment>
  );
}
