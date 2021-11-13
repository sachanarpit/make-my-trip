
import {Flightdetailfootercss} from './Flightdetailfootercss.jsx';
import { Link } from 'react-router-dom';
const Flightdetailfooter = () => {
const handle = ()=>{
    let res = localStorage.getItem('buy')
    let a = JSON.parse(res)
    a = +a.departure.delay === 0 || null
    ? "₹1200"
    : "₹" + a.departure.delay * 200
    a = a.split('₹')[1]
    localStorage.setItem('price',JSON.stringify(a))
}

    return (
       <Flightdetailfootercss>
           <div className="flightfooter">
               <h3>Important Information</h3>
               <div>
                   <div className="inline">
                       <img alt=""  src= "https://imgak.mmtcdn.com/flights/assets/media/dt/rta_assets/imp-info.png"/>
                       <h5>Mandatory check-list for passengers</h5>
                   </div>
                   <ul>
                       <li>Vaccination Requirements : None</li>
                       <li>COVID test requirements : Negative RT-PCR test report is not required for passengers travelling from other states to enter Telangana.</li>
                       <li>Pre-registration or e-Pass requirements : Download and update Aarogya Setu app.</li>
                       <li>Quarantine Guidelines : None.</li>
                       <li>Destination Restrictions : None</li>
                       <li>Remember to web check-in before arriving at the airport; carry a printed or soft copy of the boarding pass</li>
                       <li>Please reach at least 2 hours prior to flight departure</li>
                       <li>The latest DGCA guidelines state that it is compulsory to wear a mask that covers the nose and mouth properly while at the airport and on the flight. Any lapse might result in de-boarding</li>
                       <li>Remember to download the baggage tag(s) and affix it on your bag(s).</li>
                   </ul>
               </div>
               <div>
                   <div className="inline">
                       <img alt=""  src= "https://imgak.mmtcdn.com/flights/assets/media/dt/rta_assets/imp-info.png"/>
                       <h5>State Guidelines</h5>
                   </div>
                   <ul>
                       <li>Check the detailed list of travel guidelines issued by Indian States and UTs</li>
                   </ul>
               </div>
               <div>
                    <div className="inline">
                       <img alt=""  src= "https://imgak.mmtcdn.com/flights/assets/media/dt/rta_assets/imp-info.png"/>
                       <h5>Baggage information</h5>
                   </div>
                   <ul>
                       <li>Carry no more than 1 check-in baggage and 1 hand baggage per passenger. Additional pieces of Baggage will be subject to additional charges per piece in addition to the excess baggage charges.</li>
                   </ul> 
               </div>
               <div>
                    <div className="inline">
                       <img alt=""  src= "https://imgak.mmtcdn.com/flights/assets/media/dt/rta_assets/imp-info.png"/>
                       <h5>A Note on Guidelines</h5>
                   </div>
                   <ul>
                       <li>Disclaimer: The information provided above is only for ready reference and convenience of customers, and may not be exhaustive. We strongly recommend that you check the full text of the guidelines issued by the State Governments before travelling. MakeMyTrip accepts no liability in this regard.</li>
                   </ul> 
               </div>               
           </div>
           <div className="btn"><button onClick={handle}><Link to="/final">CONTINUE</Link></button></div>
       </Flightdetailfootercss>
    )
}

export {Flightdetailfooter}