import './style.css';
import Logo from '../../img/logo.png'
import { Link } from "react-router-dom";
import {useState} from 'react';

export default function Topo() {
        const [ativar, setAtivar] = useState("nav-list");
        const navList = () => {
            ativar === 'nav-list' ? setAtivar('nav-list nav-active') : setAtivar("nav-list");
        }
    return (
        <header>
            <div className='limitar-secao navbar'>
            <Link className="link-topo" to="/"><img src={Logo} alt="logo" /></Link>
                <nav>
                    <div className="mobile-menu" onClick={navList}>
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line2'></div>
                    </div>
                    <div className={ativar} id="links">
                        <Link className="link-topo" to="/">HOME</Link>
                        <Link className="link-topo" to="/Cardapio">CARDÁPIO</Link>
                        <Link className="link-topo" to="/Sobre">SOBRE</Link>
                    </div>

                </nav>
            </div>
        </header>
    )
}