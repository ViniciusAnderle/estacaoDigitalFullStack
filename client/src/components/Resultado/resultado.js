import React, {useContext, useEffect, useState } from 'react';
import './resultado.css'
import AppContext from '../../context/AppContext';
import { useParams } from 'react-router-dom';
import { fetchByID } from '../../api/fetchProducts';
import formatCurrency from '../../utils/formatCurrency';
import Loading from '../Loading/Loading';
import Counter from '../redux/Counter';
import Frete from '../Frete/frete'
import Compra from '../Compra/compra'
import { db } from '../../services/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';



function ProductResult(){ 
  const {loading, setLoading } = useContext(AppContext);
  const {id}= useParams();
  const [produto, setProduto] = useState({})
  const [quantity, setQuantity] = useState(0);
  const auth = getAuth();
  const [userID, setUserID] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userID = user.uid;
        setUserID(userID); 
      } else {
        
        setUserID(null); 
      }
    });
  }, [auth]);

  useEffect(() => {
    fetchByID(id).then((resultado) => {
      setProduto(resultado);
      setQuantity(resultado.quantity || 0);
      setLoading(false);
    });
  }, [auth]);

  const handleAddProductToFirestore = async (newQuantity) => {
    try {
      const docRef = await addDoc(collection(db, 'carrinho'), {
        title: produto.title,
        thumbnail: produto.thumbnail,
        id: id,
        quantidade: newQuantity,
        userID: userID, // Inclua o userID ao enviar para o Firestore
      });
      console.log('Informações do produto adicionadas com sucesso com ID: ', docRef.id);
      setQuantity(newQuantity);
    } catch (error) {
      console.error('Erro ao adicionar informações do produto ao Firestore: ', error);
    }
  };

  return(
    (loading && <Loading /> ) || (
    <section className='product-card'>
        <img
        src= {produto.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt='product'
        className='card-image'
        />
        <div className='Card-info'>
          <h2 className=' card-title'>{produto.title}</h2>
          <h4 className='card-price'> {formatCurrency(produto.price, 'BRL')}</h4>
          <span className='card-desc'>{produto.title}</span>
          <Counter productId={id} quantity={quantity} handleQuantityChange={handleAddProductToFirestore}/>
          <Frete/>
          <Compra/>
        </div>
    </section>
    )
  );
}
export default ProductResult;

