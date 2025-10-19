import './style.css';
import iconePastel from '../../img/icone-pastel.png';
import iconeSalgado from '../../img/icone-salgado.png';
import iconeBebida from '../../img/coca-lata.png';
import iconeMassa from '../../img/icone-massinha.png';

const Categorias = ({handleFiltro, botaoClicado}) => {
    // Define categories array for better scalability
    const categories = [
        { id: 'Pastel', name: 'Pastéis', icon: iconePastel, alt: 'Pastel' },
        { id: 'Salgados', name: 'Salgados', icon: iconeSalgado, alt: 'Salgados' },
        { id: 'Bebidas', name: 'Bebidas', icon: iconeBebida, alt: 'Bebidas' },
        { id: 'Massa', name: 'Massas', icon: iconeMassa, alt: 'Massas' }
    ];

    return (
        <section className='secao-categorias'>
            <div className='container-botoes'>
                {categories.map(category => (
                    <button 
                        key={category.id}
                        className={`categoria-btn ${botaoClicado === category.id ? "ativo" : ""}`} 
                        onClick={() => handleFiltro(category.id)}
                        aria-pressed={botaoClicado === category.id}
                    >
                        <img src={category.icon} alt={category.alt} />
                        <span>{category.name}</span>
                    </button>
                ))}
            </div>
        </section>
    );
};

export default Categorias;