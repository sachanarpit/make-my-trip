
import {Flightdetailcss} from './Flightdetailcss.jsx';

const Flightdetail = () => {
   let data = localStorage.getItem('buy')
   let res = JSON.parse(data)
    return (
       <Flightdetailcss>
            <div className="flightdetail">
                <div className="flightdetailheader">
                    <div>
                        <h2> {res.departure.iata} → {res.arrival.iata} </h2>
                        <p>
                            <span className="date">Friday, Dec 10</span>
                            <span className="date">Non Stop  {+res.arrival.scheduled
                    .split("T")[1]
                    .split("+")[0]
                    .split(":")[0] -
                    Number(
                      res.departure.scheduled
                        .split("T")[1]
                        .split("+")[0]
                        .split(":")[0]
                    ) +
                    " hours " +
                    (+res.arrival.scheduled
                      .split("T")[1]
                      .split("+")[0]
                      .split(":")[1] -
                      Number(
                        res.departure.scheduled
                          .split("T")[1]
                          .split("+")[0]
                          .split(":")[1]
                      ) +
                      " minutes")}</span>
                        </p>
                    </div>
                    <div></div>
                    <div>
                        <p className="cancel_fee">Cancellation Fees Apply</p>
                        <p className="fare_rules">
                            <span>View Fare Rules</span>
                        </p>
                    </div>
                </div>
                <div className="flightdetail_wrap">
                    <div className="flightdetail_internal">
                        <div className="icon_div">
                           <img alt=""  src={
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
                  }/>
                           <p>{res.airline.name}</p>
                           <p>{res.flight.iata}</p>
                        </div>
                        <div className="icon_div">
                            <p>Economy</p>
                            <h4>SAVER</h4>
                        </div>
                    </div>
                    <div id="flight_timer" className="flight_time">
                        <div>
                           <div className="flight_time">
                                <h4>{res.departure.scheduled.split("T")[1].split("+")[0]}</h4>
                                <p></p>
                                <h4>{res.departure.iata}</h4>
                                <p className="over">{res.departure.airport}</p>
                           </div>
                           <div className="timeer"><p> {+res.arrival.scheduled
                    .split("T")[1]
                    .split("+")[0]
                    .split(":")[0] -
                    Number(
                      res.departure.scheduled
                        .split("T")[1]
                        .split("+")[0]
                        .split(":")[0]
                    ) +
                    " hours " +
                    (+res.arrival.scheduled
                      .split("T")[1]
                      .split("+")[0]
                      .split(":")[1] -
                      Number(
                        res.departure.scheduled
                          .split("T")[1]
                          .split("+")[0]
                          .split(":")[1]
                      ) +
                      " minutes")}</p></div>
                           <div  className="flight_time">
                                <h4>{res.arrival.scheduled.split("T")[1].split("+")[0]}</h4>
                                <p></p>
                                <h4>{res.arrival.iata} </h4>
                                <p className="over">{res.arrival.airport}</p>
                           </div>
                        </div>
                        <div  className="flight_time"> 
                            <div>
                                <p>Baggage</p>
                                <h6>ADULT</h6>
                            </div>
                            <div>
                                <p>CheckIn</p>
                                <h6>15 Kgs (1 piece only)</h6>
                            </div>
                            <div>
                                <p>Cabin</p>
                                <h6>7 Kgs (1 piece only)</h6>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
       </Flightdetailcss>
    )
}

export {Flightdetail}