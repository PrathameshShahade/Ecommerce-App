import { Add, Cancel, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import styled from "styled-components"
import Announcements from "../Components/Announcements"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart, deleteProduct} from "../Redux/cartRedux";


const Container = styled.div`
`;
const Wrapper = styled.div`
padding:20px;
`;
const Title = styled.h1`
font-weight:300;
text-align:center;
`;
const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
`;
const TopButton = styled.button`
padding:20px;
cursor:pointer;
font-weight:900;
border: ${(props) => props.type === "filled" && "none"};
background-color: ${(props) => props.type ==="filled" ? "black" : "transparent"};
color: ${(props) => props.type ==="filled" && "white"};
`;
const TopTexts = styled.div`

`;
const TopText = styled.span`
font-size:20px;
cursor:pointer;
margin:0px 30px;
`;
const Bottom = styled.div`
display:flex;
justify-content:space-between;

`;
const Info = styled.div`
flex:2.7;
margin-left:20px;
margin-top:30px;
`;
const Product= styled.div`
display: flex;
justify-content: space-between;
border:1px solid black;
margin-bottom: 20px;
`;
const ProductDetail= styled.div`
flex:2;
display: flex;
`;
const Image= styled.img`
width:224px;
height:222px;
`;
const Details= styled.div`
padding:20px;
display: flex;
flex-direction:column;
justify-content: space-around;
font-size:25px;
`;
const ProductName= styled.div`

`;
const ProductId= styled.span`

`;
const ProductColor= styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props => props.color};
`;
const ProductSize= styled.span`

`;
const PriceDetails= styled.span`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;
const Summary = styled.div`
flex:1;
border:1px solid black;
border-radius:10px;
padding:20px;
margin-top:30px;
margin-left:50px;
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
const OtherWise = styled.h1`
font-weight:200; 
`;


const Cart = () => {
  const cart = useSelector(state => state.cart);
  const wishlist = useSelector(state => state.wishlist);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClickEmptyCart = ()=> {
    dispatch(clearCart())
   }
   const handleRemoveProduct = (productId) => {
    dispatch({
      type: deleteProduct,
      payload: productId,
    });
  };
  const handleDelivery = ()=> {
    let path = `/shippingAdd`; 
    history.push(path);
  }
  const handleHome = ()=> {
    let path1 = `/`; 
    history.push(path1);
  }
 
  const handleToken = (token) => {
    console.log(token);
    alert("Payment Successful!");
    dispatch(clearCart());
  };
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <Link to="/">
                <TopButton>CONTINUE SHOPPING</TopButton>
                </Link>
                <TopTexts>
                <Link to="/cart" style={{color:"black" , textDecoration:"none"}}><TopText >SHOPPING BAG ({cart.quantity}) </TopText></Link>
                    <Link to="/wishlist" style={{color:"black" , textDecoration:"none"}}><TopText >YOUR WISHLIST ({wishlist.quantity})</TopText></Link>
                </TopTexts>
                <TopButton onClick={handleClickEmptyCart} type="filled">CLEAR CART</TopButton>
            </Top>
            <Bottom>
                <Info>
                {cart.products.map(product => (
                <Product>
                    <ProductDetail>
                      <Cancel style={{position:"absolute", fontSize:"30px", color:"black", borderRadius:"50%"}} onClick={() => handleRemoveProduct(product._id)}/>
                        <Image src={product.img}/> 
                        <Details>
                            <ProductName><b>Product : </b>{product.title}</ProductName>
                            <ProductId><b>Id : </b>{product._id}</ProductId>
                            <ProductColor color={product.color}/>
                            <ProductSize><b>Size : </b>{product.size}</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetails>
                    <ProductAmountContainer>
                    <Add />
                  <ProductAmount>{product.quantity}</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>{'\u20B9'}{product.price * product.quantity}</ProductPrice>
                    </PriceDetails>
                   
                </Product>
                                
                ))}

                </Info>

                 {cart.total >=1 ? 
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
                  
            
            
          {cart.quantity >=1  ? <Button onClick={handleDelivery}>CHECKOUT NOW</Button> : <Button onClick={handleHome}>CHECKOUT NOW</Button> }
           
              </Summary> : <OtherWise></OtherWise>}
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart