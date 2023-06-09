import React from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div>
      <Cart />
      <Header />
      <Products />
    </div>
  );
}

export default App;
