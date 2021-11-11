import styled from "styled-components";
const Style = styled.div`
  align-items: center;
  color: #4a4a4a;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin: 0px 0px 20px;
  height: 50px;
  width: 98%;
  margin: auto;
  margin-top: 10px;
  .selectBox {
    align-items: center;
    background-color: #eaf5ff;
    border-radius: 4px 0px 0px 4px;
    color: #4a4a4a;
    display: flex;
    margin-left: 5px;
    font-size: 12px;
    width: 80px;
    font-weight: 700;
    line-height: 14px;
    /* padding: 8px 8px 8px 26px; */
    height: 100%;
    text-align: left;
  }
  .div {
    align-items: center;
    color: #4a4a4a;
    display: flex;
    font-size: 14px;
  }
  .first {
    color: #9b9b9b;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    margin: 0px 5px 0px 0px;
    width: 56px;
  }
  .div2 {
    align-items: center;
    color: #4a4a4a;
    display: flex;
    font-size: 14px;
    justify-content: center;
    margin: 0px 0px 0px 10px;
  }
  .selectBox1 {
    background-color: #f2f2f2;
    border-radius: 4px;
    color: #4a4a4a;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin: 8px;
    padding-left: 10px;
    padding-right: 10px;
    height: 30px;
    p {
      position: relative;
      top: -9px;
    }
  }
  .second {
    color: #4a4a4a;
    font-size: 12px;
    font-weight: 700;
    line-height: 12px;
  }
`;
export const FareTypes = () => {
  return (
    <Style>
      <div className="div">
        <div className="first">Select a fare type</div>
        <div className="selectBox">
          <input type="radio" />
          <p>Regular fees</p>
        </div>
        <div className="selectBox">
          <input type="radio" />
          <p>Armed Forces</p>
        </div>
        <div className="selectBox">
          <input type="radio" />
          <p>Student fares</p>
        </div>
        <div className="selectBox">
          <input type="radio" />
          <p>Senior Citizen</p>
        </div>
        <div className="selectBox">
          <input type="radio" />
          <p>Double seat</p>
        </div>
      </div>
      <div className="div2">
        <div className="second">Trending Searches:</div>
        <div className="selectBox1">
          <p>Chennai to Hydrabad</p>
        </div>
        <div className="selectBox1">
          <p>Delhi to Kolkata</p>
        </div>
      </div>
    </Style>
  );
};
