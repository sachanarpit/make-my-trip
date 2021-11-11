 import styled from 'styled-components' 


export const Flightdetailcss = styled.div`

.flightdetail {
    width: 88%;
    margin: 20px;
    padding: 12px 0;
    border-radius: 2px;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 21%);
    border:1px solid #e9e9e9;
    background-color: #fff;
    position: relative;
    padding: 10px
}

.flightdetailheader {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    h2 {
        margin-top: 2px
    }

}
.date {
    background-color: rgb(255, 237, 209);
    margin-right: 5px
}
.fare_rules {
    color: #0091ff;
    cursor: pointer;
}
.cancel_fee {
    background-color: rgb(45, 193, 140);
    color: white;
}
.flightdetail_internal {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
}
.icon_div {
    display: flex;
    gap: 10px;
    justify-content: space-between;
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
    justify-content: space-between;
    flex-direction: row;
    gap: 10px;
    align-items: center;
}
#flight_timer {
    background-color: #f4f4f4;
    height: 150px;
}
`


