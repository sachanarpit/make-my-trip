import styled from 'styled-components'
const Style = styled.div`
width: 64%;
margin-left: 70px;
.main{
    border-radius: 8px;
    padding: 2%;
    box-shadow: 0px 0px 3px gray;
    display: flex;
    gap: 20px;
    align-items: center;
    height: 40px;
    background-color: white;

    p{
        font-size: 18px;
    }
}
`;
export const GSTNumber = ()=>{
    return <Style>
        <h2>GST number from buisness travell (Optional)</h2>
        <div className="main">
    <input type="checkbox" />
    <p>To claim credit of GST charged by airlines / MMT. please enter your company's GST number</p>
        </div>
    </Style>
}