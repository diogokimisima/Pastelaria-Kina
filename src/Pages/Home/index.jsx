import './style.css';
import Topo from '../../Componentes/Topo';
import Banner from '../../Componentes/Banner';
import Horarios from '../../Componentes/Horarios';
import Servicos from '../../Componentes/Servicos';
import Rodape from '../../Componentes/Rodape';
import { ScrollToTopButton } from '../../Componentes/VoltarTopo';

const Home = () => {


  return (
    <div className='secao-home'>
      <Topo />
      <Banner />
      <Servicos />
      <Horarios/>
      <ScrollToTopButton/>
      <Rodape />
    </div>
  );
};

export default Home;