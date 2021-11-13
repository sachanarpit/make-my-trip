import styled from 'styled-components' 


export const Canceldetailcss = styled.div`
.cancel {
    width: 86%;
    margin: 20px;
    padding: 2%;
    border-radius: 2px;
    box-shadow: 0px 0px 5px #797878;
    border-radius: 8px;
    background-color: #fff5ff;
    height: 250px;
}
.cancel_header {
    display: flex;
    position: relative;
    top: -20px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
}
.icon_div {
    display: flex;
    gap: 10px;
    position: relative;
    top: -30px;
    flex-direction: row;

    img {
        width: 25px;
        height: 25px;
    }
    h4 {
        margin: 0px;
    }
}
.penalty_rs {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    position: relative;
    top: -35px;
}
.penalty_date {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    position: relative;
    top: -55px;
}


.cancGradline {
    background-image: linear-gradient(to right, rgb(1, 149, 60), rgb(131, 180, 48), rgb(214, 158, 21), rgb(250, 93, 93));
    height: 6px;
    margin: 0% 0% 0% 25%;
    border-radius: 12px;
    position: relative;
    top: -45px;
}
.cancel_footer {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-direction: row;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 15%);
    background-color: #ddfffe;
  padding-left: 10px;
  padding-right: 20px;
height: 60px;
align-items: center;
    border-radius: 8px;

    p {
        margin-top: 10px;
    }
}
.cancel_footer2{
    display: flex;
    justify-content: space-between;
    gap: 10px;
    border-radius: 8px;
    position: relative;
    top: -65px;
    flex-direction: row;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 15%);
    background-color: #ddfffe;
    padding: 5px 10px;

    p {
        margin-top: 10px;
    }
}
.upgrade {
    color: #0091ff;
}
.cancel_footer_left {
    display: flex;
    gap: 10px;
    flex-direction: row;
}
.rs_icon {
    margin-top:8px;
    width:27px;
    height: 27px;
}
.luggagebar {
    width: 90%;
    margin: 0px;
    padding: 0px 0px 0px 20px;
}

`


