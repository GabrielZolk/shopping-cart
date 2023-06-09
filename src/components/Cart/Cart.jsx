import React, { useContext } from 'react';

import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../api/utils/formatCurrency';

export default function Cart() {
  const { cartItems, isCartActive } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => {
    return item.price + acc;
  }, 0);

  return (
    <div className={`cart ${isCartActive ? 'cart--active' : ''}`}>
      <div className="cart-items">
        {cartItems.map((item) => <CartItem key={cartItems.id} data={item}/>)}
      </div>
      <div className="cart-resume">{formatCurrency(totalPrice, 'BRL')}</div>
    </div>
  );
}
