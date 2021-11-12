import "./login.css";
import { useState } from "react";
import { LoginPanel } from "./loginpanel/LoginPanel";
import Auth from "../../auth";
import axios from "axios";
export const Login = ({ handleClick}) => {
  
  const [user, setUser] = useState({name:"Traveller"});
  
  const logOut = ()=>{

    axios.get("http://localhost:4000/logout").then((res)=>{
      console.log(res.data)
      window.location.reload();
    }).catch((err)=>{
      console.error(err.response)
    })
  }

  // if(Auth.isAuthenticated()){
  //   //fetch the user from database and set user
  //   setUser({name:"rahul yadav"})

  //   //else create new user
  // }
 

  //setting user details
  const handleUser = (user)=>{

    handleClick()

    setUser(user)
    
    //set the login user here...
  }

 
  return (
    <>
      <div className="loginTrigger" onClick={(Auth.isAuthenticated())?null: handleClick}>
        <span className="login-logo">{(Auth.isAuthenticated()) ? user.name[0] : "My"}</span>
        {(Auth.isAuthenticated()) ? (        
          <div className="userLogged">
            <span>Hi {user.name}</span>
            <button onClick={logOut} className="logout-btn">Logout</button>
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
