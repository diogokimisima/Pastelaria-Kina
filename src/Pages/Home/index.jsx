import './style.css';
import Topo from '../../Componentes/Topo';
import Banner from '../../Componentes/Banner';
import Horarios from '../../Componentes/Horarios';
import Servicos from '../../Componentes/Servicos';
import Rodape from '../../Componentes/Rodape';

const Home = () => {


  return (
    <div className='secao-home'>
      <Topo />
      <Banner />
      <Servicos />
      <Horarios/>
      <Rodape />
    </div>
  );
};

export default Home;