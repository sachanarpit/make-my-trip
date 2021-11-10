import { useState } from "react";
import "./loginForm.css";
export const LoginForm = ({ handleOtpStatus }) => {
  const [user, setUser] = useState({
    mobile:""
  });

  const handleChange = (e)=>{
    const {name, value} = e.target;
      
     setUser({...user, [name]: value})
  }
  const handleSubmit = (e) => {
    
    e.preventDefault();
    
    if(user.mobile.length === 10) handleOtpStatus(user);
    
    else(alert("Invalid mobile number"))
   
  };

 

  return (
    <>
      <div className="loginForm">
        <div className="acc-type">
          <div className="active-login">PERSONAL ACCOUNT</div>
          <div> MYBIZ ACCOUNT</div>
        </div>
        <h1>Login/signup </h1>
        <form onSubmit={handleSubmit}>
          <div className="inp-wrap">
            <label>Enter Mobile Number</label>
            <div className="inp">
              <input
                type="text"
                onChange={handleChange}
                placeholder="987*****21"
                name="mobile"
                minLength="10"
                required
              />
            </div>
            <p
              className={
                user.mobile.length  === 10 ||  user.mobile.length  === 0 ? "hide" : "indicate"
              }
            >
              Please enter a 10 digit valid Mobile Number.
            </p>
          </div>
          <div>
            <input type="submit" className="cbtn" value="CONTINUE" />
          </div>
        </form>
        <p className="other-option">Or Login/Signup With</p>
        <div>
          <div className="google-signup">
            <span className="g-logo">
              <img
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-logos-vector-eps-cdr-svg-download-10.png"
                alt="google-logo"
              />
            </span>
            <span>Login with Google</span>
          </div>
        </div>
        <p className="tc">
          By proceeding, you agree to MakeMyTrip's{" "}
          <a href="#">Privacy Policy</a>, <a href="#">User Agreement</a> and{" "}
          <a href="#">T&Cs</a>
        </p>
      </div>
    </>
  );
};
