
import {Canceldetailcss} from './Canceldetailcss.jsx';

const Canceldetail = () => {


    return (
       <Canceldetailcss>
           <div className="cancel">
               <div className="cancel_header">
                   <h4>Cancellation Refund Policy</h4>
                   <p>View Policy</p>
               </div>
               <div className="icon_div">
                   <img src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=7"/>
                   <h4>PAT-HYD</h4>
               </div>
               <div className="penalty">
                   <div className="penalty_rs">
                       <p>Cancellation Penalty :</p>
                       <h5>₹ 3,300</h5>
                       <h5>₹ 3,800</h5>
                       <h5>₹ 4,000</h5>
                       <h5></h5>
                   </div>
                   <div className="penalty_line">
                   <p className="cancGradline"></p>
                   </div>
                   <div className="penalty_date">
                       <p>Cancel Between (IST) :</p>
                       <h6>Now</h6>
                       <h6>7 Dec <p>10.45</p></h6>
                       <h6>10 Dec <p>8.45</p></h6>
                       <h6>10 Dec <p>10.45</p></h6>
                   </div>
               </div>
               <div className="cancel_footer">
                  <div className="cancel_footer_left">
                    <img className="rs_icon" src="https://imgak.mmtcdn.com/flights/assets/media/dt/rta_assets/fare-upgrade.png"/>
                    <p>More fares with flexible refund & date change policy available!</p>
                  </div>
                   <p className="upgrade">UPGRADE</p>
               </div>
           </div>
       </Canceldetailcss>
    )
}

export {Canceldetail}