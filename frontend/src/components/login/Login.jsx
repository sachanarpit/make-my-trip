import "./login.css";
import { useState } from "react";
import { LoginPanel } from "./loginpanel/LoginPanel";
import Auth from "../../auth";
import axios from "axios";
export const Login = ({ handleClick}) => {
  
  const [user, setUser] = useState({ name: "Rahul Kumar" });

  const logOut = ()=>{

    axios.get("http://localhost:4000/logout").then((res)=>{
      console.log(res.data)
      window.location.reload();
    }).catch((err)=>{
      console.error(err.response)
    })
  }

 

  //setting user details
  const handleUser = (mob)=>{
    console.log(mob);
    //set the login user here...
  }

 
  return (
    <>
      <div className="loginTrigger" onClick={(Auth.isAuthenticated())?null: handleClick}>
        <span className="login-logo">{(!Auth.isAuthenticated()) ? user.name[0] : "My"}</span>
        {(Auth.isAuthenticated()) ? (        
          <div className="userLogged">
            <span>Hi {user.name}</span>
            <button onClick={logOut}>Logout</button>
          </div>
        ) : (
          <div className="account">
            <span>Login or</span>
            <span> Create Account</span>
          </div>
        )}
      </div>
      <div id="popup">
        <LoginPanel
          handleClick={handleClick}             // for popup 
        //  handleStatus ={handleStatus}          // see is user login or not
          handleUser={handleUser}               //setting user details
          />             
      </div>
    </>
  );
};
