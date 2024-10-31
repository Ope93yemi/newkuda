import styled from "styled-components"
import "./info.css"
import HeroImage5 from '../../assets/info5.png'

const Info6 = () => {
    return(
        <Container>
            
        <TextBox>
        <h1>We’re always happy to help you.</h1>
        <p>You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there’ll always be a friendly person there to make your life easy.</p>
        <span>Get Help</span>
        </TextBox>
        <ImageBox>
                <img src={HeroImage5} alt="Hero" />
            </ImageBox>
        
        </Container>
    )
}




export default Info6

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