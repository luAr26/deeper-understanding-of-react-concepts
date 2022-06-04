import { useRef } from "react";

import classes from "./SimpleForm.module.scss";

const SimpleForm = () => {
  // If we access values using refs => uncontrolled components
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");

  // const handlePasswordChange = (e) => {
  //   setEnteredPassword(e.target.value);
  // };

  // const handleEmailChange = (e) => {
  //   setEnteredEmail(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(`The entered email is: ${enteredEmail}`);
    // console.log(`The entered password is: ${enteredPassword}`);
    console.log(
      `And using ref the value of the entered email is: ${emailInputRef.current.value}`
    );
    console.log(
      `And using ref the value of the entered password is: ${passwordInputRef.current.value}`
    );
  };
  return (
    <form className={classes["simple-form"]} onSubmit={handleSubmit}>
      <div className={classes["control-container"]}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="enteredEmail"
          // value={enteredEmail}
          // onChange={handleEmailChange}
          ref={emailInputRef}
        />
      </div>
      <div className={classes["control-container"]}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="enteredPassword"
          // value={enteredPassword}
          // onChange={handlePasswordChange}
          ref={passwordInputRef}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default SimpleForm;
