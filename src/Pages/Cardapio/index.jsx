import './style.css';
import { useState, useEffect} from 'react';
import Topo from '../../Componentes/Topo';
import Cards from '../../Componentes/Cards';
import Categoria from '../../Componentes/Categoria';
import Rodape from '../../Componentes/Rodape';


import {
  filtrarProdutos,
  produtosEntradas,
} from "../../Service";

const Cardapio = () => {
  const [dadosFiltrados, setDadosFiltrados] = useState(produtosEntradas);
  const [botaoClicado, setBotaoClicado] = useState("Pastel");
  const [showScrollButton, setShowScrollButton] = useState(false);


  const handleFiltro = (categoria) => {
    setDadosFiltrados(filtrarProdutos(categoria));
    setBotaoClicado(categoria);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // adiciona um efeito suave de rolagem
    });
  };

  const handleScroll = () => {
    const top = window.scrollY;
    setShowScrollButton(top > 0); // Define o estado com base na posição de rolagem
  };

  useEffect(() => {
    // Adiciona o event listener quando o componente é montado
    window.addEventListener('scroll', handleScroll);

    // Remove o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // O segundo argumento vazio garante que o event listener seja adicionado e removido corretamente

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
      </main>
      {showScrollButton && (
        <div className='voltar-topo' onClick={scrollToTop}>
          <i className='seta up'></i> 
        </div>
      )}
      <Rodape />
    </div>
  );
};

export default Cardapio;