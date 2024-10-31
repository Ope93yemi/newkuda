import styled from "styled-components"
import "./info.css"
import HeroImage4 from '../../assets/info3.png'

const Info4 = () => {
    return(
        <Container>
        <TextBox>
        <h1>Save money as you spend it, seriously.</h1>
        <p>You can’t avoid spending. That’s how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow.</p>
        <span>See all our Savings</span>
        </TextBox>
        <ImageBox>
                <img src={HeroImage4} alt="Hero" />
            </ImageBox>
        </Container>
    )
}

export default Info4

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