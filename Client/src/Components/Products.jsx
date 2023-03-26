import styled from "styled-components";
import {popularProducts} from "../data";
import {trendingNow} from "../data"
import Product from "./Product";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { useState } from "react";

const ContainerAll =styled.div``
const Container1 = styled.div`
margin:20px 0px;
overflow: hidden;
`
const Container2 = styled.div`
margin:20px 0px;
overflow: hidden;
`

const Container = styled.div`
display:flex; 
position:relative;
`
const Arrow = styled.div`
width: 50px;
height:50px;
background-color: gray;
display: flex;
align-items:center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left:${props=> props.direction === "left" && "1px"};
right:${props=> props.direction === "right" && "1px"};
margin:auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
`;
const Wrap = styled.div`
padding:20px;
display:flex; 
transition: all 2.5s ease;
transform: translateX(${props => props.slideIndex * - 350}px);
`
const Title = styled.h1`
font-size:40px;
margin-left:30px

`

const Products = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1: 4);
        }
        else{
            setSlideIndex(slideIndex < 4 ? slideIndex + 1: 0);
        }

    }
  return (
    <ContainerAll>


    <Container1>
    <Title>POPULAR :</Title>
    <Container >
    <Arrow direction = "left" onClick={() => handleClick("left")} >
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrap slideIndex ={slideIndex} >
        {popularProducts.map(item => (
        <Product item={item} key={item.id}/>))}
</Wrap>


                <Arrow direction = "right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
    </Container1>


    <Container2>
    <Title>TRENDING NOW :</Title>
    <Container >
    <Arrow direction = "left" onClick={() => handleClick("left")} >
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrap slideIndex ={slideIndex} >
        {trendingNow.map(item => (
        <Product item={item} key={item.id}/>))}
</Wrap>


                <Arrow direction = "right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
    </Container2>

    </ContainerAll>

  )
}

export default Products