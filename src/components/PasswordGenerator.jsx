import React, { useEffect, useContext } from "react";
import { PasswordContext } from "./PasswordContext";
import TextInput from "./TextInput";
import RangeInput from "./RangeInput";
import CheckboxInput from "./CheckboxInput";
import API from "./API";
import MyALert from "./MyALert";

export default function PasswordGenerator() {
  const {
    rangeInpVal,
    handleOnInput,
    checkboxObj,
    charArr,
    setCharArr,
    handleOnChange,
    showHideAlert,
    setShowHideAlert,
  } = useContext(PasswordContext);

  let arr = API();

  const printPwds = () => {
    let newCharStr = "";
    let validCharCodes = [];

    if (checkboxObj.uppercase) {
      validCharCodes.push(...Array.from({ length: 26 }, (_, i) => i + 65));
    }
    if (checkboxObj.lowercase) {
      validCharCodes.push(...Array.from({ length: 26 }, (_, i) => i + 97));
    }
    if (checkboxObj.numbers) {
      validCharCodes.push(...Array.from({ length: 9 }, (_, i) => i + 48));
    }
    if (checkboxObj.characters) {
      validCharCodes.push(
        ...Array.from({ length: 15 }, (_, i) => i + 33),
        ...Array.from({ length: 7 }, (_, i) => i + 58),
        ...Array.from({ length: 6 }, (_, i) => i + 91),
        ...Array.from({ length: 4 }, (_, i) => i + 123)
      );
    }
    if (validCharCodes.length === 0) {
      validCharCodes = Array.from({ length: 93 }, (_, i) => i + 33); // All printable characters
    }

    for (let index = 0; index < rangeInpVal; index++) {
      let newCharCode =
        validCharCodes[Math.floor(Math.random() * validCharCodes.length)];
      let newChar = String.fromCharCode(newCharCode);
      newCharStr += newChar;
    }

    setCharArr(newCharStr);
  };

  const copyPassword = (password) => {
    if (password && password.current) {
      password.current.select();
      window.navigator.clipboard.writeText(password.current.value);
      setShowHideAlert(true);
      setTimeout(() => {
        setShowHideAlert(false);
      }, 1500);
    }
  };

  useEffect(() => {
    printPwds();
  }, [rangeInpVal, checkboxObj]);

  return (
    <>
      <MyALert
        alertText="Text copied to clipboard"
        showHideVar={showHideAlert}
      />
      <div className="container">
        <h1 className="text-light fw-bold text-center my-3">
          Password Generator
        </h1>
        <div className="col-xxl-9 col-xl-10 col-lg-11 mx-auto bg-dark rounded-3 p-4">
          <TextInput inpVal={charArr} copyFunc={copyPassword} />

          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5">
              <RangeInput
                myInpClassName="mt-3"
                myLabel="Length"
                myLabelClassName="text-light ms-2"
                handleOnInputFunc={handleOnInput}
                myVal={rangeInpVal}
              />
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-7">
              {arr.map((curElem, i) => {
                return (
                  <CheckboxInput
                    myInpClassName={curElem.inputClassName}
                    inpID={curElem.inpID}
                    myLabelClassName={curElem.labelCalssName}
                    myLabel={curElem.labelText}
                    key={i}
                    handleOnChangeFunc={handleOnChange}
                    arg={curElem.inpArg}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
