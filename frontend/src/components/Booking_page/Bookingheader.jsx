
import { Bookingheadercss } from './Bookingheadercss.jsx';

const Bookingheader = () => {


    return (
       <Bookingheadercss>
          <div className="bookingheader">
              <div>
                  <h2>Complete your booking</h2>
              </div>
              <div className="bookingleft">
                  <p>Flights Summary</p>
                  <p>Traveller Details</p>
                  <p>Seats  Meals</p>
                  <p>Add-ons</p>
              </div>
          </div>
       </Bookingheadercss>
    )
}

export {Bookingheader}