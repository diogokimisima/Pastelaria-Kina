import "./style.css";
import iconeInsta from '../../img/icone-insta.png';
import iconeFace from '../../img/icone-face.png';

export default function Banner() {
    return (
        <section className="secao-banner">
            <div className="imagem-de-fundo"></div>
            <div className="texto-secaoBanner">
                <h2> Pastelaria Kina </h2>
                <p>O melhor <span>pastel</span> da região</p>
                <div className="secao-icone">
                    <a href="#insta"><img className="icone" src={iconeInsta} alt="insta" /></a>
                    <a href="#face"><img className="icone" src={iconeFace} alt="face" /></a>
                </div>
            </div>
        </section>
    )
}