import {MdArrowDropDown} from 'react-icons/md';
import styled from 'styled-components';
import HeaderLogo from '../assets/kuda.png'
import NigIcon from '../assets/nigeria.png'
import { IoReorderTwoOutline } from "react-icons/io5";

const Header = () => {
    return(
        <Container>
            <LogoNav>
                <Logo>
                    <img src={HeaderLogo} alt="" />
                </Logo>
                <Navigations>
                    <nav>
                        <span>Personal</span>
                        <MdArrowDropDown size={20} />
                    </nav>
                    <nav>
                        <span>Business</span>
                        <MdArrowDropDown size={20} />
                    </nav>
                    <nav>
                        <span>Company</span>
                        <MdArrowDropDown size={20} />
                    </nav>
                    <nav>
                        <span>Help</span>
                        <MdArrowDropDown size={20} />
                    </nav>
                </Navigations>
            </LogoNav>
            <Buttons>
                <SignBtn>Sign In</SignBtn>
                <JoinBtn>Join Kuda</JoinBtn>
                <ConBtn>
                    <img src={NigIcon} alt="nig" />
                </ConBtn>
                <SideNav>
                    <IoReorderTwoOutline />
                </SideNav>
            </Buttons>

        </Container>
    )
}

export default Header

const Container = styled.div`
height: 70px;
/* background-color: aqua; */
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
const LogoNav = styled.div`
display: flex;
align-items: center;
`
const Logo = styled.div`
margin: 0px 80px 0px 50px;
img{
    width: 100px;
}
`
const Navigations = styled.div`
display: flex;
nav{
    display: flex;
    align-items: center;
    color: #5e025e;
    margin: 0px 20px;
    span{
        margin-right: 3px;
        font-size: 13px;
        font-weight: 600;
        
    }
}

@media (max-width: 800px) {
    display: none;
}
`
const Buttons = styled.div`
display: flex;
align-items: center;

@media (max-width: 800px) {
    margin-right: 30px;
}
`
const SignBtn = styled.button`
background-color: transparent;
border: none;
outline: none;
font-weight: 600;
color: #40196D;

@media (max-width: 800px) {
    display: none;
}
`
const JoinBtn = styled.button`
width: 150px;
height: 45px;
border-radius: 10px;
outline: none;
border: none;
color: #fff;
font-weight: 700;
background-color: #5e025e;
margin: 0px 25px;

@media (max-width: 800px) {
    display: none;
}
`
const ConBtn = styled.button`
background-color: #a4e3c6;
outline: none;
border: none;
height: 40px;
width: 40px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
margin-right: 50px;

img{
    width: 20px;
}
`

const SideNav = styled.div`
display: none;
font-size: 30px;
margin-left: -30px;

@media (max-width: 800px) {
    display: flex;
    align-items: center;
    cursor: pointer;
}
`