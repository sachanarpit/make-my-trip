import styled from 'styled-components'
export const Navbar = styled.div`
height: 500px;
background: linear-gradient(to top,  #0e26ac 0%,#020861 50%,#0c0361 50%,#000120 100%);
.laltain{
    position: absolute;
    left: 0px;
    top:0px;
 
}
.mmtlogo{
    position: absolute;
    left: 70px;
    top: 10px;
    width: 8%;
}
.topdiv{
padding-top:20px;
height:70px;
display: flex;
gap: 10px;
flex-direction: row-reverse;
.login {
    /* align-items: center; */
    display: flex;
    position: relative;
    top: -6px;
    right: 60px;
    font-size: 13px;
    background: linear-gradient(to right,  #8f92fa 0%,#6165f0 50%,#6c70eb 50%,#3339e9 100%);
    padding-left: 14px;
    font-weight: 600;
    border-radius: 8px;
    color: white;
    line-height: 10px;
    width: 150px;
    height: 40px;
  }
}
.button{
    width: 200px;
    margin: auto;
button{
    width: 200px;
      height: 50px;
      color: white;
      font-weight: 600;
      border:none;
      cursor: pointer;
      position: relative;
      top: -27px;
      font-size: 24px;
      border-radius: 25px;
      background: linear-gradient(
        to right,
        #8fdcfa 0%,
        #619ff0 50%,
        #6c9feb 50%,
        #3339e9 100%);
}
}

`
