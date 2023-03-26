import styled from "styled-components"

const Container = styled.div`

margin:6px;
width:700px;
height:500px;
position:relative;

`
const Image = styled.img`
height:80%;
width:700px;
`;

const Name = styled.h2`
font-size:35px;
display:flex;
align-items:center;
justify-content:center;
`;
const Address = styled.h2`
font-size:25px;
display:flex;
align-items:center;
justify-content:center;
`;


const Shop = ({item}) => {

  
  return (
    <Container>
        <Image src={item.img}/>
        <Name>{item.title}</Name>
        <Address>{item.desc}</Address>
    </Container>
  )
}


export default Shop