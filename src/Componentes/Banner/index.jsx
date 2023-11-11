import "./style.css";
import iconeInsta from '../../img/icone-insta.png';
import iconeFace from '../../img/icone-face.png';
import { Link } from "react-router-dom";

export default function Banner() {
    return (
        <section className="secao-banner limitar-secao">
            <div className="imagem-de-fundo"></div>
            <div className="texto-secaoBanner">
                <h2> Pastelaria Kina </h2>
                <p>O melhor <span>pastel</span> da região</p>
                <div className="secao-link-cardapio">
                <Link className="cardapio-botao" to="/Cardapio">VER CARDÁPIO</Link>
                </div>
                <div className="secao-icone">
                    <a href="https://www.instagram.com/pastelariakina" target="blank"><img className="icone" src={iconeInsta} alt="insta" /></a>
                    <a href="https://www.facebook.com/pastelariakina" target="blank"><img className="icone" src={iconeFace} alt="face" /></a>
                </div>
                
            </div>
        </section>
    )
}