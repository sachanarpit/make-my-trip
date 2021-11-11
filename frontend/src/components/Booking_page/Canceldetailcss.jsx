import styled from 'styled-components' 


export const Canceldetailcss = styled.div`
.cancel {
    width: 88%;
    margin: 20px;
    padding: 12px 10px;
    border-radius: 2px;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 21%);
    border:1px solid #e9e9e9;
    background-color: #fff5ff;
    position: relative;
}
.cancel_header {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
}
.icon_div {
    display: flex;
    gap: 10px;
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
}
.penalty_date {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
}


.cancGradline {
    background-image: linear-gradient(to right, rgb(1, 149, 60), rgb(131, 180, 48), rgb(214, 158, 21), rgb(250, 93, 93));
    height: 6px;
    margin: 0% 0% 0% 25%;
    border-radius: 12px;
}
.cancel_footer {
    display: flex;
    justify-content: space-between;
    gap: 10px;
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


