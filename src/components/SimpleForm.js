import { useState, useEffect } from "react";

import classes from "./SimpleForm.module.scss";

const SimpleForm = ({ login }) => {
  // If we access values using refs => uncontrolled components
  // const emailInputRef = useRef();
  // const passwordInputRef = useRef();

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [formIsInvalid, setFormIsInvalid] = useState(true);

  // What to add & not to add as dependencies in the useEffect hook
  // You should add "everything" you use in the effect function as dependency, with a FEW exceptions:
  // 1. You don't need to add state updating functions
  // 2. You don't need to add "built-in" API or function (e.g. localStorage, setTimeout)
  // 3. You don't need to add variables or function you might've defined OUTSIDE of your components

  // So long story short: must must add all "things" you use in your effect function if those "things"
  // could change because your component (or some parent component) re-rendered.
  // That's why variables or state defined in component functions, props or function defined in component functions have
  // to be added as dependencies

  useEffect(() => {
    // Debouncing
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsInvalid(
        !(
          enteredEmail.indexOf("@") !== -1 && enteredPassword.trim().length >= 7
        )
      );
    }, 500);

    return () => {
      console.log("CLEANUP");

      clearTimeout(identifier);
    };
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
