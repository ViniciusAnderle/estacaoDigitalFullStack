import React, { useState, useContext } from 'react';
import { BsSearch } from 'react-icons/bs';

import './SearchBar.css';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

function Pesquisa() {

  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');

  const Search = async (event) => {
    event.preventDefault();
    setLoading(true);

    const produtos = await fetchProducts(searchValue);

    setProducts(produtos);
    setLoading(false);
    setSearchValue('');
  };

  return (
    <form className="pesquisa" onSubmit={Search}>
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className="pesquisa-input"
        onChange={ ({ target }) => setSearchValue(target.value) }
        required
      />

      <button type="submit" className="pesquisa-botao">
        <BsSearch />
      </button>
    </form>
  );
}

export default Pesquisa;
