import { TravellerDetails } from './TravellerDetails';
import { BookingDetails } from './BookingDetails';
import { GSTNumber } from './GSTNumber';
import { AddOns } from './AddOns';
export  const  App = ()=> {
  return (
    <div style={{background: "#eeeeee", paddingTop: "30px"}}>
      <TravellerDetails></TravellerDetails>
      <BookingDetails></BookingDetails>
      <GSTNumber></GSTNumber>
      <AddOns></AddOns>
    </div>
  );
}

