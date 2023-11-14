import React, { useContext } from 'react';

import './Carrinho.css';
import CartItem from '../itensCarrinho/itensDoCarrinho';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';

function Carrinho() {
  const { cartItems, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  return (
    <section className={`carrinho ${isCartVisible ? 'aparente' : ''}`}>
      <h2>Sacola de compras</h2>
      <div className="itens">
        { cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />) }
      </div>

      <div className="valor">{formatCurrency(totalPrice, 'BRL')}</div>
    </section>
  );
}

export default Carrinho;
