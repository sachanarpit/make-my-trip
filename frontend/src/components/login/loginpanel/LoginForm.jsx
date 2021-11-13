import axios from "axios"
import styled from 'styled-components'
const Style = styled.div`
.loginForm {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .acc-type {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 7px;
    border-radius: 51px;
    background-color: #fff;
    box-shadow: 0 1px 7px 0 rgb(0 0 0 / 30%);
    align-items: center;
    font-weight: 700;
    cursor: pointer;
    text-align: center;
  }
  .acc-type > div {
    width: 50%;
  }
  .active-login {
    color: white;
    background: blue;
    padding: 5px 25px;
    border-radius: 51px;
  }
  .google-signup {
    display: flex;
    width: 100%;
    align-items: center;
    text-align: center border;
    font-weight: 600;
    font-size: 14px;
    border: 0.2px solid grey;
    border-radius: 5px;
    justify-content: center;
    cursor: pointer;
  }
  .g-logo {
    width: 10%;
  }
  .g-logo > img {
    width: 100%;
    border-radius: 50%;
  }
  .other-option {
    font-size: 14px;
    color: grey;
  }
  .other-option,
  .tc {
    text-align: center;
    text-decoration: none;
  }
  .tc > a {
    text-decoration: none;
  }
  .cbtn {
    width: 100%;
    margin: auto;
    padding: 2%;
    background: blue;
    color: white;
    font-size: 20px;
    font-weight: 600;
    border: 0;
    border-radius: 5px;
    box-shadow: 0 1px 7px 0 rgb(0 0 0 / 30%);
    cursor: pointer;
  }
  .indicate {
    color: red;
    font-size: 12px;
    margin: 0;
  }
  .hide {
    display: none;
  }
  .inp-wrap {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 20px;
  }
  .inp {
    width: 96%;
    padding: 2%;
    border: 0.5px solid blue;
    border-radius: 5px;
  }
  .inp > input {
    border: 0;
    outline: 0;
    font-size: 16px;
    width: 100%;
  }
  
`
export const LoginForm = (props) => {

  const { handleOtpStatus,handleChange,hashHandleChange,value } = props;

  const handleSubmit = (e) => {
    
    e.preventDefault();
    
    if(value.phone.length === 10) {

      axios.post("http://localhost:4000/sendOTP",{
        phone:`+91${value.phone}`,

      }).then((res)=>{
        console.log(res.data.otp)
        //console.log(res);
        const hash = res.data.hash;
        hashHandleChange(hash);
      })

      handleOtpStatus();
    }
    
    else{
      alert("Invalid mobile number")
      
    }
   
  };

  return (
    <Style>
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
                onChange={handleChange('phone')}
                placeholder="987*****21"
                minLength="10"
                value={value.phone}
                required
              />
            </div>

            <p
              className={
                value.phone.length  === 10 ||  value.phone.length  === 0 ? "hide" : "indicate"
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
    </Style>
  );
};
