import styled from "styled-components";

export const Bookingheadercss = styled.div`
  .jello {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: black;
    z-index: 100;
  }
  .bookingheader {
    // background-color: #041422;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: space-between;
   padding-left: 20px;
   padding-right: 20px;


    h2 {
      color: white;
      margin-top: 10px;
    }
  }
  .bookingleft {
    display: flex;
    flex-direction: row;
    gap: 15px;

    p {
      color: white;
      font-size: 13px;
      border-bottom: 1px solid white;
      margin-bottom: 25px;
    }
  }
  
`;
