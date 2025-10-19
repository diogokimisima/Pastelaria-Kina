import './style.css';
import { useState, useEffect } from 'react';
import Topo from '../../Componentes/Topo';
import Cards from '../../Componentes/Cards';
import Categoria from '../../Componentes/Categoria';
import Rodape from '../../Componentes/Rodape';
import { ScrollToTopButton } from '../../Componentes/VoltarTopo';

import {
  filtrarProdutos,
  produtosEntradas,
} from "../../Service";

const SkeletonCard = () => (
  <div className="card-skeleton">
    <div className="skeleton-img" />
    <div className="skeleton-title" />
    <div className="skeleton-text" />
  </div>
);

const Cardapio = () => {
  const [dadosFiltrados, setDadosFiltrados] = useState(produtosEntradas);
  const [botaoClicado, setBotaoClicado] = useState("Pastel");
  const [isLoading, setIsLoading] = useState(false);

  const handleFiltro = (categoria) => {
    setIsLoading(true);
    // Small delay to show loading state for better UX
    setTimeout(() => {
      setDadosFiltrados(filtrarProdutos(categoria));
      setBotaoClicado(categoria);
      setIsLoading(false);
    }, 300);
  };

  useEffect(() => {
    // Apply initial filter
    setDadosFiltrados(filtrarProdutos("Pastel"));
  }, []);

  return (
    <div className="cardapio-page">
      <Topo />

      <main className="container-principal">
        <div className="cardapio-header">
          <h2>Cardápio</h2>
          <h3>Conheça o nosso cardápio</h3>
        </div>

        <Categoria handleFiltro={handleFiltro} botaoClicado={botaoClicado} />

        <section className="secao-cards">
          {isLoading ? (
            <div className="container-cards">
              {[...Array(10)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : (
            <div className="container-cards">
              {dadosFiltrados.length > 0 ? (
                dadosFiltrados.map((produto) => (
                  <Cards key={produto.id} produto={produto} />
                ))
              ) : (
                <div className="no-results">
                  Nenhum item encontrado nesta categoria.
                </div>
              )}
            </div>
          )}
        </section>

      
        <ScrollToTopButton />
      </main>
      
      <Rodape />
    </div>
  );
};

export default Cardapio;