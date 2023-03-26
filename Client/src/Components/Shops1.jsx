import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Shop from "./Shop";
import axios from "axios";




const Container = styled.div`
display:flex; 
flex-wrap: wrap;
`


const Shops1 = ({cat, filters, sort}) => {

const [shops, setShops] = useState([]);
const [filterShops, setFilterShops] = useState([]);

useEffect(() => {
const getShops = async () => {
  try{
     const res = await axios.get(cat ? `http://localhost:3001/api/shops?category=${cat}` : "http://localhost:3001/api/shops");
     setShops(res.data); 
  }catch(err){}
};
getShops();
},[cat]);


useEffect(() => {
cat && setFilterShops(shops.filter(item => Object.entries(filters).every(([key,value])=>
item[key].includes(value)
))
)
},[shops ,cat, filters])


useEffect(()=> {
if(sort==="newest"){
  setFilterShops(prev=>
    [...prev].sort((a,b)=> a.createdAt - b.createdAt)
    )
}
else if(sort==="asc"){
  setFilterShops(prev=>
    [...prev].sort((a,b)=> a.prices - b.prices)
    )
}
else{
  setFilterShops(prev=>
    [...prev].sort((a,b)=> b.price - a.price)
    )
}
},[sort])


  return (

    <Container >
        {
        shops.map(item => (
          <Shop item={item} key={item.id}/>))}

    </Container>


  )
}

export default Shops1