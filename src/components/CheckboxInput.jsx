import React from "react";
import PropTypes from "prop-types";

export default function CheckboxInput(props) {
  return (
    <>
      <input
        type="checkbox"
        className={props.myInpClassName}
        onChange={() => props.handleOnChangeFunc(props.arg)}
        id={props.inpID}
      />
      <label className={props.myLabelClassName}>{props.myLabel}</label>
    </>
  );
}

CheckboxInput.propTypes = {
  myInpClassName: PropTypes.string.isRequired,
  myLabelClassName: PropTypes.string.isRequired,
  myLabel: PropTypes.string.isRequired,
  handleOnChangeFunc: PropTypes.func,
  inpID: PropTypes.string.isRequired,
  arg: PropTypes.string.isRequired,
};
