import React, { useContext, useEffect } from 'react';

import fetchProducts from '../../api/fetchProducts';
import './Products.css';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

export default function Products() {
 
  const { products, setProducts } = useContext(AppContext);
  const { loading, setLoading } = useContext(AppContext);


  useEffect(() => {
    fetchProducts('iphone').then((res) => {
      setProducts(res);
      setLoading(false);
    });
  }, []);

  return (
    (loading ? <Loading /> :
      <div className="products container">
        {products.map((product) => <ProductCard key={product.id} data={product} />)}
      </div>
    )

  );
}
