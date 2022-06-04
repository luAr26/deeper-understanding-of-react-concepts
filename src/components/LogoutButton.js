import React from "react";

const LogoutButton = ({ logout }) => {
  return (
    <>
      <button type="button" onClick={() => logout()}>
        Logout
      </button>
    </>
  );
};

export default LogoutButton;
