// import {Button} from '@mui/material';
import { Main } from "./components/HomePage/Main";
import { Route, Routes } from "react-router-dom";
import { Search } from "./components/SearchPage/Search";
import Payment from "./components/paymentPage/Payment";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/search" exact element={<Search />} />
        <Route path="/payment" exact element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
