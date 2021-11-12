import styled from "styled-components";
const Style = styled.div`
  width: 61.6%;
  margin-left: 70px;
  
  #main {
    padding: 2%;
    width: 93%;
    border-radius: 8px;
    background-color: white;

    margin: auto;
    .input {
      display: flex;
      justify-content: space-between;
      line-height: 5px;
      input{
          padding: 3%;
          width: 220px;
          height: 27px;
      }
      select{
          width: 220px;
          padding: 3%;
          border-radius: 7px;
          height: 44px;
      }
    }
  }
  .outer {
    box-shadow: 0px 0px 3px gray;
    padding: 2%;
    width: 100%;
    border-radius: 8px;
    background-color: white;

  }
`;

export const BookingDetails = () => {
  return (
    <Style>
      <h2>Booking details will be send to</h2>
      <div className="outer">
        <h4>Your ticked and flight information will be sent here.</h4>
        <div id="main">
          <div className="input">
            <div>
              <p>Country Code</p>
              <select name="" id="">
                <option value="in">(+91)India</option>
              </select>
            </div>
            <div>
              <p>Moblie No</p>
              <input type="text" placeholder="Mobile No" />
            </div>
            <div>
              <p>Email</p>
              <input type="text" placeholder="Email" />
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
};
