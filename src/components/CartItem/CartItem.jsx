import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsCartXFill } from 'react-icons/bs';

import './CartItem.css';
import formatCurrency from '../../api/utils/formatCurrency';
import AppContext from '../../context/AppContext';

export default function CartItem({ data }) {
  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, thumbnail, title, price  } = data;
  
  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id != id);
    setCartItems(updatedItems);
  };

  return (
    <div className="cart-item">
      <img src={thumbnail} alt="" className="cart-item-image" />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>

        <button onClick={handleRemoveItem} type="button" className="button__remove-item">
          <BsCartXFill />
        </button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  data: propTypes.object,
}.isRequired;


