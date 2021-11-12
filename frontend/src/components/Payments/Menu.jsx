import styled from 'styled-components';
import { Link, NavLink } from "react-router-dom";


const Div = styled.div`

color:red;
width:12%;
display:grid;
`

const Div2 = styled.a`
height:36px;
border: 1px solid rgb(161, 161, 161);
border-bottom:none;
cursor:pointer;
background:#e5e5e5;
padding-top:8%;

&:hover{
    background:white;
    border-left:3px solid red;
}
`       
const Divlast = styled.a`
height:36px;
border: 1px solid rgb(161, 161, 161);
cursor:pointer;
background:#e5e5e5;
padding-top:8%;

&:hover{
    background:white;
    border-left:3px solid red;
}
`  
const LinkStyle={
 textDecoration:"none",
 color:"black"
}


function Menu(){
   return(
       <Div>

   <Div2>
   < NavLink exact activeClassName="active_class" to="/" style={LinkStyle}>UPI </NavLink>
   </Div2>
   
   <Div2>
    <NavLink to="/creditcard" style={LinkStyle}>CreditCard </NavLink>
   </Div2>

    <Div2>
    <NavLink to="/debitcard" style={LinkStyle}>DebitCard </NavLink>
   </Div2>

    <Div2>
    <NavLink to="/netbanking" style={LinkStyle}>NetBanking </NavLink>
   </Div2>

   <Div2>
    <NavLink to="/netbanking" style={LinkStyle}>Paytm </NavLink>
   </Div2>

   <Div2>
    <NavLink to="/netbanking" style={LinkStyle}>Bhimpay</NavLink>
   </Div2>

   <Div2>
    <NavLink to="/netbanking" style={LinkStyle}>Emi Options </NavLink>
   </Div2>

   <Div2>
    <NavLink to="/netbanking" style={LinkStyle}>Paypal </NavLink>
   </Div2>

   <Div2>
    <NavLink to="/netbanking" style={LinkStyle}>Wallets </NavLink>
   </Div2>
   <Divlast>
    <NavLink to="/netbanking" style={LinkStyle}>Mobikwick </NavLink>
   </Divlast>

    



       </Div>
   )
}

export {Menu} 