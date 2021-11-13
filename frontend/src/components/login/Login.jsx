
import { useState } from "react";
import { LoginPanel } from "./loginpanel/LoginPanel";
import Auth from "../../auth";
import axios from "axios";
import styled from 'styled-components'
const Style = styled.div`
.loginTrigger {
    width: 30%;
    display: flex;
    cursor: pointer;
    gap: 2%;
    font-weight: 800;
    align-items: center;
    font-size: 0.9em;
  }
  .login-logo {
    min-width: 30px;
    min-height: 25px;
    background: #000980;
    border-radius: 50%;
    text-align: center;
    vertical-align: center;
    color: white;
    padding-top: 10px;
  }
  .account {
button{
  min-width: 150px;
      height: 30px;
      color: white;
      font-weight: 600;
      border:none;
      cursor: pointer;
      font-size: 13px;
      margin-right: 50px;
      border-radius: 25px;
      background: linear-gradient(
        to right,
        #8fdcfa 0%,
        #619ff0 50%,
        #6c9feb 50%,
        #3339e9 100%);
}
  }

  #popup {
    width: 100%;
    height: 100%;
    position: fixed;
    top: -100%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
    transition: 0.5s;
    visibility: hidden;
    background: rgba(0, 0, 0, 0.6);
  }
  #popup.active {
    visibility: visible;
    top: 50%;
  }
  .userLogged{
    height: 40px;
    gap: 5px;
    display: flex;
    flex-direction: row;
    button{
      width: 60px;
      background-color: #1d1dd4;
      color: #ffffff;
      font-weight: 600;
      border: none;
      border-radius: 6px;
      font-weight: 600;
    }
  }
  .white{
    color: #ffffff;
    font-weight: 500;
    font-size: 13px;
    align-items: center;
  }
  
`
export const Login = ({ handleClick}) => {
  
  const [user, setUser] = useState({name:"Traveller"});
  
  const logOut = ()=>{

    axios.get("http://localhost:4000/logout").then((res)=>{
      console.log(res.data)
      // window.location.reload();
    }).catch((err)=>{
      console.error(err.response)
    })
  }
  const handleUser = (user)=>{

    handleClick()
    
    setUser(user)
    window.location.reload()
    //set the login user here...
  }
  return (
    <Style>
      <div className="loginTrigger" onClick={(Auth.isAuthenticated())?null: handleClick}>
        {(Auth.isAuthenticated()) ? (        
          <div className="userLogged">
            {/* <span className="login-logo">{(Auth.isAuthenticated()) ? user.name[0] : "My"}</span> */}
            <div className="white">Hi {user.name}</div>
            <button onClick={logOut} className="logout-btn">Logout</button>
          </div>
        ) : (
          <div className="account">
<button>Login</button>
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
    </Style>
  );
};
