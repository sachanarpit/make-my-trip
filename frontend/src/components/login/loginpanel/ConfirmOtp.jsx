import React from "react";
import axios from "axios";
import styled from 'styled-components'
const Style = styled.div`
text-align: center;
width: 100%;
height: 100%;
h1{
  color: blue;
}
p{
  margin-top: 30px;
}
input{
  width: 70%;
  margin: auto;
  height: 30px;
  border: 1px solid blue;
  margin-top: 50px;
  border-radius: 6px;
  padding: 2%;
}
button{
  border: none;
    font-size: 13px;
    margin-top:30px;
    background: linear-gradient(
      to right,
      #8f92fa 0%,
      #6165f0 50%,
      #6c70eb 50%,
      #3339e9 100%
    );
    font-weight: 600;
    border-radius: 8px;
    color: white;
    width: 150px;
    height: 40px;
}
`
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
   <Style>
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
      <button className="cbtn" type="submit" 
        value="Verify & create Account"
      >Submit</button>
      </form>
    </div>
   </Style>
  );
};
