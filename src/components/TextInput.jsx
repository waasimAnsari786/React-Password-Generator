import React, { useRef } from "react";

export default function TextInput(props) {
  const pwdRef = useRef(null);
  return (
    <>
      <div className="col-12 text-inp-ctnr bg-light rounded-3 ps-3">
        <div className="row">
          <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-9 col-7">
            <input
              ref={pwdRef}
              type="text"
              className="fs-4"
              value={props.inpVal}
              readOnly
            />
          </div>
          <div className="col-xxl-2 col-xl-2 colxgl-2 col-md-2 col-sm-3 col-5">
            <button
              className="fs-5 btn btn-primary rounded-3 w-100"
              onClick={() => props.copyFunc(pwdRef)}
            >
              copy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
