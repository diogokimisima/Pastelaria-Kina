import './style.css';
import Topo from '../../Componentes/Topo';
import Rodape from '../../Componentes/Rodape';
import { ScrollToTopButton } from '../../Componentes/VoltarTopo';

import foodTruck from '../../img/food2.JPEG';
import vinagrete from '../../img/vinagrete.jpg';

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

        <section className="secao-card ">
          <img src="assets/sobre-image.jpg" alt="foto" />
          <div className="texto-secao-sobre-nos">
            <h2> </h2>
            <p>
          
            </p>
          </div>
        </section>

      </main>

      <ScrollToTopButton />
      <Rodape />
    </div>
  );
};

export default Sobre;