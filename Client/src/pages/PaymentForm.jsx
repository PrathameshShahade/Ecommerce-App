import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import StripeCheckout from 'react-stripe-checkout';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Amount = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #0070f3;
  color: #fff;
  padding: 12px 24px;
  font-size: 18px;
  border-radius: 8px;
  cursor: pointer;
`;

const PaymentForm = () => {
  const [amount, setAmount] = useState(0);

  const handleToken = async (token) => {
    const { data } = await axios.post('/charge', {
      amount: amount * 100,
      currency: 'INR',
      description: 'Example payment',
      source: token.id,
    });

    alert(data.message);
  };

  return (
    <Container>
      <Title>Make a Payment</Title>
      <Amount>
        Amount: {'\u20B9'}
        <input
          type="number"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
      </Amount>
      <StripeCheckout
        stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
        token={handleToken}
        amount={amount * 100}
        currency="INR"
        name="Example Payment"
        description="Example payment description"
        email="example@payment.com"
        billingAddress={false}
        zipCode={false}
      >
        <Button>Pay with Stripe</Button>
      </StripeCheckout>
    </Container>
  );
};

export default PaymentForm;
