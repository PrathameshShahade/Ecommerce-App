import styled from "styled-components"

const Container = styled.div`
height:30px;
margin-top:10px;
background-color:#A3CEDC;
color: white;
display: flex;
align-items:center;
justify-content: center;
font-size: 14px;
font-weight: bolder;
`

const Announcements = () => {
  return (
    <Container>Free Delivery on Orders above RS.1999</Container>
  )
}

export default Announcements