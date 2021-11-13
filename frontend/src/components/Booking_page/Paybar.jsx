import { Paybarcss } from "./Paybarcss.jsx";

const Paybar = () => {
  let data = localStorage.getItem("buy");
  let res = JSON.parse(data);

  return (
    <Paybarcss>
      <div className="paybar">
        <div className="payment_rs">
          <h3>Fare Summary</h3>
          <div className="inline">
            <h5>Base Fare</h5>
            <p>
              {+res.departure.delay === 0
                ? "₹5050"
                : "₹" + res.departure.delay * 200}
            </p>
          </div>
          <div className="inline">
            <h5>Fee & Surcharges</h5>
            <p> ₹ 745</p>
          </div>
          <div className="inline">
            <h5>Other Services</h5>
            <p> ₹ 10</p>
          </div>
          <div className="inline">
            <h5>Discounts</h5>
            <p>- ₹ 500</p>
          </div>
          <div className="inline">
            <h3>Total Amount</h3>
            <h3>
              {+res.departure.delay === 0
                ? "₹5305"
                : "₹" + res.departure.delay * 200}
            </h3>
          </div>
        </div>
        <div className="promocode">
          <div className="promo_icon">
            <h3>PROMO CODES</h3>
            <img
              alt=""
              src="https://imgak.mmtcdn.com/flights/assets/media/dt/rta_assets/promo-code.png"
            />
          </div>
          <input
            className="code_input"
            type="text"
            placeholder="Enter Promo Code Here"
          ></input>
          <div className="promo_option">
            <h5>MMTSTANC</h5>
            <p>Use & Save ₹ 480</p>
            <p>
              Congratulations! Promo Discount of Rs. 480 applied successfully.
              Now pay only using your Standard Chartered Bank Card to get this
              discount.
            </p>
            <p className="terms_remove">Terms & Condition</p>
            <p className="terms_remove">REMOVE</p>
          </div>
          <div className="promo_option">
            <h5>MMTZEST</h5>
            <p>Use & Save ₹ 400</p>
            <p>
              Congratulations! Promo Discount of Rs. 400 applied successfully..
            </p>
            <p className="terms_remove">Terms & Condition</p>
            <p className="terms_remove">REMOVE</p>
          </div>
        </div>
      </div>
    </Paybarcss>
  );
};

export { Paybar };
