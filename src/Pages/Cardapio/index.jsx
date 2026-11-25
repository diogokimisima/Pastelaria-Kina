import './style.css';
import { useState, useEffect, useMemo } from 'react';
import Topo from '../../Componentes/Topo';
import Cards from '../../Componentes/Cards';
import Categoria from '../../Componentes/Categoria';
import Rodape from '../../Componentes/Rodape';
import { ScrollToTopButton } from '../../Componentes/VoltarTopo';

import {
  filtrarProdutos,
  produtosEntradas,
  buscarProdutos,
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
  const [busca, setBusca] = useState("");

  const buscando = busca.trim().length > 0;
  const resultadosBusca = useMemo(() => buscarProdutos(busca), [busca]);
  const produtosExibidos = buscando ? resultadosBusca : dadosFiltrados;

  const handleFiltro = (categoria) => {
    setBusca("");
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

        <div className="busca-container">
          <div className="busca-campo">
            <svg className="busca-icone" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="21" y2="21" />
            </svg>
            <input
              type="search"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              onKeyDown={(e) => e.key === "Escape" && setBusca("")}
              placeholder="Buscar por nome ou ingrediente (ex: ovo, catupiry, refri)"
              aria-label="Buscar no cardápio"
            />
            {buscando && (
              <button
                type="button"
                className="busca-limpar"
                onClick={() => setBusca("")}
                aria-label="Limpar busca"
              >
                ×
              </button>
            )}
          </div>
          {buscando && (
            <p className="busca-info">
              {resultadosBusca.length === 0
                ? <>Nenhum resultado para "<strong>{busca.trim()}</strong>"</>
                : <>{resultadosBusca.length} {resultadosBusca.length === 1 ? "resultado" : "resultados"} para "<strong>{busca.trim()}</strong>"</>}
            </p>
          )}
        </div>

        <Categoria handleFiltro={handleFiltro} botaoClicado={buscando ? null : botaoClicado} />

        <section className="secao-cards">
          {isLoading ? (
            <div className="container-cards">
              {[...Array(10)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : (
            <div className="container-cards">
              {produtosExibidos.length > 0 ? (
                produtosExibidos.map((produto) => (
                  <Cards key={produto.id} produto={produto} />
                ))
              ) : (
                <div className="no-results">
                  {buscando
                    ? "Nenhum produto encontrado. Tente outra palavra, como um ingrediente."
                    : "Nenhum item encontrado nesta categoria."}
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