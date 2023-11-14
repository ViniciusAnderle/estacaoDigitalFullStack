import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Produtos.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../produtosCarrinho/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

function Produtos() {

  const { products, setProducts, loading, setLoading } = useContext(AppContext);


  useEffect(() => {
    fetchProducts('computadores').then((resultados) => {
      setProducts(resultados);
      setLoading(false);
    });
  }, []);

  return (
    (loading && <Loading /> ) || (
      <section className="produtos container">
         {products.map((produto) => <Link to={`ResultadoProduto/${produto.id}`}><ProductCard key={produto.id} data={produto} /> </Link>)}
      </section>
    )

  );
}

export default  Produtos ;