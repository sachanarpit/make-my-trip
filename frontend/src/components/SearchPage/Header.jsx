import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import styled from "styled-components";
const Icondivcss = styled.div`
  .icondiv {
    height: 60px;
    width: 100%;
    margin: auto;
    background-color: white;
    display: flex;
    flex-direction: row;
    position: sticky;
    z-index: 100;
    text-align: center;
    .icons {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 60%;

      p {
        padding: 0px;
        margin: -6px;
        color: #555454;
        font-size: 11px;
      }
      span {
        color: #a3a3a3;
        cursor: pointer;
      }
      span:hover {
        color: #2db0fc;
      }
      div:hover {
        color: #2db0fc;
      }
    }
  }
  .imgdiv {
    position: relative;
    top: 10px;
    left: 0px;
    img {
      width: 50%;
    }
  }
  .login {
    /* align-items: center; */
    display: flex;
    font-size: 13px;
    background: linear-gradient(to right,  #8f92fa 0%,#6165f0 50%,#6c70eb 50%,#3339e9 100%);
    padding-left: 14px;
    position: absolute;
    right: 30px;
    top: 10px;
    font-weight: 600;
    border-radius: 8px;
    color: white;
    line-height: 10px;
    width: 150px;
    height: 40px;
  }
`;

export const Header = () => {
  return (
    <Icondivcss>
      <div className="icondiv">
        <div className="imgdiv">
          <img
            src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png"
            alt=""
          />
        </div>
        <div className="icons">
          <div>
            <span>
              <FlightIcon style={{ fontSize: 30, padding: 4 }}></FlightIcon>
            </span>
            <p>Flights</p>
          </div>
          <div>
            <span>
              <HotelIcon style={{ fontSize: 30, padding: 4 }}></HotelIcon>
            </span>
            <p>Hotels</p>
          </div>
          <div>
            <span>
              <HomeWorkIcon style={{ fontSize: 30, padding: 4 }}></HomeWorkIcon>
            </span>
            <p>Homestays</p>
          </div>
          <div>
            <span>
              <HolidayVillageIcon
                style={{ fontSize: 30, padding: 4 }}
              ></HolidayVillageIcon>
            </span>
            <p>Hoiday packages</p>
          </div>
          <div>
            <span>
              <TrainIcon style={{ fontSize: 30, padding: 4 }}></TrainIcon>
            </span>
            <p>Trains</p>
          </div>
          <div>
            <span>
              <DirectionsBusFilledIcon
                style={{ fontSize: 30, padding: 4 }}
              ></DirectionsBusFilledIcon>
            </span>
            <p>Buses</p>
          </div>
          <div>
            <span>
              <LocalTaxiIcon
                style={{ fontSize: 30, padding: 4 }}
              ></LocalTaxiIcon>
            </span>
            <p>Cabs</p>
          </div>
          <div>
            <span>
              <CreditCardIcon
                style={{ fontSize: 30, padding: 4 }}
              ></CreditCardIcon>
            </span>
            <p>Visa</p>
          </div>
          <div>
            <span>
              <FlightTakeoffIcon
                style={{ fontSize: 30, padding: 4 }}
              ></FlightTakeoffIcon>
            </span>
            <p>Charter flights</p>
          </div>
          <div>
            <span>
              <DownhillSkiingIcon
                style={{ fontSize: 30, padding: 4 }}
              ></DownhillSkiingIcon>
            </span>
            <p>Activities</p>
          </div>
        </div>
        <div className="login">
          <p>Login or Create Account</p>
        </div>
      </div>
    </Icondivcss>
  );
};
