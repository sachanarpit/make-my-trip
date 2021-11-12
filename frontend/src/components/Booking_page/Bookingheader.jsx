import { Bookingheadercss } from "./Bookingheadercss.jsx";
import { useState } from "react";
const Bookingheader = () => {
  const [nav, setNav] = useState(false);
  const handleChange = () => {
    if (window.scrollY >= 10) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", handleChange);
  return (
    <Bookingheadercss>
      <div className={nav === true ? "jello" : "yello"}>
        <div className="bookingheader">
          <div>
            <h2>Complete your booking</h2>
          </div>
          <div className="bookingleft">
            <p>Flights Summary</p>
            <p>Traveller Details</p>
            <p>Seats Meals</p>
            <p>Add-ons</p>
          </div>
        </div>
      </div>
    </Bookingheadercss>
  );
};

export { Bookingheader };
