import Header from '../../components/Header/Header';
import Produtos from '../../components/Products/Produtos';
import Provider from '../../context/Provider';
import Carrinho from '../../components/carrinho/Carrinho';
import Footer from '../../components/rodape/rodape'

function Home() {
    return (
        <div>
            <Provider>
                <Header />
                <Produtos />
                <Carrinho />

                <Footer />

            </Provider>
        </div>)
}
export default Home;