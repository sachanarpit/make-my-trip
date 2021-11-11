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
    font-family: Mukta;
    margin-left: 5px;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    /* padding: 8px 8px 8px 26px; */
    height: 100%;
    text-align: left;
  }
  div {
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
`;
export const FareTypes = () => {
  return (
    <Style>
      <div>
        <div className="first">Select a fare type</div>
        <div className="selectBox">
          <input type="radio" />
          <p>Regular fees</p>
        </div>
        <div className="selectBox">
          <input type="radio" />
          <p>Regular fees</p>
        </div>
        <div className="selectBox">
          <input type="radio" />
          <p>Regular fees</p>
        </div>
        <div className="selectBox">
          <input type="radio" />
          <p>Regular fees</p>
        </div>
        <div className="selectBox">
          <input type="radio" />
          <p>Regular fees</p>
        </div>
      </div>
      <div>
        <div className="selectBox">
          <input type="radio" />
          <p>Regular fees</p>
        </div>
        <div className="selectBox">
          <input type="radio" />
          <p>Regular fees</p>
        </div>
        <div className="selectBox">
          <input type="radio" />
          <p>Regular fees</p>
        </div>
      </div>
    </Style>
  );
};
