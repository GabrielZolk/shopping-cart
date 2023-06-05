import React from 'react';
import propTypes from 'prop-types';
import { FaCartPlus } from 'react-icons/fa';
import formatCurrency from '../../api/utils/formatCurrency';

import './ProductCard.css';

export default function ProductCard({ data }) {
  const { title, thumbnail, price } = data;

  return (
    <div className="product-card">
      <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="product" className="card__image" />

      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
      </div>
      <button type="button" className="button__add-cart">
        <FaCartPlus />
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  data: propTypes.shape({})
}.isRequired;
