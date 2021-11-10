import "./loginpanel.css";
import React from "react";
import { useState} from "react";
import { LoginForm } from "./LoginForm";
import { ConfirmOtp } from "./ConfirmOtp";

export const LoginPanel = ({ handleClick,handleStatus }) => {
  const [otpSend, setOtpSend] = useState(false);
  const [newUser, setNewUser] = useState(null);
  const [verified, setVerified] = useState(false);
  

  const handleOtpSend = (user) => {

    console.log(user)

    //setNewUser(user);

    setOtpSend(true);
  };
  const handleUser = ()=>{

  }

  const handleVer = () => {
    console.log("verified")
   setTimeout(()=>{

    setVerified(true);
    
   },2000);

   handleStatus();
  };

  return (
    <div className="loginMain">
      <div className="login-wrap">
        <div className="close">
          <span onClick={handleClick}>X</span>
        </div>
        { verified ? alert("success"):otpSend ? (
          <ConfirmOtp handleVer={handleVer} />
        ) :(
          <LoginForm handleOtpStatus={handleOtpSend} />
        )}
      </div>
    </div>
  );
};
