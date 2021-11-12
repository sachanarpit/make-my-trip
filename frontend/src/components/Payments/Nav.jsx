
import styled from 'styled-components'

const Div=styled.div`
height:50px;
border:1px solid black;
display:flex;
padding: 4px 40px 0px 40px;
justify-content:space-between;
background-color: white;
}
`

const Img = styled.img`
width:10%;
height:80%;
object-fit:contain;
`
function Nav(){
    return(
        <Div>
         <Img src="https://upload.wikimedia.org/wikipedia/en/e/e4/Yatra_company_logo.png" alt="Yatra_logo"></Img>
         <span>Hi! Balkishan</span>

        </Div>
    )
}

export {Nav}