import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #f2f2f2;
  border-radius: 10px;
`;

const FormTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const FormLabel = styled.label`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: none;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: none;
`;

const FormButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  margin-top: 1rem;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
`;

const FeedbackPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle form submission logic
  };

  return (
    <Container>
      <FormContainer>
        <FormTitle>Send us your feedback</FormTitle>
        <Form onSubmit={handleSubmit}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput type="text" id="name" name="name" required />

          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput type="email" id="email" name="email" required />

          <FormLabel htmlFor="message">Message</FormLabel>
          <FormTextarea id="message" name="message" rows="5" required />

          <FormButton type="submit">Submit</FormButton>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default FeedbackPage;
