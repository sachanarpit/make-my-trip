import { Bookingheader } from "../Bookingheader";
import { Getdatacss } from "../Getdatacss";
import { Header } from "../../SearchPage/Header";
import { App } from "./App";
export const Final = () => {
  return (
    <div>
      <Header />
      <Getdatacss>
        <div className="main_div">
          <Bookingheader />
          <App />
        </div>
      </Getdatacss>
    </div>
  );
};
