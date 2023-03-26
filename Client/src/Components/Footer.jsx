import { Copyright, Facebook, Instagram, LinkedIn, Pinterest, Twitter } from "@material-ui/icons";
import styled from "styled-components"
import { Link } from 'react-router-dom';

const Container = styled.div`
display:flex;
height:50vh;
`;
const Left = styled.div`
flex:1
height:50vh;
margin-top:100px;
margin-left:30px;
display:flex;
align-items:center;
justify-content:center;
`;
const Logo = styled.p`
font-size:80px;
font-weight:900;
;
`;
const Right = styled.div`
flex:2;
height:100%;
margin-left:200px;
margin-top:100px;
font-size: 25px;
letter-spacing: 3px;
position: relative;
`;
const Gen = styled.p`
margin-bottom:20px;
cursor:pointer;
`;
const Category = styled.p`
cursor:pointer;
`;
const Findus = styled.p`
margin-top:80px;
margin-bottom:30px;
`;
const Icons = styled.div`
display: flex;
`
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color: #${props => props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
`
const Disc = styled.div`
margin-top: 50px;
position: absolute;
margin-left:-210px;
`


const Footer = () => {
  return (
    <Container>
        <Left>
           <Logo>V VOCAL</Logo>
        </Left>
        <Right>
            <Gen>
                Shop for :<Link to="/products/Men" style={{color:"black" , textDecoration:"none"}}> MEN </Link>
                | <Link to="/products/Women" style={{color:"black" , textDecoration:"none"}}> WOMEN </Link> 
                | <Link to="/products/Kids" style={{color:"black" , textDecoration:"none"}}> KIDS </Link> 
            </Gen>
            <Category>
                Category : <Link to="/products/Sports%20Shoes" style={{color:"black" , textDecoration:"none"}}> Sports Shoes </Link>  | Casual Shoes | Formal Shoes | Running Shoes | Sneakers | Sandals
            </Category>
            <Findus>Find us :</Findus>
            <Icons>
                <SocialIcon color="3B5999"><Facebook/></SocialIcon>
                <SocialIcon color="55ACEE"> <Twitter/></SocialIcon>
                <SocialIcon color="E4405F"><Instagram/></SocialIcon>
                <SocialIcon color="3B5999"><LinkedIn/></SocialIcon>
                <SocialIcon color="E60023"><Pinterest/></SocialIcon> 
            </Icons>
            <Disc>
                <Copyright/> 2023 www.vvocal.com All Rights Reserved
            </Disc>
        </Right>
    </Container>
  )
}

export default Footer