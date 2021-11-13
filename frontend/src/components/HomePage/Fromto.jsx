import { useEffect, useState } from "react";
import { Fromtocss } from "./Fromtocss";

export const Fromto = ({handleChange}) => {
  const [text, setText] = useState([]);
  useEffect(() => {
    let promise = async () => {
      const data = await fetch(
        "https://raw.githubusercontent.com/ashhadulislam/JSON-Airports-India/master/airports.json"
      );
      const ans = await data.json();
      setText(ans.airports);
    };
    promise();
  }, []);
  return (
    <Fromtocss>
      <div className="fromtodiv">
        <div>
          <h3>FROM</h3>
          <select onChange={handleChange} name="from" id="">
            {text.map((e) => (
              <option value={e.IATA_code} key={e.IATA_code}>
                {e.city_name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h3>TO</h3>
          <select onChange={handleChange} name="to" id="">
            {text.map((e) => (
              <option value={e.IATA_code} key={e.IATA_code}>
                {e.city_name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="fromtodiv2">
        <div>
          <h3>DEPARTURE</h3>
          <input type="date" className="date" />
        </div>
        <div>
          <h3>RETURN</h3>
          <input placeholder="choose it" type="date" className="date" />
        </div>
        <div>
          <h3>TRAVLLER & CLASS</h3>
          <select name="" id="">
          <option value="">Select</option>

            <option value="">Economy</option>
            <option value="">Premium</option>

          </select>
        </div>
      </div>
    </Fromtocss>
  );
};
