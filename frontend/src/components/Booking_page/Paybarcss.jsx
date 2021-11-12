import styled from "styled-components";

export const Paybarcss = styled.div`
  .payment_rs {
    padding: 4%;
    border-radius: 8px;
    box-shadow: 0px 0px 4px gray;
    background-color: #fff;
  }
  .inline {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid grey;

    h3 {
      margin-bottom: 7px;
      padding-bottom: 5px;
    }
    h5 {
      margin-top: 18px;
      line-height: 20px;
      margin-bottom: 0px;
      font-size: 14px;
    }
    p {
      margin-top: 16px;
      margin-bottom: 1px;
    }
  }
  .promo_icon {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 25px 0px;
    padding: 2%;
    border-radius: 8px;
    background-image: linear-gradient(
      to top,
      rgb(237, 210, 135),
      rgb(184, 134, 11)
    );

    img {
      width: 40px;
      height: 30px;
      margin-top: 10px;
    }
    h3 {
        margin-left: 10px;
      color: white;
    }
  }
  .code_input {
    width: 97%;
    height: 40px;
    font-size: 17px;
    padding: 5px;
  }
  .promo_option {
    background-color: #f4f4f4;
    margin-top: 20px;
    padding: 12px 10px;
    border-radius: 8px;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 21%);
    border: 1px solid #e9e9e9;
  }
  .terms_remove {
    color: rgb(0, 140, 255);
  }
`;
