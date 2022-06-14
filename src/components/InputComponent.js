import React from "react";
import classes from "./InputComponent.module.scss";

const InputComponent = ({ id, label, type, name, value, onChangeHandler }) => {
  return (
    <div className={classes["control-container"]}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChangeHandler}
        // ref={emailInputRef}
      />
    </div>
  );
};

export default InputComponent;
