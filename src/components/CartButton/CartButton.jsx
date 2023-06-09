import React, { useContext } from 'react';
import { BsCart4 } from 'react-icons/bs';

import './CartButton.css';
import AppContext from '../../context/AppContext';

export default function CartButton() {

  const { cartItems, isCartActive, setIsCartActive } = useContext(AppContext);

  return (
    <button onClick={() => {setIsCartActive(!isCartActive);}} className="cart__button">
      <BsCart4 />
      { cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span> }
    </button>
  );
}
