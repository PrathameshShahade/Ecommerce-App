import styled from "styled-components"
import { register } from "../Redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Container = styled.div`
height:100vh;
width:100vw;
background:linear-gradient(rgba(255, 255, 255 ,0.5),rgba(255, 255, 255 ,0.5)),
url("https://images.unsplash.com/photo-1529697216570-f48ef8f6b2dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80") center;
background-size:cover;
display:flex;
align-items:center;
justify-content:space-around;
`;

const Wrapper = styled.div`
width:40%;
padding:20px;
background-color:white;
`;

const Title = styled.h1`
font-size:25px;
font-weight:300;
`; 

const Form = styled.form`
display:flex;
flex-wrap: wrap;

`;

const Input = styled.input`
flex:1;
font-size:20px;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;
`;
const Agreement = styled.span`
font-size:12px;
margin:20px 0px;

`;
const Button = styled.button`
width: 40%;
border:none;
padding:15px 20px;
background-color: teal;
cursor:pointer;
color:white;
`;

const Logo = styled.div`
`;
const LogoTitle = styled.h1`
font-size:100px;
color:gray;
`;
const Error = styled.span`
  color: red;
`;

const Register = () => {
  const [firstname , setFirstname]= useState("")
  const [lastname , setLastname]= useState("")
  const [username , setUsername]= useState("")
  const [email , setEmail]= useState("")
  const [password , setPassword]= useState("")
  const [confirmpassword , setConfirmpassword]= useState("")

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

const handleClick = (e)=>{
  e.preventDefault();
  register(dispatch, {firstname,lastname,username,email,password,confirmpassword});
};
  return (
    <Container>
      <Logo>
        <LogoTitle>V VOCAL</LogoTitle>
      </Logo>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="First Name" onChange={(e) => setFirstname(e.target.value)}/>
                <Input placeholder="Last Name" onChange={(e) => setLastname(e.target.value)}/>
                <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <Input placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <Input placeholder="Confirm Password" onChange={(e) => setConfirmpassword(e.target.value)}/>

                <Agreement>
                    By creating an account , I consent to the processing of my personal data in accordance with the <b>Privacy Policy</b>
                </Agreement>
                <Button onClick={handleClick} disabled={isFetching}>CREATE</Button>
                {error && <Error>Looks like something went wrong...</Error>}
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register