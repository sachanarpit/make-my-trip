import styled from 'styled-components' 


export const Flightdetailfootercss = styled.div`
.flightfooter {
    text-align: left;
    width: 86%;
    margin: 20px;
    padding: 2%;
    border-radius: 8px;
    box-shadow: 0px 0px 4px gray;
    background-color: #fff;


    h3 {
        margin-left: 15px;
    }
    h5 {
        margin: 0px;
    }
}

.inline {
    display: flex;
    flex-direction: row;
    gap: 10px;

    img {
        width:25px;
        height:25px;
        margin: 0px;
        margin-left: 15px;
    }
}
.btn{
    width:170px;
    margin: auto;
button{
    a{
        text-decoration: none;
        color: white;
    }
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
`


