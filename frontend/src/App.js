// import {Button} from '@mui/material';
import { Main } from "./components/HomePage/Main";
import { Route, Routes } from "react-router-dom";
import { Search } from "./components/SearchPage/Search";
<<<<<<< HEAD
import { Mytrip } from "./components/Booking_page/Getdata";
import { Final } from "./components/Booking_page/gourav/Final";
=======
<<<<<<< HEAD
import Payment from "./components/paymentPage/Payment";

=======
import { Mytrip } from "./components/Booking_page/Getdata";
import { Final } from "./components/Booking_page/gourav/Final";
>>>>>>> origin/dharmesh
>>>>>>> master
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/search" exact element={<Search />} />
<<<<<<< HEAD
        <Route path="/checkout" exact element={<Mytrip />} />
        <Route path="/final" exact element={<Final />} />
=======
<<<<<<< HEAD
        <Route path="/payment" exact element={<Payment />} />
=======
        <Route path="/checkout" exact element={<Mytrip />} />
        <Route path="/final" exact element={<Final />} />
>>>>>>> origin/dharmesh
>>>>>>> master
      </Routes>
    </div>
  );
}

export default App;
