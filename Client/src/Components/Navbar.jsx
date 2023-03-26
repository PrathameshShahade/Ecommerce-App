import { Badge } from '@material-ui/core'
import { FavoriteBorderOutlined, Search, ShoppingCartOutlined, Menu } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Logout } from "../Redux/apiCalls";
import { useHistory } from "react-router-dom";

const Container = styled.div`
height: 60px;

@media (max-width: 768px) {
  height: auto;
}
`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;  
justify-content: space-between;
align-items: center;

@media (max-width: 768px) {
  flex-direction: column;
  padding: 10px;
}
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center; 
`
const Language = styled.div`
font-size: 14px;
cursor: pointer; 

`
const SearchContainer = styled.div` 
border: 1px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
const Input = styled.input`
border: none;
padding: 7px;
font-size:15px;

`
const Center = styled.div` 
  flex: 3.5;
text-align: center;

`
const Logo = styled.h1`
font-weight: bold;

`
const Right = styled.div` 
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;

@media (max-width: 768px) {
  flex-direction: column;
  position: relative;
  width: 100%;
  margin-top: 10px;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
}
`
const MenuItems = styled.div`
font-size:14px;
cursor: pointer;
margin-left: 18px;

@media (max-width: 768px) {
  padding: 10px;
}
`
const LogoutDiv = styled.div`
display:flex;
`
const LogoutButton = styled.button`
font-size:14px;
padding:5px;
cursor: pointer;
margin-left: 18px;
background-color:teal;
color:white;
`
const HamburgerButton = styled.div`
display: none;
cursor: pointer;

@media (max-width: 768px) {
  display: block;
}
`
const Navbar = () => {

  const[q, setQ] = useState("")
  const navigate = useHistory("");
  const {currentUser} = useSelector(state=>state.user)
  const quantity = useSelector(state => state.cart.quantity)
  const quantityw = useSelector(state => state.wishlist.quantity)
  const dispatch = useDispatch();
  const handleClick = (e)=>{
    Logout(dispatch)
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
        <Wrapper>
            <Left>
              <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
                <Menu />
              </HamburgerButton>
              <Language>EN</Language>
              <SearchContainer>
                  <Input onChange={(e) => setQ(e.target.value)}/> 
                  <Search  onClick={() => navigate.push(`/search?q=${q}`)}/>
              </SearchContainer>
            </Left>
            <Center>
              <Link to="/" style={{color:"black" , textDecoration:"none"}}>
              <Logo>V VOCAL</Logo>
              </Link>
            </Center>
            { currentUser ? 
                             <LogoutDiv style={{marginTop:"10px"}}>
                                <LogoutButton style={{fontSize:"15px"}} onClick={handleClick}>LOGOUT {currentUser.username}</LogoutButton> 
                                <Link to="/wishlist"><MenuItems><Badge badgeContent={quantityw} color="primary"><FavoriteBorderOutlined style={{color:"black" , textDecoration:"none"}}/></Badge></MenuItems></Link> 
                                <Link to="/cart"><MenuItems><Badge badgeContent={quantity} color="primary" ><ShoppingCartOutlined style={{color:"black" , textDecoration:"none"}}/></Badge></MenuItems></Link> 
                             </LogoutDiv>  
                          :

                          <Right>
                          <Link to="/register" style={{color:"black" , textDecoration:"none"}}>
                          <MenuItems>REGISTER</MenuItems>
                          </Link>
                          <Link to="/login" style={{color:"black" , textDecoration:"none"}}>
                          <MenuItems>SIGN IN</MenuItems>
                          </Link>
                          <Link to="/wishlist">
                          <MenuItems><Badge badgeContent={quantityw} color="primary"><FavoriteBorderOutlined style={{color:"black" , textDecoration:"none"}}/></Badge></MenuItems>
                          </Link>
                          <Link to="/cart">
                          <MenuItems><Badge badgeContent={quantity} color="primary"><ShoppingCartOutlined style={{color:"black" , textDecoration:"none"}}/></Badge></MenuItems>
                          </Link>
                      </Right>
            }
        </Wrapper>
    </Container>
  )
}

export default Navbar