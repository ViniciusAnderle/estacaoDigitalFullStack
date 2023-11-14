import React, { useContext } from 'react';
import { BsBagFill } from 'react-icons/bs';

import './botaoCarrinho.css';
import AppContext from '../../context/AppContext';

function CartButton() {

  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button
      type="button"
      className="botaocarrinho"
      onClick={ () => setIsCartVisible(!isCartVisible) }
    >
      <BsBagFill />
      { cartItems.length > 0 && <span className="verificacao">{cartItems.length}</span> }
    </button>
  );
}

export default CartButton;
