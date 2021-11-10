import { useState } from "react";
import styled from "styled-components";
const Style = styled.div`
  height: 250px;
  background: linear-gradient(
    to top,
    #030779 0%,
    #03053b 50%,
    #03043d 50%,
    #020420 100%
  );
.jelo{
    width: 100%;
    background-color: #03032c;
    .topdiv {
    width: 90%;
    height: 60px;
    padding-bottom: 10px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    padding-top: 8px;
    align-items: center;
    .first {
      width: 120px;
      padding: 0;
      margin: 0;
      line-height: 0px;
      text-align: center;
      background: rgba(104, 105, 104, 0.3);
      border-radius: 5px;
      p {
        font-size: 14px;
        font-weight: 600;
        color: #2c98f1;
      }
      select {
        border: 0px;
        -webkit-appearance: none;
        -moz-appearance: none;
        text-indent: 1px;
        color: white;
        font-size: 17px;
        text-overflow: "";
        outline: 0px;
        width: 100%;
        text-align: center;
        background-color: transparent;
        padding: 3px;
      }
    }
    .second {
      width: 170px;
      line-height: 0;
      background: rgba(104, 105, 104, 0.3);
      border-radius: 5px;
      p {
        font-size: 14px;
        font-weight: 600;
        margin-left: 10px;
        color: blue;
      }
      select {
        border: 0px;
        -webkit-appearance: none;
        -moz-appearance: none;
        text-indent: 8px;
        color: white;
        font-size: 17px;
        text-overflow: "";
        outline: 0px;
        width: 100%;
        background-color: transparent;
        padding: 3px;
      }
    }
    button {
      width: 170px;
      height: 45px;
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
      font-weight: 700;
      font-size: 20px;
    }
  }
}
.hello{
    position: fixed;
    z-index: 100;
    top: 0;
}
`;

export const SearchBox = () => {
    const [nav, setNav] = useState(false);
    const handleChange = () => {
      if (window.scrollY >= 10) {
        setNav(true);
      } else {
        setNav(false);
      }
    };
    window.addEventListener("scroll", handleChange);
  return (
    <Style>
        <div className={ nav === true ? "hello jelo" : "jelo" }>
      <div className="topdiv">
        <div className="first">
          <p>Trip from</p>
          <select name="trip" id="">
            <option value="one way">Oneway</option>
          </select>
        </div>
        <div className="second">
          <p>From</p>
          <select name="trip" id="">
            <option value="hongkong">Hong Kong</option>
          </select>
        </div>
        <div className="second">
          <p>To</p>
          <select name="trip" id="">
            <option value="bengaluru">Bengaluru</option>
          </select>
        </div>
        <div className="second">
          <p>Trip from</p>
          <select name="trip" id="">
            <option value="one way">Oneway</option>
          </select>
        </div>
        <div className="second">
          <p>Trip from</p>
          <select name="trip" id="">
            <option value="one way">Oneway</option>
          </select>
        </div>
        <div className="second">
          <p>Trip from</p>
          <select name="trip" id="">
            <option value="one way">Oneway</option>
          </select>
        </div>
        <button>SEARCH</button>
      </div>
      </div>
    </Style>
  );
};