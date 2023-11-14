import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsBagDashFill } from 'react-icons/bs';
import './itensDoCarrinho.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function ItemCarrinho({ data }) {

  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, thumbnail, title, price } = data;

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id != id);
    setCartItems(updatedItems);
  };

  return (
    <section className="carrinho-item">
      <img
        src={thumbnail}
        alt="imagem do produto"
        className="carrinho-imagem"
      />

      <div className="carrinho-conteudo">
        <h3 className="carrinho-titulo">{title}</h3>
        <h3 className="carrinho-preco">{formatCurrency(price, 'BRL')}</h3>

        <button
          type="button"
          className="remover"
          onClick={ handleRemoveItem }
        >
          <BsBagDashFill />
        </button>
      </div>
    </section>
  );
}

export default ItemCarrinho;

ItemCarrinho.propTypes = {
  data: propTypes.object
}.isRequired;
