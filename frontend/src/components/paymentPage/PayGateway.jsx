import axios from "axios";
const displayRazorpay = async () => {
  const x = await axios.post("http://localhost:2345/razorpay", {
    params: {
      price: "1",
    }
  });


  console.log(x);

  let data = x.data;
  console.log(data);
  const options = {
    key: "rzp_live_X1DoMMlNfQUgvm",
    currency: data.currency,
    amount: data.amount,
    name: "makemytrip",
    description: "Pay to makemytrip",
    image: "https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png",
    order_id: data.id,
    handler: function (response) {
      // let x = {
      //   id: response.razorpay_payment_id,
      //   order_id: response.razorpay_order_id
      // }
      // localStorage.setItem('payment',JSON.stringify(x))
      alert("PAYMENT ID ::" + response.razorpay_payment_id);
      alert("ORDER ID :: " + response.razorpay_order_id);
      window.location.href = "http://localhost:3005";
    },
    prefill: {
      name: "dharmesh",
      email: "dharmehs@gmail.com",
      contact: "9306835403",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

export default displayRazorpay;
