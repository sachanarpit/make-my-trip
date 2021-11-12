import styled from "styled-components";
export const Bottomcss = styled.div`
  .div1 {
    display: flex;
    justify-content: space-between;
    width: 88%;
    margin: auto;
    h3 {
      font-size: 10px;
      padding: 0px;
    }
    p {
      line-height: 3px;
      font-size: 11px;
      cursor: pointer;
      color: #444343;
    }
    p:hover {
      color: blue;
    }
  }
  .div2 {
    width: 88%;
    margin: auto;
    margin-top: 70px;
    h3 {
      font-size: 10px;
      padding: 0px;
    }
    p {
      font-size: 11px;
      cursor: pointer;
      color: #464646;
    }
  }
  .div3 {
    display: flex;
    margin-top: 70px;
    justify-content: space-around;
    gap: 50px;
    padding: 5%;
    background-color: #dfdede;
    h3 {
      font-size: 14px;
      padding: 0px;
    }
    p {
      font-size: 12px;
      cursor: pointer;
      color: #464646;
    }
  }

  .div4 {
    background-color: #000000;
    color: #4a4a4a;
    font-size: 14px;
    padding: 50px 0px 60px;
    .fb{
      display: flex;
      justify-content: space-between;
      width: 90%;
      margin: auto;
      .onee{
        display: flex;
        cursor: pointer;
        gap: 10px;
        color: white;
        align-items: center;
      }
      .copy{
        line-height: 5px;
        font-size: 18px;
        align-items: center;
        color: white;
      }
    }
  }
`;
