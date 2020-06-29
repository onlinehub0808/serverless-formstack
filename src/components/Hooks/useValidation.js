import { useState } from "react";
import { validations } from "../utility/FormValidation";
import { getErrors } from "../../actions";
import validate from "validate.js";
import { useDispatch } from "react-redux";

export const useValidation = () => {
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(false);
  const [invalid, setInvalid] = useState(false);

  const dispatch = useDispatch();

  const handleOnBlur = (e) => {
    const name = e.target.name;
    const error = validate.single(e.target.value, validations[name]);
    let newErrors = errors;
    if (error) {
      newErrors[name] = error;
      setInvalid(true);
      setValid(false);
    } else {
      delete newErrors[name];
      setValid(true);
      setInvalid(false);
    }
    dispatch(getErrors(newErrors));
    setErrors(newErrors);
  };

  return {
    handleOnBlur,
    valid,
    setInvalid,
    reset: () => setValid(false),
    setValid,
    invalid,
    errors,
  };
};
