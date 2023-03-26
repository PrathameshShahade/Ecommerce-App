import { Link } from "react-router-dom"
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
flex:1;
margin: 5px;
height:70vh;
position:relative;
`
const Image = styled.img`
width:100%;
height:100%;
object-fit: cover;
`
const Info = styled.div`
position: absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
`
const Title = styled.h1`
color: white;
margin-bottom:40px;
font-size:30px;
text-align:center;
${mobile({ fontSize:"30px"})}
`
const Buttton = styled.button`
border:none;
padding:13px;
font-weight:bold;
cursor: pointer;
`

const AllcategoryItems = ({item}) => {
  return (
    <Container>
    <Image src={item.img}/>
     <Info>
        <Title>{item.title}</Title>
        <Link to={`/products/${item.cat}`}>
        <Buttton>SHOP NOW</Buttton>
        </Link>
     </Info>
    </Container>
  )
}

export default AllcategoryItems