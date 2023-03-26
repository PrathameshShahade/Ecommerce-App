import styled from "styled-components"
import MovingComponent from 'react-moving-text';

const Container = styled.div`
margin-top:50px;
display:flex;
background-color:#AFDBF5;
`;
const Image = styled.img`
height:500px;
`;
const ImageInfo = styled.span`
font-size:50px;
display:flex;
text-align:center;
justify-content:center;
align-items:center;
`;

const Flyer = () => {
  return (
    <Container>
        <Image src="https://i.giphy.com/media/3oEjHW5ZfmQsI2rUuk/giphy.webp"></Image>
        <ImageInfo>
        <MovingComponent type="typewriter"
  dataText={[
  'THE WORLD IS AT YOUR FEET SO MAKE SURE YOU ARE WEARING GREAT SHOES.',
  'YOU CAN WEAR ANYTHING AS LONG AS YOU PUT A NICE PAIR OF SHOES WITH IT.',
  'GOOD SHOES TAKES YOU GREAT PLACES.'
]} />
        </ImageInfo>

    </Container>
  )
}

export default Flyer