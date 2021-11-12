import { TravellerDetails } from './TravellerDetails';
import { BookingDetails } from './BookingDetails';
import { GSTNumber } from './GSTNumber';
import { AddOns } from './AddOns';
import { Acknowledgement } from './Acknowledgement';

export  const  App = ()=> {
  return (
    <div style={{background: "#ffffff"}}>
      <TravellerDetails></TravellerDetails>
      <BookingDetails></BookingDetails>
      <GSTNumber></GSTNumber>
      <AddOns></AddOns>
      <Acknowledgement></Acknowledgement>
    </div>
  );
}

