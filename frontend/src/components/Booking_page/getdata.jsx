import { Bookingheader } from "./Bookingheader";
import { Canceldetail } from "./Canceldetail";
import { Flightdetail } from "./Flightdetail";
import { Flightdetailfooter } from "./Flightdetailfooter";
import { Getdatacss } from "./Getdatacss";
import { Luggagebar } from "./Luggagebar";
import { Paybar } from "./Paybar";
import {Header} from '../SearchPage/Header'
import {App} from './gourav/App'
const Mytrip = () => {

   
    return (<div>
         <Header/>
        <Getdatacss>
            <div className="main_div">
                <Bookingheader/>
                <div className="final">
                    <div className="detail">
                        <Flightdetail/>
                        <Luggagebar/>
                        <Canceldetail/>
                        <Flightdetailfooter/>
                        <App/>
                    </div>
                    <div className="pay_detail">
                        <Paybar/>
                    </div>
                </div> 
            </div>
        </Getdatacss>
   </div> )
}
export {Mytrip}