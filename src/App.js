// import logo from './logo.svg';
import { useState, useEffect } from "react";
import "./App.scss";
import DummyComponent from "./components/DummyComponent";
import SimpleForm from "./components/SimpleForm";
import LogoutButton from "./components/LogoutButton";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    localStorage.setItem("loggedIn", "1");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const isLoggedInStoredInfo = localStorage.getItem("loggedIn");
    if (isLoggedInStoredInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const contentBasedOnLoginStatus = !isLoggedIn ? (
    <SimpleForm login={handleLogin} />
  ) : (
    <>
      <p>The user is logged in. You can logout by clicking the button below.</p>
      <p>
        <LogoutButton logout={handleLogout} />
      </p>
    </>
  );

  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <DummyComponent />
      {contentBasedOnLoginStatus}
    </div>
  );
}

export default App;
