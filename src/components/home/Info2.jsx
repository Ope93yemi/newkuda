import styled from "styled-components"
import "./info.css"
import HeroImage2 from '../../assets/info.png'

const Info2 = () => {
    return(
        <Container>
            <TextBox>
            <h1>Your phone +<br></br>our app +<br></br>a debit card = <br></br>a simpler life.</h1>
            <p>We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves.</p>
            <span>Open An Account in Minutes</span>
            </TextBox>
            <ImageBox>
                    <img src={HeroImage2} alt="Hero" />
                </ImageBox>
            </Container>
    )
}

export default Info2

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
width: 3%;
margin-right: 50%;
`