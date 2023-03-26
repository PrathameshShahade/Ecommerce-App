import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
height:60vh; 
background-color:#fcf5f5;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;
const Title = styled.h1`
font-size:80px;
margin-bottom:20px;
`;
const Desc = styled.div`
font-size:35px;
font-weight:400;
margin-bottom:20px;
`;
const InputContainer = styled.div`
height:40px;
width:35%;
background-color:white;
display:flex;
justify-content:space-between;
border:1px solid lightgray;
margin-top:20px;
`;
const Input = styled.input`
border:none;
flex:9;
font-size:20px;
`;
const Button = styled.button`
flex:1;
border:none;
background-color:teal;
color:white;
`;

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Never miss any updates for your favourite products.</Desc>
        <InputContainer>
           <Input placeholder="Your Email"/>
           <Button>
            <Send/>
           </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter