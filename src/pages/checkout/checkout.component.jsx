import React, { useContext } from 'react';

import CheckoutItem from '../../components/checkout-item/chechkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { CartContext } from '../../providers/cart/cart.provider';

import './checkout.styles.scss';

const CheckoutPage = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          Product
      </div>
        <div className='header-block'>
          Description
      </div>
        <div className='header-block'>
          QuantityE
      </div>
        <div className='header-block'>
          Price
      </div>
        <div className='header-block'>
          Remove
      </div>
      </div>
      {
        cartItems.map(item =>
          <CheckoutItem cartItem={item} />
        )
      }
      <div className='total'>
        <span>TOTAL ${cartTotal}</span>
      </div>
      <div className='test-warning'>
        <block>
          *** Please use one of the following cards for payments ***
        <br />
        VISA ==>> 4242 4242 4242 4242 expr. 04/24 CVV: 424
        <br />
        MC  ==>> 5555 5555 5555 4444 expr. 05/24 CVV: 545
        <br />
        DISC ==>> 6011 1111 1111 1117 expr. 01/24 CVV: 171
       <br />
        </block>
      </div>
      <StripeCheckoutButton price={cartTotal} />
    </div>
  );
}

export default CheckoutPage;