import styled from "styled-components";
import React from "react";
import displayRazorpay from "./PayGateway";
const Style = styled.div`
  button {
    cursor: pointer;
    width: 230px;
    height: 35px;
    border-radius: 25px;
    background: linear-gradient(
      to right,
      #8f92fa 0%,
      #6165f0 50%,
      #6c70eb 50%,
      #3339e9 100%
    );
    border: none;
    color: white;
    font-weight: 700;
    font-size: 20px;
  }
`;

const PaymentButton = () => {
  return (
    <Style>
      <button type="button" onClick={displayRazorpay}>
        BOOK NOW
      </button>
    </Style>
  );
};

export default PaymentButton;
