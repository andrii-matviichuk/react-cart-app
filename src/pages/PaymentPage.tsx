import { useState } from 'react';
import { useLocation } from 'react-router';
// Components
import Form from '../components/Form';
// Styles
import { PaymentPageContainer } from '../App.styles';

const PaymentPage = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const location = useLocation();
  const totalPrice: any = location.state;

  // Handlers
  const payButtonHandler = () => {
    console.log('We will redirect you to stripe or other payment processor');
  };
  return (
    <PaymentPageContainer className="container flex_column jcai_c">
      <h1>Payment Information</h1>
      <Form setFormIsValid={setFormIsValid} />
      <div className="flex_row">
        <h3>Total: </h3>
        <h3>{totalPrice ? totalPrice : Number(0).toFixed(2)} €</h3>
      </div>
      <button
        className={`btn ${formIsValid ? '' : 'disabled_btn'}`}
        onClick={payButtonHandler}
        disabled={!formIsValid}
      >
        Pay Now
      </button>
    </PaymentPageContainer>
  );
};

export default PaymentPage;
