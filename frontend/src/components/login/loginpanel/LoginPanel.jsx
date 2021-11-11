import "./loginpanel.css";
import React from "react";
import { useState} from "react";
import { LoginForm } from "./LoginForm";
import { ConfirmOtp } from "./ConfirmOtp";
import Auth from "../../../auth";
export const LoginPanel = ({ handleClick, handleUser }) => {

  const [otpSend, setOtpSend] = useState(false);

  const [state,setState] = useState({
    phone:"",
    hash:"",
    otp:""
  });

  const {phone,hash,otp} = state;
  const value = {phone,hash,otp}

  const handleOtpSend = () => {
    setOtpSend(true);
  };

// handling with user login inputs
    const handleChange = (input)=>(e)=>{

      setState({...state,[input]:e.target.value});
    }
  
    //handling has status
    const hashHandleChange = (hash)=>{
      setState({...state, hash:hash});
    }

  return (
    <div className="loginMain">
      <div className="login-wrap">
        <div className="close">
          <span onClick={handleClick}>X</span>
        </div>
        { (Auth.isAuthenticated()) ? handleUser(value.phone):otpSend ? (
          <ConfirmOtp
                handleChange={handleChange}           // handling with user login inputs          
                value = {value}
          />
        ) :(
          <LoginForm 
          handleOtpStatus={handleOtpSend} 
          handleChange={handleChange}           // handling with user login inputs
          hashHandleChange={hashHandleChange}   //handling has status
          value = {value}
          
          />
        )}
      </div>
    </div>
  );
};
