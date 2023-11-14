import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsBagPlusFill } from 'react-icons/bs';

import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function ProdutoCarrinho({ data }) {
  const { title, thumbnail, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => setCartItems([ ...cartItems, data ]);

  return (
    <section className="produto-box">
      
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className="imagem-box"
      />

      <div className="info-box">
        <h2 className="preco-box">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="titulo-box">{title}</h2>
      </div>

      <button
        type="button"
        className="botao-adicionar"
        onClick={ handleAddCart }
      >
        <BsBagPlusFill />
      </button>
    </section>
  );
}

export default ProdutoCarrinho;

ProdutoCarrinho.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
