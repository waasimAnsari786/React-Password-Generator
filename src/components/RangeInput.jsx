import React from "react";
import PropTypes from "prop-types";

export default function RangeInput(props) {
  return (
    <>
      <input
        type="range"
        className={props.myInpClassName}
        onInput={(e) => props.handleOnInputFunc(e.target.value)}
        value={props.myVal}
      />
      <label className={props.myLabelClassName}>
        {props.myLabel} {`(${props.myVal})`}
      </label>
    </>
  );
}

RangeInput.propTypes = {
  myInpClassName: PropTypes.string.isRequired,
  myLabelClassName: PropTypes.string.isRequired,
  myLabel: PropTypes.string.isRequired,
  handleOnInputFunc: PropTypes.func,
  func: PropTypes.func,
};
