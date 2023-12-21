import './style.css';
import qualidade from '../../img/logo-qualidade.png';
import salgados from '../../img/logo-salgados.png';
import velocidade from '../../img/logo-velocidade.png';

export default function Servicos() {
    return (
        <section className='secao-servicos limitar-secao'>
            <h2>Nossos Serviços</h2>
            <div className='cards-servicos'>
            <div className='cards'>
                <img src={qualidade} alt="qualidade" />
                <p>O melhor pastel</p>
            </div>
            <div className='cards'>
                <img src={salgados} alt="salgados" />
                <p>O Melhor preço</p>
            </div>
            <div className='cards'>
                <img src={velocidade} alt="velocidade" />
                <p>Pedidos rápidos</p>
            </div>
            </div>
        </section>
    )
}