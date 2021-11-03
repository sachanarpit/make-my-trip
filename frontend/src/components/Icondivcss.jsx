import styled from 'styled-components'
export const Icondivcss = styled.div`
.icondiv{
    height:74px;
    width:74%;
    padding-top: 5px;
    margin: auto;
    background: white;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    box-shadow: 1px 3px 5px #c0c0c0;
    p{padding:0px; margin:-6px;color: #555454;font-size:13px;}
    span{
        color: #a3a3a3;
        cursor: pointer;
    }
    span:hover{
        color: #2db0fc;
    }
    div:hover{
        color: #2db0fc;
    }
}
`