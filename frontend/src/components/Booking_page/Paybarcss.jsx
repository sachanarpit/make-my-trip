import styled from 'styled-components' 


export const Paybarcss = styled.div`

.payment_rs {
    padding: 12px 0;
    border-radius: 2px;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 21%);
    border:1px solid #e9e9e9;
    background-color: #fff;
    position: relative;
    padding: 10px
}

.inline {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid grey;
    
    h3 {
        margin-top: 20px;
        margin-bottom: 7px;
    }
    h5 {
        margin-top: 18px;
        margin-bottom: 0px;
        font-size:16px;

    }
    p {
        margin-top: 18px;
        margin-bottom: 1px;

    }
}
.promo_icon {
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 25px 0px;
    padding: 0px 5px;

    background-image: linear-gradient(to top, rgb(237, 210, 135), rgb(184, 134, 11));

    img {
        width: 40px;
        height:30px;
        margin-top:10px;
    }
    h3 {
        color: white;
    }
}
.code_input {
    width:80%;
    height: 40px;
    font-size: 17px;
}
.promo_option {
    background-color: #f4f4f4;
    margin-top: 20px;
    padding: 12px 10px;
    border-radius: 2px;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 21%);
    border:1px solid #e9e9e9;
}
.terms_remove {
    color: rgb(0, 140, 255);
}
`


