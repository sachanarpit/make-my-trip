import { useState } from "react";
import "./loginForm.css";
export const LoginForm = ({ handleOtpStatus }) => {
  const [inp, setInp] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleOtpStatus(inp);
    setInp("");
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
            <label>Mobile</label>
            <div className="inp">
              <input
                type="text"
                onChange={(e) => setInp(e.target.value)}
                placeholder="Enter mobile number"
                value={inp}
                required
              />
            </div>
            <p
              className={
                inp.length < 10 && inp.length > 0 ? "indicate" : "hide"
              }
            >
              Please enter a valid Mobile Number.
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
