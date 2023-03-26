import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import styled from "styled-components"
import Announcements from "../Components/Announcements"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearWishlist } from "../Redux/wishlistRedux";



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


const Wishlist = () => {
  const wishlist = useSelector(state => state.wishlist);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleClickEmptyCart = ()=> {
    dispatch(clearWishlist())
   }
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <Title>YOUR WISHLIST</Title>
            <Top>
                <Link to="/">
                <TopButton>CONTINUE SHOPPING</TopButton>
                </Link>
                <TopTexts>
                <Link to="/cart" style={{color:"black" , textDecoration:"none"}}><TopText >SHOPPING BAG ({cart.quantity}) </TopText></Link>
                    <Link to="/wishlist" style={{color:"black" , textDecoration:"none"}}><TopText >YOUR WISHLIST ({wishlist.quantity})</TopText></Link>
                </TopTexts>
                <TopButton onClick={handleClickEmptyCart} type="filled">CLEAR WISHLIST</TopButton>
            </Top>
            <Bottom>
                <Info>
                {wishlist.products.map(product => (
                <Product>
                    <ProductDetail>
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
                  <Add/>
                  <ProductAmount>{product.quantity}</ProductAmount>
                  <Remove/>
                </ProductAmountContainer>
                <ProductPrice>{'\u20B9'}{product.price * product.quantity}</ProductPrice>
                    </PriceDetails>
                </Product>
                                
                ))}
                
                <br></br>


                </Info>
                 
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Wishlist