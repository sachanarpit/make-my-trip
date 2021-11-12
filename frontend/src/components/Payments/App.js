import logo from './logo.svg';
import './App.css';
import {Menu} from "./components/Menu";
import {Nav} from "./components/Nav";
import {UPI} from "./components/UPI"
import {DebitCard} from "./components/DebitCard"
import {CreditCard} from "./components/CreditCard"
import {NetBanking} from "./components/NetBanking"
import{Route,Routes,} from "react-router-dom";
import{Paymentsdiv} from "./components/Payments"

function App() {
  return (

    <>
    <Nav/>
    <div id="paymentcarddiv">
      <i className="fas fa-credit-card" id="cardpay"></i>
      <span id="payquote">Payment Method</span>
      
      </div>
    <div className="App" id="APP">
    
   <Menu/>
   <Routes>
     <Route path="/" element={<UPI/>}/>
     <Route exact path="/creditcard" element={<CreditCard/>}/>
     <Route exact path="/debitcard" element={<DebitCard/>}/>
     <Route exact path="/netbanking" element={<NetBanking/>}/>
   </Routes>
   <Paymentsdiv/>

    </div>
    </>
  );
}

export default App;
