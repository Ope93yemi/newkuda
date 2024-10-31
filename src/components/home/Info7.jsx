import styled from "styled-components"
import "./info.css"
import HeroImage5 from '../../assets/info6.png'

const Info7 = () => {
    return(
        <Container>
             <ImageBox>
                <img src={HeroImage5} alt="Hero" />
            </ImageBox>
        <TextBox>
        <h1>Fees as clear as glass.</h1>
        <p>We’re serious about free banking, and we will never, ever charge you for anything without your consent.</p>
        <span>See all our fees</span>
        </TextBox>
       
        
        </Container>
    )
}







export default Info7

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