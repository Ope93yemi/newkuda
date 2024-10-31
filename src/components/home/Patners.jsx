import Styled from "styled-components";
import Paystack1 from "../../assets/Patners/1.svg"
import Paystack2 from "../../assets/Patners/2.svg";
import Paystack3 from "../../assets/Patners/3.svg";
import Paystack4 from "../../assets/Patners/4.svg";
import Paystack5 from "../../assets/Patners/5.svg";

const Patners = () => {
    return(
        <Container>
            <h1>Our Partners</h1>
            <ImageBox>
                <img src={Paystack1} alt="paystack" />
                <img src={Paystack2} alt="paystack" />
                <img src={Paystack3} alt="paystack" />
                <img src={Paystack4} alt="paystack" />
                <img src={Paystack5} alt="paystack" />
                </ImageBox>
                </Container>
                )
}

export default Patners;

const Container = Styled.div`
margin-top: 17%;
    background-color: #f5f5f5;
    padding: 20px;
    text-align: center;
    height: 35vh;
    h1 {
    color: #40196D;
        font-size: 2.7rem;
        margin-bottom: 60px;
    }`

    const ImageBox =Styled.div`
    display: flex;
    justify-content: space-around;
    padding: 0 20%;
    img {
        width: 100px;
    }
    `

// Usage: