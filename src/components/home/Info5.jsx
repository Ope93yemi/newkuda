import styled from "styled-components"
import "./info.css"
import HeroImage4 from '../../assets/info4.png'

const Info5 = () => {
    return(
        <Container>
            <ImageBox>
                <img src={HeroImage4} alt="Hero" />
            </ImageBox>
        <TextBox>
        <h1>Turn off access, turn on safety.</h1>
        <p>Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We’d like to see them try.</p>
        <span>Learn more about Cards</span>
        </TextBox>
        
        </Container>
    )
}

export default Info5

const Container = styled.div`
display: flex;
justify-content: space-between;
margin: 13%;
`
const TextBox = styled.div`
padding: 30px;
max-width: 30%;

h1 {
    font-size: 35px;
    font-weight: 700;
    color: #40196D;
}
    span {
    font-size: 22px;
    color: #40196D;
    margin-top: 10px;
    text-decoration: underline;
    }
`

const ImageBox = styled.div`
width: 1%;
margin-right: 50%;
`