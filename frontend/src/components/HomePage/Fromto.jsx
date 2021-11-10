import { Fromtocss } from "./Fromtocss";
export const Fromto = () => {
  return (
    <Fromtocss>
      <div className="fromtodiv">
<div>
    <h3>FROM</h3>
    <select name="" id="">
        <option value="">Banglore</option>
    </select>
</div>
<div>
    <h3>TO</h3>
    <select name="" id="">
    <option value="">Delhi</option>
    </select>
</div>
    </div>
      <div className="fromtodiv2">
      <div>
    <h3>DEPARTURE</h3>
    <input type="date" className="date"/>
</div>
<div>
    <h3>TO</h3>
    <select name="" id="">
    <option value="">Delhi</option>
    </select>
</div>
<div>
    <h3>TO</h3>
    <select name="" id="">
    <option value="">Delhi</option>
    </select>
</div>
      </div>
    </Fromtocss>
  );
};
