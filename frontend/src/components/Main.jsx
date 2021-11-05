import { Navbar } from "./Navbar";
import { Smallbutton } from "./Smallbutton";
import BusinessIcon from "@mui/icons-material/Business";
import { Icondiv } from "./Icondiv";
import { Bookingcss } from "./Bookingcss";
import {Fromto} from "./Fromto";
import {MultipleSlidesExample,BigSlidesExample} from './Slidebar'
import {Bigslide} from './Slidecss'
// import {MultipleSlidesExample} from './Slidebar'
export const Main = () => {
  return (
    <div>
      <Navbar>
        <div className="topdiv">
          <img
            className="laltain"
            src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/DiwaliLantern.webp"
            alt=""
          />
          <img
            className="mmtlogo"
            src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png"
            alt=""
          />
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
         <Fromto/>
        </Bookingcss>
      </Navbar>
     <div style={{width: '100%' , background: '#ebe7e7', paddingTop: '50px'}}>
     <div style={{width: '90%' , margin: 'auto'}}><MultipleSlidesExample/></div>
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
     </div>
    </div>
  );
};
