 import styled from 'styled-components' 


export const Flightdetailcss = styled.div`
.flightdetail {
    width: 86%;
    border-radius: 8px;
    height: 235px;
    margin: 20px;
    padding: 12px 0;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 21%);
    /* border:1px solid #e9e9e9; */
    background-color: #fff;
    /* position: relative; */
    padding: 2%;
}

.flightdetailheader {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    position: relative;
    top: -30px;

}
.date {
    background-color: rgb(255, 237, 209);
    margin-right: 5px;
    position: relative;
    top: -10px
}
.fare_rules {
    color: #0091ff;
    cursor: pointer;
    position: relative;
    left: 15px;
}
.cancel_fee {
    background-color: rgb(45, 193, 140);
    color: white;
    padding: 3px;
    font-size: 13px;
}
.flightdetail_internal {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    position: relative;
    top: -60px
    /* margin-bottom: 10px; */
}
.icon_div {
    display: flex;
    gap: 10px;
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: row;
    align-items: center;

    img {
        width: 10%;
    }
    h4 {
        color: rgb(36, 153, 149);
    }
}
.flight_time {
    display: flex;
    flex-direction: row;
    line-height: 0px;
    gap: 10px;
    padding: 2%;
    align-items: center;

    div{width:100%}
}
#flight_timer {
    background-color: #f4f4f4;
    height: 100px;
    position: relative;
    top: -65px
}

`


