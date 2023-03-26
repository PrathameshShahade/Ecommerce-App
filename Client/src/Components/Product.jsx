import { FavoriteBorderOutlined, InfoOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import { Link } from "react-router-dom";
import styled from "styled-components"
import { useEffect, useState } from "react";
import {publicRequest} from "../requestMethods";
import { addProduct } from "../Redux/cartRedux";
import { useDispatch } from "react-redux";


const Info = styled.div`
opacity:0;
height:100%;
width:100%;
position:absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.2);
z-index:2;
display:flex;
align-items:center;
justify-content:center;
transition: all 2s ease;
cursor:pointer;
`;

const Container = styled.div`

margin:6px;
width:340px;
height:500px;
position:relative;

&:hover ${Info}{
    opacity:1;
}
`
const Image = styled.img`
height:85%;
width:340px;
`;

const Icon = styled.div`
height:50px;
width:50px;
border-radius:50%;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
margin:15px;
transition: all 1s ease;

&:hover {
    background-color:#e9f5f5; 
    transform:scale(1.2);
}
`;
const Name = styled.h2`
display:flex;
align-items:center;
justify-content:center;
`;
const Price = styled.h3`
margin-top:10px;
display:flex;
align-items:center;
justify-content:center;
`;


const Product = ({item}) => {
      const [product , setProduct] = useState({});
    const dispatch = useDispatch();
    useEffect(()=>{
       const getProduct = async ()=>{
        try{
          const res = await publicRequest.get("/products/find/"+item._id)
          setProduct (res.data);
        }catch{
        }
       }
  getProduct()
    },[item])
  
  
    const handleClick = ()=> {
     dispatch( addProduct({...product}))
    }





  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined onClick={handleClick}/>
            </Icon>
            <Icon>
                <Link to={`/product/${item._id}`}>
                <InfoOutlined/>
                </Link>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
        <Name>{item.title}</Name>
        <Price>{'\u20B9'}{item.price}</Price>
    </Container>
  )
}


export default Product