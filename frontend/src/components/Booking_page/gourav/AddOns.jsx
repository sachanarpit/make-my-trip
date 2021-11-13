import styled from "styled-components";
<<<<<<< HEAD
import axios from 'axios'
=======
>>>>>>> master
const Style = styled.div`
  width: 64%;
  margin-left: 70px;
  .main {
    height: 120px;
    padding: 2%;
    box-shadow: 0px 0px 3px gray;
    border-radius: 8px;
    background-color: white;
    .green {
      font-size: 15px;
      color: green;
    }
    h4 {
      padding: 0;
      margin: 0;
    }
  }
  .secure {
    div {
      padding: 2%;
      display: flex;
      align-items: center;
      gap: 20px;
      position: relative;
      top: -20px;
    }
  }
  .acc{
      padding: 2%;
      margin-top: 50px;
      box-shadow: 0px 0px 3px gray;
      border-radius: 8px;
      background-color: white;

      p{
          font-size: 15px;
          font-weight: 500;
      }
  }
  .continue{
    a{
        text-decoration: none;
        color: white;
    }
    width: 230px;
      height: 35px;
      border-radius: 25px;
      background: linear-gradient(
        to right,
        #8f92fa 0%,
        #6165f0 50%,
        #6c70eb 50%,
        #3339e9 100%
      );
      border: none;
      color: white;
      font-weight: 700;
      font-size: 20px;
  }
`;
export const AddOns = () => {
<<<<<<< HEAD
  const handleRazor = async ()=>{
    const data = await axios.post('http://localhost:3001/razorpay')
    console.log(data);
  }
=======
>>>>>>> master
  return (
    <Style>
      <h2>Add-ons</h2>
      <div className="main">
        <p className="green">
          Great! Your trip is now protected, as just RS299 per traveller (18%
          GST Included) Know more
        </p>
        <div className="secure">
          <div>
            <input type="checkbox" />
            <h4>Yes, secure my trip</h4>
          </div>
          <div>
            <input type="checkbox" />
            <h4>No, I do not wish to secure my trip</h4>
          </div>
        </div>
      </div>

      <div className="acc">
        <p>
          By clicking on the continue button below to proceed with the booking.
          I confirm that I have read and I accept the Fare Rules, the Privacy
          Policy, the User Agrreement and Terms of Services of MakeMyTrip.
        </p>
<<<<<<< HEAD
        <button onClick={handleRazor} className="continue">CONTINUE</button>
=======
        <button className="continue">CONTINUE</button>
>>>>>>> master
      </div>
    </Style>
  );
};
