import styled from 'styled-components';
import { useLocation } from 'react-router-dom'

const Success = () => {
  
    const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1.5rem;
`;

  return (
     <Container>
      <Title>Payment completed successfully</Title>
      <Text>Thank you for your purchase!</Text>
    </Container>
  )
}

export default Success