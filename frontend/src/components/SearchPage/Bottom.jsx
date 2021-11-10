import styled from "styled-components";
import { useState } from "react";
const Style = styled.div`
  height: 1000px;
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 30px;
  background-color: #e4e4e4;
  .filters {
    background-color: white;
    height: 600px;
    margin-left: 100px;
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
        .two {
          display: flex;
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
          width: 150px;
          height: 34px;
          padding: 0px 8px 0px 8px;
          border: 1px solid blue;
          border-radius: 20px;
          color: blue;
          background-color: rgb(173, 222, 255);
          font-weight: 600;
          font-size: 16px;
          position: relative;
          top: 10px;
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
    .hidden {
      .graydiv {
        height: 40px;
        background-color: gray;
      }
    }
    .none {
      display: none;
    }
  }
`;
export const Bottom = () => {
  const [set, setItem] = useState(false);
  return (
    <Style>
      <div className="filters"></div>
      <div className="allData">
        <h1>Flight from HongKong to Bengluru</h1>
        <div className="maping">
          <div className="div1">
            <div className="one">
              <img
                src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SQ.png?v=7"
                alt=""
              />
              <p>Kingfisher</p>
            </div>
            <div className="two">
              <h5>12:10</h5>
              <p>Hong Kong</p>
            </div>
            <div className="three">
              <p>Hours</p>
              <div></div>
              <span>1 stop via bengluru</span>
            </div>
            <div className="two">
              <h5>12:10</h5>
              <p>Hong Kong</p>
            </div>
            <h4>121212$</h4>
            <button
              onClick={() => {
                setItem(!set ? true : false);
              }}
            >
              View price
            </button>
          </div>
          <div className="div2">
            Travel to India is open for all Indian passport holders, OCI & PIO
            cardholders holding passports of any country and all foreign
            nationals who wish to visit India for any purpose (including their
            dependents on appropriate category of dependent visa) except those
            on Tourist Visa. Please read the 'Important Information' section on
            the next screen before booking your flight.
          </div>
          <div className="div3">
            <p>Easily Refundable</p>
            <p>View Flight Details</p>
          </div>
          <div className={set ? "hidden" : "none"}>
            <div className="graydiv"></div>
          </div>
        </div>
      </div>
    </Style>
  );
};
