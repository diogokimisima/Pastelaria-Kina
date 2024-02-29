import './style.css';
import iconePastel from '../../img/icone-pastel.png';
import iconeSalgado from '../../img/icone-salgado.png';
import iconeBebida from '../../img/coca-lata.png';
import iconeMassa from '../../img/icone-massinha.png'

const Categorias = ({handleFiltro, botaoClicado}) => {
    return (
        <section className='secao-categorias limitar-secao'>
            <div className='container-botoes'>

                <button className={botaoClicado === "Pastel" ? "acenderBtn" : "apagarBtn"} onClick={() => handleFiltro("Pastel")}>
                    <img src={iconePastel} alt="Pastel" />
                    Pastéis
                </button >

                <button className={botaoClicado === "Salgados" ? "acenderBtn" : "apagarBtn"} onClick={() => handleFiltro("Salgados")}>
                    <img src={iconeSalgado} alt="massas" />
                    Salgados
                </button>

                <button className={botaoClicado === "Bebidas" ? "acenderBtn" : "apagarBtn"} onClick={() => handleFiltro("Bebidas")}>
                    <img src={iconeBebida} alt="carnes" />
                    Bebidas
                </button>

                <button className={botaoClicado === "Massa" ? "acenderBtn" : "apagarBtn"} onClick={() => handleFiltro("Massa")}>
                    <img src={iconeMassa} alt="bebidas" />
                    Massas
                </button>

            </div>
        </section>
    );
};

export default Categorias;