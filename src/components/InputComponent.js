import React, { useRef, useImperativeHandle } from "react";
import classes from "./InputComponent.module.scss";

const InputComponent = React.forwardRef(
  ({ id, label, type, name, value, onChangeHandler }, ref) => {
    const inputRef = useRef();
    const activate = () => {
      inputRef.current.focus();
    };
    useImperativeHandle(ref, () => {
      return {
        focus: activate,
      };
    });
    return (
      <div className={classes["control-container"]}>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChangeHandler}
          ref={inputRef}
          // ref={emailInputRef}
        />
      </div>
    );
  }
);

export default InputComponent;
