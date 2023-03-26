import styled from "styled-components"
import { Search } from "@material-ui/icons";
import "./style.scss";
import "../data";
import MovingComponent from 'react-moving-text';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #e6e6fa;

  @media (max-width: 768px) {
    height: 710px;
    width: 400px;
  }
`;

const MenuItems = styled.div`
  margin-top: 1vh;
`;

const UL = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LI = styled.li`
  list-style: none;
  margin-right: 50px;
  font-size: 35px;
  font-weight: 900;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100px;
    font-size: 20px;
    margin-right: 0px;
  }
`;

const LogoContainer = styled.div`
  height: 30vh;
  margin-top: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.p`
  font-size: 200px;
  letter-spacing: 3px;
  font-weight: 900;
  color: white;

  @media (max-width: 768px) {
    font-size: 70px;
  }
`;

const InputContainer = styled.div`
  height: 90px;
  width: 55%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  margin-top: 100px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Input = styled.input`
  border: none;
  flex: 9;
  font-size: 40px;

  @media (max-width: 768px) {
    width: 100px;
    font-size: 20px;
  }
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;
const HomePin = () => {
  const[q, setQ] = useState("")
  const navigate = useHistory("");
  return (
<Container>

<MenuItems>
<UL>
    <Link to="/shops" style={{textDecoration:"none"}}><LI>Shops</LI></Link>

    <Link to="/about" style={{textDecoration:"none"}}><LI>About</LI></Link>
   
    <Link to="/contact" style={{textDecoration:"none"}}><LI>Contact</LI></Link>
    
    <Link to="/feedback" style={{textDecoration:"none"}}><LI>Feedback</LI></Link>
</UL>
</MenuItems>

<LogoContainer>
    <Logo>
    <MovingComponent
  type="slideInFromRight"
  duration="2000ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="1"
  fillMode="none">
V VOCAL
</MovingComponent>
</Logo>
</LogoContainer>

<InputContainer>
           <Input placeholder="Search your neighbourhood ....."  onChange={(b) => setQ(b.target.value)}/>
           <Button onClick={() => navigate.push(`/searchshops?q=${q}`)}>
            <Search/>
           </Button>
        </InputContainer>

</Container>
  )
}


export default HomePin