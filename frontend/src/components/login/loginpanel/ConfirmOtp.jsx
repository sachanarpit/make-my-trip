import React from "react";
//import { useState } from "react";
import "./confirmOtp.css";
import axios from "axios";
export const ConfirmOtp = (props) => {

  const { handleChange,value, handleNewUser } = props;
  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {

    e.preventDefault();

    axios.post("http://localhost:4000/verifyOTP",{
      phone:`+91${value.phone}`,
      hash:`${value.hash}`,
      otp:`${value.otp}`

    }).then((res)=>{
      alert("Login Success")
      handleNewUser(value.phone)
      //window.location.reload()
      
      //console.log(res.data)
    }).catch((err)=>{
      alert(err.response.data.msg)
     // console.error(err.response.data.msg)
    })
  };

  

  return (
    <div className="otp-cont">
      <div className="title-otp">
        <h1>Enter OTP</h1>
        <p>OTP has been sent to your Mobile</p>
      </div>
      <form onSubmit={handleSubmit} className="otpcnf-form">

      <div className="inp">
        <input
          type="number"
          value={value.otp}
          onChange={handleChange('otp')}
          placeholder="OTP"
          required
        />
      </div>
      <input className="cbtn" type="submit" 
        value="Verify & create Account"
      />
      </form>
    </div>
  );
};
