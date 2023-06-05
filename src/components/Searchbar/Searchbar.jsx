import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import './Searchbar.css';

export default function Searchbar() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <form className="search-bar">
      <input 
        type="search"
        value={searchValue}
        placeholder="Buscar produtos" 
        className="search__input"
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />
      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
  );
}
