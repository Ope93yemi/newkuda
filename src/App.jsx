import styled from "styled-components"
import { MdAddToHomeScreen } from "react-icons/md";
import Home from "./pages/Home";
import Header from "./static/Header";
import Footer from "./static/Footer";


const App = () => {
  const d = 2+3
  return(
    <div>
      <Header />
      <Home />
      <Footer/>
    </div>
  )
}

export default App

const Container = styled.div`
background-color: yellow;
font-size: 30px;
color: pink;
`





