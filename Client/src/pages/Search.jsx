import { useEffect, useState } from "react";
import styled from "styled-components"
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Product from "../Components/Product";
import {publicRequest} from "../requestMethods";
import Announcements from "../Components/Announcements";

const Container = styled.div`
`;
const Container1 = styled.div`
margin-top:10px;
display: flex;
flex-wrap: wrap;
gap: 10px;
`;
const Title = styled.h1`
padding:10px;
`

const Search = () => {
    const [products, setProducts] =useState([]);
    const query = useLocation().search;
    const Sname = query.split("?q=");
    
    useEffect(()=>{
      const fetchProducts = async ()=>{
        const res = await publicRequest.get(`/products/search${query}`)
        setProducts(res.data)
      };
      fetchProducts();
    },[query])
  return (
    <Container>
   <Navbar/>
   <Announcements/>
   <Title>Search Results for {Sname}</Title> 
    <Container1>
    {products.map(item=>(
         <Product key={item._id} item={item}/>
       ))}
    </Container1> 
    </Container>
  )
}

export default Search