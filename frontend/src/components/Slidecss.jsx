import styled from 'styled-components'
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
` 

export const Bigslide = styled.div`
height: 350px;
box-shadow: 0px 0px 3px #c0bdbd;
width: 90%;
background-color: white;
border-radius: 8px;
margin: auto;
margin-top: 50px;
.supreoffers{
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: flex-start;
    gap: 100px;
    background-color: white;
        margin: auto;
        h1{
            font-size: 40px;
            position: relative;
            top: -18px;
            color: #363636;
        }
    div{
        display: flex;
        flex-direction: row;
        gap: 15px;
        height: 50px;
        color: #363636;
        border-bottom: 1px solid #4a4a4a;
    }
}
.parentbigslide{
    padding: 30px;
}
.bigslideDiv{
    display: grid;
    cursor: pointer;
    grid-template-columns: 30% 70%;
    width: 480px;
    box-shadow: 0px 0px 5px #a8a6a6;
    border-radius: 8px;
    height: 150px;
    gap: 5px;
    padding: 1%;
    div{
        padding-top: 0px;
        margin-top: 0px;
    }
    h3{
        color: gray;
     font-size: 100%;
     position: relative;
     top: -48px;
    }
    h2{
     font-size: 18px;
     position: relative;
     top: -48px;
    }
    img{
        border-radius: 8px;
        position: relative;
        top: -31px;
        left: 10px;
    }
    p{
        font-size: 11px;
        top: -55px;
        color: gray;
        position: relative;
    }
    span{
        color: gray;
        font-size: 10px;
        position: relative;
        bottom: 5px;
        left: 18px;
    }
    h4{
        font-size: 18px;
        top: -30px;
        right: 15px;
        color: #2b3cd1;
        text-align: right;
        position: relative;
    }
    .reddiv{
        width: 50px;
        background-color: red;
        height: 2px;
        position: relative;
        top: -55px;
    }
}
`
