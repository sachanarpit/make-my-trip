import styled from "styled-components";
import { nanoid } from "nanoid";
import { useState } from "react";
import { Link } from "react-router-dom";
const Style = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 30px;
  background-color: #e4e4e4;
  .filters {
    background-color: white;
    margin-left: 100px;
    height: 700px;
    box-shadow: 0px 0px 4px #c9c8c8;
    position: relative;
    top: -140px;
  }
  .allData {
    margin-right: 100px;
    position: relative;
    top: -100px;
    h1 {
      color: white;
      position: relative;
      top: -60px;
      font-size: 26px;
    }
    .maping {
      background-color: white;
      position: relative;
      padding: 1%;
      top: -60px;
      margin-bottom: 10px;
      box-shadow: 0px 0px 4px #c9c8c8;
      //start
      .div1 {
        display: flex;
        justify-content: space-around;
        height: 40px;
        padding: 5px;
        .one {
          display: flex;
          align-items: center;
          img {
            width: 25px;
          }
          gap: 6px;
          p {
            font-size: 14px;
            font-weight: 700;
          }
        }
        a{
          text-decoration: none;
          color: white;
        }
        .two {
          display: flex;
          text-align: center;
          flex-direction: column;
          line-height: 10px;
          /* align-items: center; */
          h5 {
            padding-top: 12px;
            margin: 0;
            font-size: 22px;
            font-weight: 700;
            text-align: left;
          }
          p {
            font-size: 12px;
            font-weight: 600;
          }
        }
        .three {
          line-height: 0px;
          align-items: center;
          text-align: center;
          display: flex;
          flex-direction: column;
          p {
            font-size: 12px;
            font-weight: 600;
          }
          span {
            font-size: 11px;
            font-weight: 700;
          }
          div {
            width: 50px;
            height: 3px;
            position: relative;
            top: -5px;
            border-radius: 6px;
            background-color: red;
            margin: auto;
          }
        }
        h4 {
          align-items: center;
          font-size: 22px;
          position: relative;
          top: -20px;
        }
        button {
          width: 130px;
          height: 38px;
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
          font-weight: 600;
          font-size: 15px;
        }
      }
      .div2 {
        /* height: 60px; */
        background-color: #fff2dc;
        margin-top: 20px;
        text-align: center;
        font-size: 11px;
        padding: 1%;
      }
    }
    .div3 {
      display: flex;
      justify-content: space-between;
      width: 90%;
      margin: auto;
      p:nth-child(1) {
        font-size: 13px;
        font-weight: 600;
        color: green;
      }
      p:nth-child(2) {
        font-size: 13px;
        font-weight: 400;
        color: blue;
      }
    }
  }
  .firstFilter {
    padding: 12px 15px;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 10px;
    h3 {
      color: #000000;
      font-size: 17px;
      line-height: 0px;
      text-align: left;
    }
    .div {
      padding: 0;
      align-items: center;
      color: #000000;
      display: flex;
      font-size: 14px;
      p {
        color: #000000;
        font-size: 14px;
        padding: 0;
        margin: 0;
        line-height: 21px;
        font-weight: 500;
        margin-left: 10px;
        align-items: center;
      }
    }
  }
`;
export const Bottom = ({ data, bookData,sorting ,sorthigh}) => {
  const [value, setValue] = useState("");
  const handleSlider = (e) => {
    setValue(e.target.value);
  };
  const handleSort = (e)=>{
      sorting(e.target.checked)
  }
  const handleHigh = (e)=>{
    sorthigh(e.target.checked)
  }
  let x = localStorage.getItem("myKey");
  let y = JSON.parse(x);
  return (
    <Style>
      <div className="filters">
        <div className="firstFilter">
          <h3>Sort by price</h3>
          <div className="div">
            <input onChange={handleSort} type="checkbox" />
            <p>Low to High</p>
          </div>
          <div className="div">
            <input onChange={handleHigh} type="checkbox" />
            <p>High to Low</p>
          </div>
        </div>
        <div className="firstFilter">
          <h3>Popular Filters</h3>
          <div className="div">
            <input type="checkbox" />
            <p>stop</p>
          </div>
          <div className="div">
            <input type="checkbox" />
            <p>Late Departures</p>
          </div>
          <div className="div">
            <input type="checkbox" />
            <p>Refundable Fares</p>
          </div>
        </div>
        <div className="firstFilter">
          <h3>Alliances & Airlines</h3>
          <div className="div">
            <input type="checkbox" />
            <p>Air India</p>
          </div>
          <div className="div">
            <input type="checkbox" />
            <p>British Airways</p>
          </div>
          <div className="div">
            <input type="checkbox" />
            <p>Lufthansa</p>
          </div>
        </div>
        <div className="firstFilter">
          <h3>Layover Airports</h3>
          <div className="div">
            <input type="checkbox" />
            <p>Frankfurt</p>
          </div>
        </div>
        <div className="firstFilter">
          <h3>Select Range ₹{value}</h3>
          <input type="range" min="1000" max="10000" onChange={handleSlider} />
        </div>
      </div>
      <div className="allData">
        <h1>
          Flight from {y.from} to {y.to}
        </h1>
        {data.map((e) => (
          <div key={nanoid(6)} className="maping">
            <div className="div1">
              <div className="one">
                <img
                  src={
                    e.airline.name === "IndiGo"
                      ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=7"
                      : e.airline.name === "Air India"
                      ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?v=7"
                      : e.airline.name === "AirAsia"
                      ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/I5.png?v=7"
                      : e.airline.name === "Vistara"
                      ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/UK.png?v=7"
                      : e.airline.name === "SpiceJet"
                      ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SG.png?v=7"
                      : e.airline.name === "GoAir"
                      ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/G8.png?v=7"
                      : "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/G8.png?v=7"
                  }
                  alt=""
                />
                <p>{e.airline.name}</p>
              </div>
              <div className="two">
                <h5>{e.departure.scheduled.split("T")[1].split("+")[0]}</h5>
                <p>{e.departure.iata}</p>
              </div>
              <div className="three">
                <p>
                  {+e.arrival.scheduled
                    .split("T")[1]
                    .split("+")[0]
                    .split(":")[0] -
                    Number(
                      e.departure.scheduled
                        .split("T")[1]
                        .split("+")[0]
                        .split(":")[0]
                    ) +
                    " hours " +
                    (+e.arrival.scheduled
                      .split("T")[1]
                      .split("+")[0]
                      .split(":")[1] -
                      Number(
                        e.departure.scheduled
                          .split("T")[1]
                          .split("+")[0]
                          .split(":")[1]
                      ) +
                      " minutes")}
                </p>
                <div></div>
                <span>Safe Journey</span>
              </div>
              <div className="two">
                <h5>{e.arrival.scheduled.split("T")[1].split("+")[0]}</h5>
                <p>{e.arrival.iata}</p>
              </div>
              <h4>
                {+e.departure.delay === 0 || null
                  ? "₹1200"
                  : "₹" + e.departure.delay * 200}
              </h4>
              <button
                onClick={() => {
                  bookData(e);
                }}
              >
                <Link to="/checkout">BOOK NOW</Link>
              </button>
            </div>
            <div className="div2">
              Travel to India is open for all Indian passport holders, OCI & PIO
              cardholders holding passports of any country and all foreign
              nationals who wish to visit India for any purpose (including their
              dependents on appropriate category of dependent visa) except those
              on Tourist Visa. Please read the 'Important Information' section
              on the next screen before booking your flight.
            </div>
            <div className="div3">
              <p>Easily Refundable</p>
              <p>View Flight Details</p>
            </div>
          </div>
        ))}
      </div>
    </Style>
  );
};
