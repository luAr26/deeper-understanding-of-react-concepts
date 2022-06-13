import { useState, useEffect, useReducer, useContext } from "react";
import AuthContext from "../context/auth-context";

import classes from "./SimpleForm.module.scss";

const emailReducer = (lastStateSnapshot, action) => {
  if (action.type === "EMAIL_USER_INPUT") {
    return { value: action.val, isValid: action.val.indexOf("@") !== -1 };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (lastStateSnapshot, action) => {
  if (action.type === "PASSWORD_USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }

  return { value: "", isValid: false };
};

const SimpleForm = () => {
  // If we access values using refs => uncontrolled components
  // const emailInputRef = useRef();
  // const passwordInputRef = useRef();
  const ctx = useContext(AuthContext);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });
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

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  useEffect(() => {
    // Debouncing
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsInvalid(!(emailIsValid && passwordIsValid));
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const handlePasswordChange = (e) => {
    dispatchPassword({ type: "PASSWORD_USER_INPUT", val: e.target.value });
  };

  const handleEmailChange = (e) => {
    dispatchEmail({ type: "EMAIL_USER_INPUT", val: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formIsInvalid) {
      console.log("Please enter correct values in the form fields");
      return;
    }
    ctx.login();
  };

  return (
    <form className={classes["simple-form"]} onSubmit={handleSubmit}>
      <div className={classes["control-container"]}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="enteredEmail"
          value={emailState.value}
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
          value={passwordState.value}
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
// Keep the streak going #?
export default SimpleForm;
