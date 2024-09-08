import React, { createContext, useState } from "react";

export const PasswordContext = createContext();

export const PasswordProvider = ({ children }) => {
  const [rangeInpVal, setRangeInpVal] = useState(8);
  const [showHideAlert, setShowHideAlert] = useState(false);
  const [charArr, setCharArr] = useState("");
  const [checkboxObj, setCheckboxObj] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    characters: false,
  });

  const handleOnInput = (inpVal) => {
    setRangeInpVal(inpVal);
  };

  const handleOnChange = (ID) => {
    setCheckboxObj((prevObj) => ({
      ...prevObj,
      [ID]: !prevObj[ID],
    }));
  };

  return (
    <PasswordContext.Provider
      value={{
        rangeInpVal,
        checkboxObj,
        handleOnInput,
        handleOnChange,
        charArr,
        setCharArr,
        showHideAlert,
        setShowHideAlert,
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
};
