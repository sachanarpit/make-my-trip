import styled from "styled-components";
export const Slidecss = styled.div`
  height: 80px;
  width: 350px;
  background-color: white;
  margin: auto;
  border-radius: 8px;
  box-shadow: 0px 2px 3px #cccccc;
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 4%;
  margin-bottom: 5px;
`;

export const Bigslide = styled.div`
  height: 350px;
  box-shadow: 0px 0px 3px #c0bdbd;
  width: 90%;
  background-color: white;
  border-radius: 8px;
  margin: auto;
  margin-top: 50px;
  .supreoffers {
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: flex-start;
    gap: 100px;
    background-color: white;
    margin: auto;
    h1 {
      font-size: 40px;
      position: relative;
      top: -18px;
      color: #363636;
    }
    div {
      display: flex;
      flex-direction: row;
      gap: 15px;
      height: 50px;
      color: #363636;
      border-bottom: 1px solid #4a4a4a;
    }
  }
  .parentbigslide {
    padding: 30px;
  }
  .bigslideDiv {
    display: grid;
    cursor: pointer;
    grid-template-columns: 30% 70%;
    width: 480px;
    box-shadow: 0px 0px 5px #a8a6a6;
    border-radius: 8px;
    height: 150px;
    gap: 5px;
    padding: 1%;
    div {
      padding-top: 0px;
      margin-top: 0px;
    }
    h3 {
      color: gray;
      font-size: 100%;
      position: relative;
      top: -48px;
    }
    h2 {
      font-size: 18px;
      position: relative;
      top: -48px;
    }
    img {
      border-radius: 8px;
      position: relative;
      top: -31px;
      left: 10px;
    }
    p {
      font-size: 11px;
      top: -55px;
      color: gray;
      position: relative;
    }
    span {
      color: gray;
      font-size: 10px;
      position: relative;
      bottom: 5px;
      left: 18px;
    }
    h4 {
      font-size: 18px;
      top: -45px;
      right: 20px;
      color: #2b3cd1;
      text-align: right;
      position: relative;
    }
    .reddiv {
      width: 50px;
      background-color: red;
      height: 2px;
      position: relative;
      top: -55px;
    }
  }
`;

export const TripMoney = styled.div`
  width: 88%;
  margin: auto;
  .maindiv {
    height: 130px;
    margin-top: 100px;
    color: #4a4a4a;
    display: flex;
    font-size: 14px;
    #div2 {
      align-items: center;
      background-color: #ffffff;
      border-radius: 6px;
      border-style: solid;
      border-width: 2px 2px 2px 40px;
      display: flex;
      font-size: 14px;
      margin: 0px 10px 20px 0px;
      padding: 0px 15px 0px 50px;
      img {
        width: 61px;
        height: 61px;
        padding: 5px;
        position: relative;
        left: -80px;
      }
      p {
        color: #4a4a4a;
        font-size: 14px;
        line-height: 18px;
        position: relative;
        top: -5px;
        left: -60px;
      }
      h3 {
        font-size: 20px;
        font-weight: 900;
        line-height: 20px;
        position: relative;

        left: -60px;
        margin: 0px 0px 3px;
      }
    }
    .spa1n {
      background-image: url("https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/landingSprite@13x.webp");
      background-position: -106px -559px;
      position: relative;
      left: -60px;
      background-size: 200px 600px;
      color: #4a4a4a;
      width: 90px;
      height: 20px;
      font-size: 0px;
    }
    .span2 {
      background-image: url("https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/landingSprite@13x.webp");
      background-position: -174px -86px;
      background-size: 200px 600px;
      width: 42px;
      height: 10px;
      color: #008cff;
      display: inline-block;
      font-size: 0px;
      font-weight: 900;
      position: relative;
      left: -20px;
      line-height: 14px;
      margin: 0px 0px 0px 10px;
      text-transform: uppercase;
    }
  }
`;
