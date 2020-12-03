import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceFroStripe = price * 100;
  const publishablekey = 'pk_test_51HH8NaIbn6wt6TXXWYi2p8TjPpGa3RpM1wz44hQQ1jrCmEtVriJtu7BIUmNDtWxkRxCahkLnvs7K2DXclmMR4q0Q00h1qjk27N';

  const onToken = token => {
    console.log(token);
    alert('Payment Successfull');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceFroStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
