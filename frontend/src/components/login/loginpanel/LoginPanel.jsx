import "./loginpanel.css";
import React from "react";
import { useState} from "react";
import { LoginForm } from "./LoginForm";
import { ConfirmOtp } from "./ConfirmOtp";

export const LoginPanel = ({ handleClick,handleStatus }) => {
  const [otpStatus, setOtpStatus] = useState(false);
  const [user, setUser] = useState({});
  const [verified, setVerified] = useState(false);
  

  const handleOtpStatus = (user) => {
    if (user.length >= 10) console.log(user.length);
    
    setOtpStatus(true);
  };

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
        { verified ? alert("success"):otpStatus ? (
          <ConfirmOtp handleVer={handleVer} />
        ) :(
          <LoginForm handleOtpStatus={handleOtpStatus} />
        )}
      </div>
    </div>
  );
};
