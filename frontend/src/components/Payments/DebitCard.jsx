import styled from 'styled-components';

const Div = styled.div`
width:62%;
background:white;
border: 1px solid rgb(161, 161, 161);
border-left:none;
`

function DebitCard(){
    return(
        <Div>
            debit card
        </Div>
    )
}
export {DebitCard}