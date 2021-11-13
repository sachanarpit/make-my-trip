import { axios } from "axios";

const displayRazorpay = async () => {
  //   const data = await fetch(`http://localhost:6000/razorpay`, {
  //     method: "POST",
  //   }).then((t) => t.json());

  const data = await axios
    .post("http://localhost:6000/razorpay")
    .then((d) => {
      console.log(d);
    })
    .catch(function (error) {
      console.log(error);
    });

  console.log(data);

  const options = {
    key: "rzp_live_X1DoMMlNfQUgvm",
    currency: data.currency,
    amount: data.amount,
    name: "Learn Code Online",
    description: "Wallet Transaction",
    order_id: data.id,
    handler: function (response) {
      alert("PAYMENT ID ::" + response.razorpay_payment_id);
      alert("ORDER ID :: " + response.razorpay_order_id);
    },
    prefill: {
      name: "Anirudh Jwala",
      email: "anirudh@gmail.com",
      contact: "9999999999",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

export default displayRazorpay;
