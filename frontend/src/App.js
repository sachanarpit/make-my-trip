// import {Button} from '@mui/material';
import { Main } from "./components/HomePage/Main";
import { Route, Routes } from "react-router-dom";
import { Search } from "./components/SearchPage/Search";

import Payment from "./components/paymentPage/Payment";

import { Mytrip } from "./components/Booking_page/Getdata";
// import { Final } from "./components/Booking_page/gourav/Final";
// import Payment from "./components/paymentPage/Payment";
// import { Mytrip } from "./components/Booking_page/Getdata";
import { Final } from "./components/Booking_page/gourav/Final";
import {Login} from './components/login/Login'

function App() {
  const handlePopup = () => {
    const popup = document.getElementById("popup");
    popup.classList.toggle("active");
  };
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/search" exact element={<Search />} />

        <Route path="/checkout" exact element={<Mytrip />} />
        <Route path="/final" exact element={<Final />} />

        <Route path="/payment" exact element={<Payment />} />

        <Route path="/checkout" exact element={<Mytrip />} />
        <Route path="/final" exact element={<Final />} />
        <Route path="/btn" exact element={ <Login handleClick={handlePopup}/>} />

      </Routes>
    </div>
  );
}

export default App;
