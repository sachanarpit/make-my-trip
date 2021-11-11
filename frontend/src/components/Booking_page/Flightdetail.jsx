
import {Flightdetailcss} from './Flightdetailcss.jsx';

const Flightdetail = () => {


    return (
       <Flightdetailcss>
            <div className="flightdetail">
                <div className="flightdetailheader">
                    <div>
                        <h2> Patna → Hyderabad </h2>
                        <p>
                            <span className="date">Friday, Dec 10</span>
                            <span>Non Stop · 2h 10m</span>
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
                           <img src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=7"/>
                           <p>IndiGo</p>
                           <p>6E-432</p>
                        </div>
                        <div className="icon_div">
                            <p>Economy</p>
                            <h4>SAVER</h4>
                        </div>
                    </div>
                    <div id="flight_timer" className="flight_time">
                        <div>
                           <div className="flight_time">
                                <h4>10:45</h4>
                                <p></p>
                                <h4>Patna</h4>
                                <p>. Lok Nayak Jayaprakash Airport</p>
                           </div>
                           <div><p>2h 10m</p></div>
                           <div  className="flight_time">
                                <h4>12:55</h4>
                                <p></p>
                                <h4>Hyderabad </h4>
                                <p> . Rajiv Gandhi International Airport</p>
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