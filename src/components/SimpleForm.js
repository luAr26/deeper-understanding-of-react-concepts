import { useState, useEffect } from "react";

import classes from "./SimpleForm.module.scss";

const SimpleForm = ({ login }) => {
  // If we access values using refs => uncontrolled components
  // const emailInputRef = useRef();
  // const passwordInputRef = useRef();

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [formIsInvalid, setFormIsInvalid] = useState(true);

  useEffect(() => {
    console.log("Use effect is running");

    if (
      enteredEmail.indexOf("@") !== -1 &&
      enteredPassword.trim().length >= 7
    ) {
      setFormIsInvalid(false);
    }
  }, [enteredEmail, enteredPassword]);

  const handlePasswordChange = (e) => {
    setEnteredPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEnteredEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formIsInvalid) {
      console.log("Please enter correct values in the form fields");
      return;
    }
    login();
  };

  return (
    <form className={classes["simple-form"]} onSubmit={handleSubmit}>
      <div className={classes["control-container"]}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="enteredEmail"
          value={enteredEmail}
          onChange={handleEmailChange}
          // ref={emailInputRef}
        />
      </div>
      <div className={classes["control-container"]}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="enteredPassword"
          value={enteredPassword}
          onChange={handlePasswordChange}
          // ref={passwordInputRef}
        />
      </div>
      <button type="submit" disabled={formIsInvalid}>
        Login
      </button>
    </form>
  );
};

export default SimpleForm;
