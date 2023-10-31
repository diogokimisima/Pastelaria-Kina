import './style.css';
import Logo from  '../../img/logo.png'
import { Link } from "react-router-dom";

export default function Topo() {
    return (
        <header>
            <div className='limitar-secao'>
                <img src={Logo} alt="logo" />
                <nav>
                    <Link className="link-topo" to="/">HOME</Link>
                    <Link className="link-topo" to="/Cardapio">CARDAPIO</Link>
                    <Link className="link-topo" to="/Sobre">SOBRE</Link>
                </nav>
            </div>
        </header>
    )
}