import styled from "styled-components"
import { useSelector } from "react-redux";
import Announcements from "../Components/Announcements"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import { useHistory } from "react-router-dom";

const Container = styled.div`
`;
const Wrapper = styled.div`
display:flex;
`;
const ShippingInfo = styled.div`
flex:2.5;
`;
const Title = styled.h1`
display: flex;
align-items: center;
justify-content: center;
margin-top:30px;
`;
const Form = styled.form`
margin-left:10px;
padding:10px;
display:flex;
flex-wrap: wrap;
`;
const Input = styled.input`
flex:1;
font-size:25px;
min-width:40%;
margin:22px 10px 0px 0px;
padding:10px;
`;
const Input1 = styled.input`
flex:1;
font-size:25px;
min-width:80%;
margin:22px 10px 0px 0px;
padding:10px;
`;








const Summary = styled.div`
flex:1;
border:1px solid black;
border-radius:10px;
padding:20px;
margin-top:95px;
margin-right:20px;
height:51vh;
`;
const SummaryTitle = styled.h1`
font-weight:200; 
`;
const SummaryItem = styled.div`
margin:40px 0px;
display:flex;
justify-content:space-between;
font-size:24px;
font-weight:${props => props.type === "total" && "900"}
`;
const SummaryItemText = styled.span`

`;
const Button = styled.button`
padding:15px;
width:100%;
background-color:teal;
color:white;
font-size:15px;
font-weight:900;
`;
const ShippingAdd = () => {
  const cart = useSelector(state => state.cart);
  const history = useHistory();
  const handleDelivery = ()=> {
    let path = `/payOption`; 
    history.push(path);
  }
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
        <ShippingInfo>
          <Title>SHIPPING INFO</Title>
          <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input1 placeholder="Flat No , Bldg No" />
          <Input1 placeholder="Street Address" />
          <Input placeholder="Landmark" />
          <Input placeholder="Additional Info" />
          <Input placeholder="City"/>
          <Input placeholder="Pin Code"/>
          <Input placeholder="State"/>
          <Input placeholder="Country"/>

          </Form>
          
        </ShippingInfo>




<Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemText>{'\u20B9'} {cart.total}</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Charges</SummaryItemText>
              <SummaryItemText>{'\u20B9'} 100</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemText>- {'\u20B9'} 100</SummaryItemText>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemText>{'\u20B9'} {cart.total}</SummaryItemText>
            </SummaryItem>
            
      
      
    <Button onClick={handleDelivery}>CHECKOUT NOW</Button> 
     
        </Summary>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default ShippingAdd