import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './frete.css';

const Frete = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [addressInfo, setAddressInfo] = useState(null);
  const [freteGratis, setFreteGratis] = useState(false); // Estado para controlar o frete grátis
  const [freteCalculado, setFreteCalculado] = useState(false); // Estado para controlar a exibição do valor do frete

  const onSubmit = (e) => {
    console.log(e);
    setFreteCalculado(true); // Ativar a exibição do valor do frete quando o botão é acionado
  };

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setValue('address', data.logradouro);
        setValue('neighborhood', data.bairro);
        setValue('city', data.localidade);
        setValue('uf', data.uf);
        setAddressInfo(data);

        const isFreteGratis = data.cep.startsWith('8');
        setFreteGratis(isFreteGratis);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='Digite seu cep'
          {...register('cep')}
          onBlur={checkCEP}
        />
        <button type='submit'>Calcular frete</button>
      </form>

      {addressInfo && (
        <div>
          <p>
            Rua: {addressInfo.logradouro}, Bairro: {addressInfo.bairro}, Cidade: {addressInfo.localidade}, Estado: {addressInfo.uf}
          </p>
        </div>
      )}

      {freteCalculado && (
        freteGratis ? (
          <h4>Frete Grátis!</h4>
        ) : (
          <h4>Frete calculado em {30.0.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h4>
        )
      )}
    </div>
  );
};
export default Frete;
