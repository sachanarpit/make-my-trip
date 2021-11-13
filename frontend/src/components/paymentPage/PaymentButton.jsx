import React from "react";
// import styled from "styled-components";
// const style = styled.div`
//   button{
//     a{
//         text-decoration: none;
//         color: white;
//     }
//     width: 230px;
//       height: 35px;
//       border-radius: 25px;
//       background: linear-gradient(
//         to right,
//         #8f92fa 0%,
//         #6165f0 50%,
//         #6c70eb 50%,
//         #3339e9 100%
//       );
//       border: none;
//       color: white;
//       font-weight: 700;
//       font-size: 20px;
//   }
// `
import displayRazorpay from "./PayGateway";

const PaymentButton = () => {
  return (
    <button type="button" onClick={displayRazorpay}>
      Buy Now
    </button>
  );
};

export default PaymentButton;
