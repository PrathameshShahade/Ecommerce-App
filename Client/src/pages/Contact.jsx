import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const ContactHeader = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
`;

const ContactInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 18px;

  &:focus {
    outline: none;
    border-color: #0077ff;
  }
`;

const ContactTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 18px;

  &:focus {
    outline: none;
    border-color: #0077ff;
  }
`;

const ContactSubmit = styled.button`
  background-color: #0077ff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #0055cc;
  }

  &:focus {
    outline: none;
  }
`;

const ContactMap = styled.iframe`
  width: 100%;
  height: 500px;
  margin-top: 50px;
`;

function Contact() {
  return (
    <ContactContainer>
      <ContactHeader>Contact Us</ContactHeader>
      <ContactForm>
        <ContactInput type="text" placeholder="Name" required />
        <ContactInput type="email" placeholder="Email" required />
        <ContactTextArea placeholder="Message" rows="5" required />
        <ContactSubmit>Send Message</ContactSubmit>
      </ContactForm>
      <ContactMap src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=YOUR_ADDRESS" allowfullscreen />
    </ContactContainer>
  );
}

export default Contact;
