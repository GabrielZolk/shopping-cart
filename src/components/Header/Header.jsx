import React from 'react';
import Searchbar from '../Searchbar/Searchbar';

import CartButton from '../CartButton/CartButton';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Searchbar />
        <CartButton />
      </div>
    </header>
  );
}
