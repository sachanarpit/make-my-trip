import React from "react";
import { useState } from "react";
import "./confirmOtp.css";
export const ConfirmOtp = ({handleVer}) => {

  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(otp.length==6) handleVer();
    else{alert("Incorrect OTP")}
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
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="OTP"
          required
        />
      </div>
      <button className="cbtn" type="submit" >
        Verify & create Account
      </button>
      </form>
    </div>
  );
};
