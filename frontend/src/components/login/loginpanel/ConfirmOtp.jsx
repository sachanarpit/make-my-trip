import React from "react";
import { useState } from "react";
import "./confirmOtp.css";
export const ConfirmOtp = ({handleVer}) => {

  const [otp, setOtp] = useState("");

  const handleClick = () => {
    console.log("inside")
    handleVer();
  };

  return (
    <div className="otp-cont">
      <div className="title-otp">
        <h1>Enter OTP</h1>
        <p>OTP has been sent to your Mobile</p>
      </div>
      <div className="inp">
        <input
          type="number"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP here"
          required
        />
      </div>
      <button className="cbtn" onClick={handleClick} >
        Verify & create Account
      </button>
    </div>
  );
};
