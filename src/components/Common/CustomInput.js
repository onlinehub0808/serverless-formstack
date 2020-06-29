import React from "react";
import { FormGroup, Input, FormFeedback } from "reactstrap";
import {useValidation} from '../Hooks/useValidation'


const CustomInput = ({name, labelName, bindAttributes, ...props }) => {
  const {invalid, valid, errors, handleOnBlur} = useValidation()
  return (
    <>
      <FormGroup>
        <label>{labelName}</label>
        <Input 
          name={name}
          valid={valid}
          invalid={invalid}
          onBlur={handleOnBlur}
          {...props}
          {...bindAttributes}
        />
        <FormFeedback>{name in errors ? errors[name][0] : ''}</FormFeedback>
      </FormGroup>
    </>
  );
};

export default CustomInput;
