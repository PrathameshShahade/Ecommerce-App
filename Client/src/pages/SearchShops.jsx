import { useEffect, useState } from "react";
import styled from "styled-components"
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Shop from "../Components/Shop";
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

const SearchShops = () => {
    const [shops, setShops] =useState([]);
    const query = useLocation().search;
    const Sname = query.split("?q=");
    
    useEffect(()=>{
      const fetchShops = async ()=>{
        const res = await publicRequest.get(`/shops/searchshops${query}`)
        setShops(res.data)
      };
      fetchShops();
    },[query])
  return (
    <Container>
   <Navbar/>
   <Announcements/>
   <Title>Search Results for {Sname}</Title> 
    <Container1>
    {shops.map(item=>(
         <Shop key={item._id} item={item}/>
       ))}
    </Container1> 
    </Container>
  )
}

export default SearchShops