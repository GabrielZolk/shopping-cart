import React from 'react';
import { BsCart4 } from 'react-icons/bs';

import './CartButton.css';

export default function CartButton() {
  return (
    <button className="cart__button">
      <BsCart4 />
      <span className="cart-status">2</span>
    </button>
  );
}
