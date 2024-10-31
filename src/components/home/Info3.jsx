import styled from "styled-components"
import "./info.css"
import HeroImage3 from '../../assets/info2.png'

const Info3 = () => {
    return(
        <Container>
            <ImageBox>
                    <img src={HeroImage3} alt="Hero" />
                </ImageBox>
            <TextBox>
            <h1>It’s your money, we just help you manage it.</h1>
            <p>Save it, spend it, send it. It’s up to you. Whatever you choose to do with your money, we’ll make sure it’s done better and free of charge. We take responsibility for that.</p>
            </TextBox>
            
            </Container>
    )
}

export default Info3

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
margin-right: 50%
`