import { Canceldetailcss } from "./Canceldetailcss.jsx";

const Canceldetail = () => {
  let data = localStorage.getItem("buy");
  let res = JSON.parse(data);
  return (
    <Canceldetailcss>
      <div className="cancel">
        <div className="cancel_header">
          <h4>Cancellation Refund Policy</h4>
          <p>View Policy</p>
        </div>
        <div className="icon_div">
          <img
            alt=""
            src={
              res.airline.name === "IndiGo"
                ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=7"
                : res.airline.name === "Air India"
                ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?v=7"
                : res.airline.name === "AirAsia"
                ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/I5.png?v=7"
                : res.airline.name === "Vistara"
                ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/UK.png?v=7"
                : res.airline.name === "SpiceJet"
                ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SG.png?v=7"
                : res.airline.name === "GoAir"
                ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/G8.png?v=7"
                : "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/G8.png?v=7"
            }
          />
          <h4>
            {res.departure.iata}-{res.arrival.iata}
          </h4>
        </div>
        <div className="penalty">
          <div className="penalty_rs">
            <p>Cancellation Penalty :</p>
            <h5>₹ 3,300</h5>
            <h5>₹ 3,800</h5>
            <h5>₹ 4,000</h5>
          </div>
          <div className="penalty_line">
            <p className="cancGradline"></p>
          </div>
          <div className="penalty_date">
            <p>Cancel Between (IST) :</p>
            <h6>Now</h6>
            <h6>
              7 Dec <p>10.45</p>
            </h6>
            <h6>
              10 Dec <p>8.45</p>
            </h6>
            <h6>
              10 Dec <p>10.45</p>
            </h6>
          </div>
        </div>
        <div className="cancel_footer2">
          <div className="cancel_footer_left">
            <img
              className="rs_icon"
              alt=""
              src="https://imgak.mmtcdn.com/flights/assets/media/dt/rta_assets/fare-upgrade.png"
            />
            <p>
              More fares with flexible refund & date change policy available!
            </p>
          </div>
          <p className="upgrade">UPGRADE</p>
        </div>
      </div>
    </Canceldetailcss>
  );
};

export { Canceldetail };
