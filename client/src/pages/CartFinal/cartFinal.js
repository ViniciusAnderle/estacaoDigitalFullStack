import Header from '../../components/Header/Header';
import CartFinal from '../../components/cartFinal/Cart';
import Provider from '../../context/Provider';
import Carrinho from '../../components/carrinho/Carrinho';
import Footer from '../../components/rodape/rodape'

function Home() {
    return (
        <div>
            <Provider>
                <Header />
                <CartFinal />
                <Footer />
            </Provider>
        </div>)
}
export default Home;