import React from 'react';
import { connect } from 'react-redux';
import './counter.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Counter = (props) => {
  const confirmQuantity = () => {
    const { count, handleQuantityChange } = props;
    console.log(count);
    handleQuantityChange(count);
    toast.success('Item salvo');
  };

  return (
    <div className='quant'>
      <button onClick={props.incremento}>+</button>
      <button onClick={props.decremento}>-</button>
      <span className='text'>Quantidade: {props.count}</span>
      <button onClick={confirmQuantity}>Salvar</button>
    </div>
  );
};

const mapState = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatch = (dispatch) => {
  return {
    incremento: () => dispatch({ type: 'INCREMENTO' }),
    decremento: () => dispatch({ type: 'DECREMENTO' }),
  };
};

export default connect(mapState, mapDispatch)(Counter);
