import Navbar from '../Components/Navbar'
import styled from "styled-components"
import Shops1 from "../Components/Shops1"
const Container = styled.div`

`;
const Title = styled.h1`
display:flex;
align-items:center;
justify-content:center;
margin-top:20px;
`;



const Shops = () => {
  return (
    <Container>
        <Navbar/>
        <Title>SHOPS</Title>
        <Shops1/>
    </Container>
   
   
  )
}

export default Shops