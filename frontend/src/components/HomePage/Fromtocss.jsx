import styled from 'styled-components'
export const Fromtocss = styled.div`
height: 85px;
width: 95%;
margin: auto;
border: 0.01em solid #d4d0d0;
border-radius: 8px;
display: grid;
grid-template-columns: 1fr 1fr;
.fromtodiv {
    display:grid;
    grid-template-columns: 1fr 1fr;
    height: 87%;
}
h3{
    position : relative;
    top: -15px;
    left: 12px;
    font-size: 16px;
    font-weight: 500;
}
.fromtodiv div{
    border-right: 0.01em solid #d4d0d0;
    height:82%;
}
.fromtodiv select {
    padding:4%;
    width:100%;
    font-size:25px;
    font-weight:bold;
    border: none;
    position : relative;
    top: -25px;
    -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
}
.fromtodiv2 {
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 87%;
}
.date{
    border:none;
    font-size: 16px;
    margin-left: 10px;
}
.fromtodiv2 div{
    border-right: 0.01em solid #d4d0d0;
    height:89%;
}
.fromtodiv2 select {
    padding:4%;
    width:100%;
    font-size:25px;
    font-weight:bold;
    border: none;
    position : relative;
    top: -19px;
    -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
}
`