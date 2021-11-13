import { Navbar } from "./Navbar";
import { Smallbutton } from "./Smallbutton";
import BusinessIcon from "@mui/icons-material/Business";
import { Icondiv } from "./Icondiv";
import { Bookingcss } from "./Bookingcss";
import { Fromto } from "./Fromto";
import { MultipleSlidesExample, BigSlidesExample } from "./Slidebar";
import { Bigslide, TripMoney } from "./Slidecss";
import { Bottom } from "./Bottom";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import { SmallBottom } from "./SmallBottom";
import { useState } from "react";
import { FareTypes } from "./FareTypes";
import { Login } from "../login/Login";
export const Main = () => {
  const [data, setData] = useState({
    from: "",
    to: "",
  });
  const handleData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const addLocal = () => {
    localStorage.setItem("myKey", JSON.stringify(data));
  };
  const handlePopup = () => {
    const popup = document.getElementById("popup");
    popup.classList.toggle("active");
  };
  return (
    <div>
      <Header></Header>
      <Navbar>
        <div className="topdiv">
          <img
            className="laltain"
            src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/DiwaliLantern.webp"
            alt=""
          />
          <Link to="/">
            <img
              className="mmtlogo"
              src={
                "https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png"
              }
              alt="Logo"
            />
          </Link>
          <div className="login">
          <Login handleClick={handlePopup}/>
          </div>
          <Smallbutton>
            <div className="smallbuttonpic">
              <BusinessIcon></BusinessIcon>
            </div>
            <div>
              <h4>My Trips</h4>
              <p>Manage your Bookings</p>
            </div>
          </Smallbutton>
          <Smallbutton>
            <div className="smallbuttonpic">
              <img
                src="https://imgak.mmtcdn.com/mybiz/assets/images/landing/myBizLogo_light.png"
                alt=""
              />
            </div>
            <div>
              <h4>Introducing myBiz</h4>
              <p>MakeMyTrip for Buisness</p>
            </div>
          </Smallbutton>
        </div>
        <Bookingcss>
          <Icondiv className="icondiv"></Icondiv>
          <div className="checkboxdiv">
            <div>
              {" "}
              <input type="checkbox" />
              <label htmlFor="">ONEWAY</label>
              <input type="checkbox" />
              <label htmlFor="">ROUNDWAY</label>
              <input type="checkbox" />
              <label htmlFor="">MULTI CITY</label>
            </div>
            <div>INTERNATIONAL FLIGHTS | DOMESTIC FLIGHTS</div>
          </div>
          <Fromto handleChange={handleData} />
          <FareTypes />
        </Bookingcss>
        <div className="button">
          <button onClick={addLocal}>
            <Link to="/search">SEARCH</Link>
          </button>
        </div>
      </Navbar>
      <div style={{ background: "#ebe7e7", paddingTop: "50px" }}>
        <SmallBottom />
        <div style={{ width: "90%", margin: "auto" }}>
          <MultipleSlidesExample />
        </div>
        <Bigslide>
          <div className="supreoffers">
            <h1>Super Offers</h1>
            <div>
              <h3>ALL OFFERS</h3>
              <h3>BANK OFFERS</h3>
              <h3>DOMESTIC FLIGHTS</h3>
              <h3>MORE</h3>
            </div>
          </div>
          <BigSlidesExample className="bigslideex"></BigSlidesExample>
        </Bigslide>
        <TripMoney>
          <div className="maindiv">
            <div id="div2" style={{ borderColor: "#e47dad" }}>
              <img
                src="https://www.tripmoney.com/ext/static/TravelLoan/travelLoan.png"
                alt=""
              />
              <div>
                <div className="spa1n"></div>
                <h3>Personal loan</h3>
                <p>Get upto ₹1 lakh for booking flights, hotels & more.</p>
              </div>
              <div className="span2"></div>
            </div>
            <div id="div2" style={{ borderColor: "#dde47d" }}>
              <img
                src="https://www.tripmoney.com/ext/static/credit-card/cc@3x.png"
                alt=""
              />
              <div>
                <div className="spa1n"></div>
                <h3>Credit cards</h3>
                <p>Get instant approval & unmatched privileges.</p>
              </div>
              <div className="span2"></div>
            </div>
            <div id="div2" style={{ borderColor: "#7dbee4" }}>
              <img
                src="https://www.tripmoney.com/ext/static/PL/pl.png"
                alt=""
              />
              <div>
                <div className="spa1n"></div>
                <h3>Travel loan</h3>
                <p>Get approval for ₹30,00,000 at low interest rates.</p>
              </div>
              <div className="span2"></div>
            </div>
          </div>
        </TripMoney>
        <Bottom />
      </div>
    </div>
  );
};
