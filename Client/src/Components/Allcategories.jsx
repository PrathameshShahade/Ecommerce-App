import styled from "styled-components";
import {Alllcategories} from "../data";
import AllcategoryItems from "./AllcategoryItems"

const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
`

const Allcategories = () => {
  return (
    <Container>
        {Alllcategories.map(item => (
            <AllcategoryItems item ={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Allcategories