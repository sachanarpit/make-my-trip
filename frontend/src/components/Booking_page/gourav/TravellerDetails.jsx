function TravellerDetails() {
  return (
    <div>
      <h3 style={{ marginLeft: "50px" }}>Traveller Details</h3>
      <div className="outer_div">
        <span style={{ fontSize: "20px" }}> ADULT</span>
        <span style={{ color: "blue", marginLeft: "600px" }}>0/1 selected</span>
        <div className="inner_shadow_box">
          <input type="checkbox" className="checkbox" />
          <span style={{ marginLeft: "15px" }}>
            <b>ADULT 1</b>
          </span>
          <div className="line"></div>
          <p>
            {" "}
            <b>IMPORTANT: </b> Enter your name as it is mentioned on your
            passport or any government approved ID
          </p>
          <input
            className="name_inp"
            type="text"
            placeholder="First & Middle Name"
          />
          <input className="name_inp ML" type="text" placeholder="Last Name" />
          <input className="genderinp ML" type="text" placeholder="Male" />
          <input className="genderinp" type="text" placeholder="Female" />
          <div style={{ marginTop: "30px" }}>
            <div>Wheelchair</div>
            <select className="wheelchair_div" name="Wheelchair">
              <option value="Reqired">Reqired</option>
              <option value="Not Reqired">Not Reqired</option>
            </select>
          </div>
        </div>
        <div className="line"></div>
        <div style={{ color: "#1f77f7" }}>
          {" "}
          <b> + ADD ADULT</b>
        </div>
      </div>
    </div>
  );
}

export { TravellerDetails };
