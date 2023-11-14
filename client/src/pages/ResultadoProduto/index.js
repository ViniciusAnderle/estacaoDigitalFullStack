import Header from '../../components/Header/Header';
import Resultado from '../../components/Resultado/resultado';
import Provider from '../../context/Provider';
import Carrinho from '../../components/carrinho/Carrinho';
import Footer from '../../components/rodape/rodape'

function Home() {
    return (
        <div>
            <Provider>
                <Header />
                <Carrinho />
                <Resultado />
                <Footer />
            </Provider>
        </div>)
}
export default Home;