// import axios from "axios";
// import { useState, useEffect } from "react";
import { Bookingheader } from "./Bookingheader";
import { Canceldetail } from "./Canceldetail";
import { Flightdetail } from "./Flightdetail";
import { Flightdetailfooter } from "./Flightdetailfooter";
import { Getdatacss } from "./Getdatacss";
import { Luggagebar } from "./Luggagebar";
import { Paybar } from "./Paybar";
import {Header} from '../SearchPage/Header'

const Mytrip = () => {

   
    return (<>
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
                    </div>
                    <div className="pay_detail">
                        <Paybar/>
                    </div>
                </div> 
            </div>
        </Getdatacss>
   </> )
}
export {Mytrip}