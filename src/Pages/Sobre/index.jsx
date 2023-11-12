import './style.css';
import Topo from '../../Componentes/Topo';
import Rodape from '../../Componentes/Rodape';
import { ScrollToTopButton } from '../../Componentes/VoltarTopo';

import foodTruck from '../../img/food2.JPEG';
import vinagrete from '../../img/vinagrete.jpg';
import senha from '../../img/senha-pedidos.jpg';
import ambiente from '../../img/ambiente2.jpg';

const Sobre = () => {

  return (
    <div className='background'>
      <Topo />
      <main className='secao-main-sobre limitar-secao'>
            <h1>Sobre nós</h1>
        <section className="secao-card foodtruck ">
          <img src={foodTruck} alt="Food Truck" />    
          <div className="texto-cards">
            <h2>Nossas Foods trucks</h2>
            <p>
            Com o tempo investimos em modernos food trucks para atender a um público mais amplo, sempre mantendo a qualidade e eficiência como nossas prioridades.
            </p>
          </div>
        </section>

        <section className="secao-card secao-vinagrete">
          <div className="texto-cards">
            <h2>Vinagrete</h2>
            <p>
            Os pasteis sao acompanhados por um vinagrete exclusivo. Complementando a massa crocante e o recheio dos pasteis, proporcionando aos clientes uma combinação perfeita
            </p>
          </div>
          <img src={vinagrete} alt="vinagrete" />
        </section>

        <section className="secao-card secao-senha">
          <img src={senha} alt="senha" />
          <div className="texto-cards">
            <h2> Senhas eletrônicas </h2>
            <p>Implementamos um sistema de senha eletrônica para agilizar o atendimento. Ao fazer um pedido, os clientes recebem uma senha eletrônica que vibra quando o pedido estiver pronto. 
            </p>
          </div>
        </section>

        <section className="secao-card secao-ambiente">
          <div className="texto-cards">
            <h2> Ambiente </h2>
            <p>Na Pastelaria Kina, o ambiente é toda ao ar livre, na Praça Paraíso é aquele lugar onde você pode relaxar, saborear a comida deliciosa e curtir o ambiente descontraído. Não é só sobre os pasteis incríveis, mas também sobre aproveitar o cenário ao redor.
            </p>
          </div>
          <img src={ambiente} alt="ambiente" />
        </section>

      </main>

      <ScrollToTopButton />
      <Rodape />
    </div>
  );
};

export default Sobre;