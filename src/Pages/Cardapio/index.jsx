import './style.css';
import { useState } from 'react';
import Topo from '../../Componentes/Topo';
import Cards from '../../Componentes/Cards';
import Categoria from '../../Componentes/Categoria';
import Rodape from '../../Componentes/Rodape';
import { ScrollToTopButton } from '../../Componentes/VoltarTopo';


import {
  filtrarProdutos,
  produtosEntradas,
} from "../../Service";

const Cardapio = () => {
  const [dadosFiltrados, setDadosFiltrados] = useState(produtosEntradas);
  const [botaoClicado, setBotaoClicado] = useState("Pastel");

  const handleFiltro = (categoria) => {
    setDadosFiltrados(filtrarProdutos(categoria));
    setBotaoClicado(categoria);
  };

  return (
    <div>
      <Topo />

      

      <main className="container-principal">

        <div>
          <h2>Cardápio</h2>
          <h4>Conheca o nosso cardápio</h4>
        </div>


        <Categoria handleFiltro={handleFiltro} botaoClicado={botaoClicado} />

        <section className="secao-cards">


          <div className="container-cards">
            {dadosFiltrados.map((produto) => (
              <Cards key={produto.id} produto={produto} />
            ))}
          </div>

        </section>
      
      <ScrollToTopButton />
      <Rodape />
      </main>
    </div>
  );
};

export default Cardapio;