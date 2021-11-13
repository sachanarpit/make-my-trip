import React from "react";

import displayRazorpay from "./PayGateway";

const PaymentButton = () => {
  return (
    <button type="button" onClick={displayRazorpay}>
      Buy Now
    </button>
  );
};

export default PaymentButton;
