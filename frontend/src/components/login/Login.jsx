import "./login.css";
import { useState } from "react";
import { LoginPanel } from "./loginpanel/LoginPanel";
export const Login = () => {
  const [status, setStatus] = useState(false);
  const [user, setUser] = useState({ name: "Rahul Kumar" });
  const handleClick = () => {
    const popup = document.getElementById("popup");
    popup.classList.toggle("active");
  };
  const handleStatus = () =>{
    handleClick();
    setStatus(true)
  }


  return (
    <>
      <div className="loginTrigger" onClick={(status)?null: handleClick}>
        <span className="login-logo">{status ? user.name[0] : "My"}</span>
        {status ? (
          <div className="userLogged">
            <span>Hi {user.name}</span>
          </div>
        ) : (
          <div className="account">
            <span>Login or</span>
            <span> Create Account</span>
          </div>
        )}
      </div>
      <div id="popup">
        <LoginPanel handleClick={handleClick} handleStatus ={handleStatus} />
      </div>
    </>
  );
};
