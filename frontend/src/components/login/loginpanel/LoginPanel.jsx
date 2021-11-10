import "./loginpanel.css";
import React from "react";
import { useState} from "react";
import { LoginForm } from "./LoginForm";
import { ConfirmOtp } from "./ConfirmOtp";

export const LoginPanel = ({ handleClick,handleStatus, handleUser }) => {
  const [otpSend, setOtpSend] = useState(false);

  const [verified, setVerified] = useState(false);
  

  const handleOtpSend = (user) => {

    //console.log(user)

    setOtpSend(true);
  };


  const handleVer = () => {
    console.log("verified")

    setVerified(true);
    
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
