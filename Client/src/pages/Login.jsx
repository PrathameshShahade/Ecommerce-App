import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import styled from "styled-components"
import { login } from "../Redux/apiCalls";

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
width:30%;
padding:20px;
background-color:white;
`;

const Title = styled.h1`
font-size:25px;
font-weight:300;
margin-bottom:10px;
`; 

const Form = styled.form`
display:flex;
flex-direction:column;
`;

const Input = styled.input`
flex:1;
font-size:20px;
min-width:40%;
margin:10px 0px ;
padding:10px;
`;

const Button = styled.button`
width: 40%;
border:none;
padding:15px 20px;
background-color: teal;
cursor:pointer;
color:white;
margin-bottom:10px;
&:disabled {
  color: green;
  cursor: not-allowed;
}
`;


const Logo = styled.div`
`;
const LogoTitle = styled.h1`
font-size:100px;
color:gray;
`;
const Link = styled.a`
margin:5px 0px;
font-size:13px;
text-decoration:underline;
cursor:pointer;
`;
const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
            <Logo>
        <LogoTitle>V VOCAL</LogoTitle>
      </Logo>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;