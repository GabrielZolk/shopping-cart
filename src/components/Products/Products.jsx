import React, { useEffect, useState } from 'react';
import fetchProducts from '../../api/fetchProducts';
import './Products.css';
import ProductCard from '../ProductCard/ProductCard';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts('iphone').then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <div className="products container">
      {products.map((product) => <ProductCard key={product.id} data={product}/>)}
    </div>
  );
}
