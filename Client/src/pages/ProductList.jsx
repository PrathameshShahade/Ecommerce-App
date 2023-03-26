import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components"
import Announcements from "../Components/Announcements";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import Products1 from "../Components/Products1"


const Container = styled.div`

`;
const Title = styled.h1`
margin:20px;
`;
const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
`;
const Filter = styled.div`
margin:20px;
`;
const FilterText = styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
`;
const Select = styled.select`
margin-right:20px;
padding:10px;
`;
const Option = styled.option`

`;


const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] =useState({});
  const [sort, setSort] =useState("newest");

  const handleFilters = (e) => {
     const value = e.target.value;
     setFilters({
      ...filters,
        [e.target.name]: value,
     });
  };

  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter><FilterText>Filter Products</FilterText>
            <Select name="color" onChange={handleFilters}>
              <Option disabled>Color</Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Gray</Option>
              <Option>Pink</Option>
            </Select>

            <Select name="size" onChange={handleFilters}>
              <Option disabled>Size</Option>
              <Option>UK 5</Option>
              <Option>UK 6</Option>
              <Option>UK 7</Option>
              <Option>UK 8</Option>
              <Option>UK 9</Option>
              <Option>UK 10</Option>
            </Select>
            </Filter>

            <Filter><FilterText>Sort Products By</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="newest">Newest</Option>
              <Option value="asc">Price : Low to High</Option>
              <Option value="desc">Price : High to Low</Option>
            </Select>
            </Filter>
        </FilterContainer>
        <Products1 cat={cat} filters={filters} sort={sort} />
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList