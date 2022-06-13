import React, { useContext } from "react";
import AuthContext from "../context/auth-context";

const LogoutButton = () => {
  const ctx = useContext(AuthContext);
  return (
    <>
      <button type="button" onClick={() => ctx.logout()}>
        Logout
      </button>
    </>
  );
};

export default LogoutButton;
