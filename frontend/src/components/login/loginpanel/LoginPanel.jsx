
import React from "react";
import { useState} from "react";
import { LoginForm } from "./LoginForm";
import { ConfirmOtp } from "./ConfirmOtp";
import UserForm from "./UserForm";
import Auth from "../../../auth";
import styled from 'styled-components'
const Style = styled.div`
.loginMain {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 50%;
    margin: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    text-align: left;
  }
  .login-wrap {
    top: 50%;
    left: 50%;
    bottom: 0;
    right: 0;
    width: 480px;
    height: auto;
    min-height: 500px;
    padding: 30px;
    min-width: 450px;
    border-radius: 10px;
    position: fixed;
    z-index: 2;
    background-color: #fff;
    color: black;
    transform: translate(-50%, -50%);
    box-shadow: 0 1px 7px 0 rgb(0 0 0 / 40%);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .close {
    font-size: 20px;
    text-align: right;
  }
  .close > span {
    cursor: pointer;
  }
  
`;
export const LoginPanel = ({ handleClick, handleUser }) => {

  const [otpSend, setOtpSend] = useState(false);
  const [findUser, setFindUser] = useState({});
  const [isUserExist, setIsUserExist] = useState(); //initial existence of user

  const checkIsUserExist=(mob)=>{

    console.log(mob)
    //fetch user from database using mobile number
    // let user = {
    //   name:"Rahul yadav",
    //   password:"rahul@123"
    // }
    // setFindUser(user)
    // handleClick()
    // setIsUserExist(true)

    //if found user then  call handleuser(gotuser)
    
    
    //set user false

    setIsUserExist(false)
    //

  }

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
    const handleNewUser = (newuser)=>{
    
      handleUser(newuser)
    }

  return (
  <Style>
      <div className="loginMain">
      <div className="login-wrap">
        <div className="close">
          <span onClick={handleClick}>X</span>
        </div>
        {
          (Auth.isAuthenticated()&& isUserExist ) ?handleNewUser(findUser):
        
        (Auth.isAuthenticated()&& !isUserExist ) ? <UserForm handleNewUser={handleNewUser} />:otpSend ? (
          <ConfirmOtp
                handleNewUser = {checkIsUserExist}
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
  </Style>
  );
};
