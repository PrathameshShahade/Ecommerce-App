import Announcements from "../Components/Announcements";
import Navbar from "../Components/Navbar";
import styled from "styled-components"
import { useHistory } from "react-router-dom";
import React, { useState } from 'react';
import { useSelector } from "react-redux";
const Container = styled.div`
`;
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content:space-between;
height:60vh;
padding:0 10vw;
`;
const Title = styled.h1`
display: flex;
align-items: center;
justify-content:center;
font-size: 40px;
margin-top:50px;
`;
const Button = styled.button`
padding:40px;
font-size: 20px;
background-color:white;
:hover{
  background-color:teal;
  color:white;
}
`;


const PaymentOption = () => {
  const history = useHistory();
  const handlePaymentCOD = ()=> {
    let path = `/success`; 
    history.push(path);
  }

  const [amount] = useState(0);
  const cart = useSelector(state => state.cart);


  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Title>CHOOSE PAYMENT METHOD</Title>
        <Wrapper>
            <Button onClick={handlePaymentCOD}>CASH ON DELIVERY</Button>


<form action="/create-checkout-session" method="POST"><Button type="submit">DEBIT / CREDIT CARDS</Button></form>
        
      
            
            <Button>UPI PAYMENT</Button>
        </Wrapper>
    </Container>
  )
}

export default PaymentOption