import React, { useContext } from "react";
import SimpleForm from "./SimpleForm";
import LogoutButton from "./LogoutButton";
import AuthContext from "../context/auth-context";

const AuthComponent = () => {
  const ctx = useContext(AuthContext);
  const context = !ctx.isLoggedIn ? (
    <SimpleForm />
  ) : (
    <>
      <p>The user is logged in. You can logout by clicking the button below.</p>
      <p>
        <LogoutButton />
      </p>
    </>
  );
  return context;
};

export default AuthComponent;
